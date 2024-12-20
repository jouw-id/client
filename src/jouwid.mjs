import { getRemoteClient, MASTER_POD_ALIAS } from '@datavillage-me/api'
import { assert, Required, Optional, instanceOf, oneOf, validURL } from '@muze-nl/assert'

/**
 * namespace prefix for use in the token storage.
 */
const namespace = 'sndk:';

/**
 * Datavillage solid-bridge API endpoint
 */
let datavillageApiUrl = "https://api.sndk.datavillage.me";

/**
 * OIDC Issuer url of jouw.id
 */
let idpURL = "https://idp.jouw.id";

/**
 * storage variable containing the token storage api later
 */
let storage;

/**
 * variable containing the datavillage client
 */
let remoteClient

/**
 * idToken variable containing current users idToken, after login
 */
let idToken;

/**
 * user variable containing current users information, after login
 */
let user;

export function useDevServers() {
    idpURL = "https://idp.dev.jouw.id";
    datavillageApiUrl = "https://api.sndk-dev.datavillage.me";
}

/**
 * login() makes sure the user is logged in. If the user is not yet logged in,
 * it will redirect the user to the jouw.id login url. You can change this behaviour
 * through the options.
 * @param (object) options The options for login:
 * - client_id:     Required, string
 * - client_secret: Required, string
 * - idpRedirect:   Optional, function(url)
 * - silent:        Optional, bool, if true: the browser won't be redirected if the user is not logged in
 * - keepLoggedIn:  Optional, bool, if true: the tokens are stored in localStorage, otherwise in sessionStorage
 * @return (string) The users webid, or false if the user is not logged in.
 */
export async function login(options={})
{
    const validOptions = {
        client_id:     Required(String),
        client_secret: Required(String),
        idpRedirect:   Optional(instanceOf(Function)),
        silent:        Optional(Boolean),
        keepLoggedIn:  Optional(Boolean)
    };

    assert(options, validOptions);

    const defaultOptions = {
        idpRedirect:  (url) => window.location.replace(url),
        silent:       false,
        keepLoggedIn: true
    };

    options = Object.assign({}, defaultOptions, options);

    const url = new URL(location.href);
    let searchParams = new URLSearchParams(url.search);
    if (!searchParams.has('token')) {
        let base = new URL(document.baseURI)
        searchParams = new URLSearchParams(base.search) // safari private window workaround
    }
    if (!storage) {
        storage = tokenStorage(options.keepLoggedIn ? 'local' : 'session');
    }

    const forwardedToken = searchParams.get("token");
    if (forwardedToken) {
        storage.set("id_token", forwardedToken);
        let cleanURL = new URL(window.location.href)
        cleanURL.searchParams.delete('token')
        history.replaceState({}, '', cleanURL.href)
    }

    const storedToken = storage.get("id_token", "");
    if (storedToken && storedToken !== idToken) {
        idToken = storedToken;
    }

    if (!remoteClient) {
        const newClient = getRemoteClient(
            datavillageApiUrl,
            idToken ?? undefined,
            "AuthBearer"
        );
        remoteClient = newClient;
    }
    
    if (!remoteClient) {
       return false;
    }

    user = await remoteClient
    .getPassport()
    .getCurrentUser();

    if (!user && !options.silent) {
         user = await redirectToLogin(options.idpRedirect);
    }

    return user;
}

/**
 * Returns the current idToken, if the user is logged in. False otherwise.
 */
export function isLoggedIn(options={}) {
    const validOptions = {
        keepLoggedIn: Optional(Boolean)
    }
    assert(options, validOptions)

    let params = new URLSearchParams(window.location.search)
    if (!params.has('token')) {
        let base = new URL(document.baseURI)
        params = new URLSearchParams(base.search) // safari private mode workaround
    }
    if (params.has('token')) {
        return true // make sure that isLoggedIn returns true during login process
    }
    if (!storage) {
        storage = tokenStorage(options.keepLoggedIn ? 'local' : 'session');
    }
    return storage.get("id_token") ?? false;
}

/**
 * 
 */
export async function logout(options)
{
    const defaultOptions = {
        redirectURL: '/',
        logoutIDP: false
    }

    const validOptions = {
        redirectURL: Optional(oneOf(validURL, validRelativeURL)),
        logoutIDP: Optional(Boolean)
    }

    assert(options, validOptions)

    options = Object.assign({}, defaultOptions, options)

    storage.remove("id_token");
    localStorage.removeItem(namespace + "id_token");
    localStorage.removeItem("jouwid-overlay-closed");
    sessionStorage.removeItem(namespace + "id_token");
    sessionStorage.removeItem("jouwid-overlay-closed");

    if (remoteClient) {
        await remoteClient.getPassport().logout();
        if (options.logoutIDP) {
            // FIXME: do this through the remoteClient instead
            // await fetch(new URL('/logout', idpURL), {
            //     method: "GET",
            // });
        }
        user = null
        if (options.redirectURL) {
            window.location = options.redirectURL;
        }
    }
}

/**
 * Get a resource that is protected, so you must be logged
 * in to access it, and have an access grant.
 */
export async function getProtectedResource(options)
{
	const defaultOptions = {
	}

	const validOptions = {
		resourcePath: Required(String)
	}

    if (typeof options == 'string') {
        options = {
            resourcePath: options
        }
    }

    assert(options, validOptions)

	options = Object.assign({}, defaultOptions, options)

	if (remoteClient && user?.id) {
        try {
    		const pod = await remoteClient
    		.getUsersServices()
    		.getPodInstance(user.id, MASTER_POD_ALIAS)
            const resource = await pod
    		.getFile(options.resourcePath)

            if (resource.metadata.contentType.match(/^application\/(.*\+)?json/)) {
                return JSON.parse(await resource.content.text())
            } else if (resource.metadata.contentType.match(/^text\//)) {
                return resource.content.text()
            } else {
                return resource.content // Blob
            }
        } catch(e) {
            console.error(e)
        }
    }
    return false
}

/**
 * Token storage helper
 */
const tokenStorage = function(type)
{
    const typeStorage = type === 'local' ? localStorage : sessionStorage;

    return {
        get(key, defaultValue) {
            try {
                const value = typeStorage.getItem(namespace + key);
                if (value === null) {
                    return defaultValue;
                }
                return JSON.parse(value);
            } catch (e) {
                console.warn(`Reading from ${type}Storage failed`, e);
                return defaultValue;
            }
        },
        set(key, value) {
            try {
                typeStorage.setItem(namespace + key, JSON.stringify(value));
            } catch (e) {
                console.warn(`Saving to ${type}Storage failed`, e);
            }
        },
        remove(key) {
            try {
                typeStorage.removeItem(namespace + key);
            } catch (e) {
                console.warn(`Removing from ${type}Storage failed`, e);
            }
        }
    }
};

async function redirectToLogin(redirectFn)
{
	const redirectURL = `CODEREDIRECT:${window.location.href}`;
	const loginURL = await remoteClient
		?.getPassport()
		?.getAuthenticationUrl(
			redirectURL,
			"inrupt",
			new URL('/', idpURL)
		);

        // add referrer parameter to the login url
	return redirectFn(loginURL + `${loginURL.includes('?') ? '&' : '?'}referrer=${window.location.href}`);
};

const validRelativeURL = (url) => {
    let base = new URL('/', window.location.href)
    return validURL(base.href + url)
}