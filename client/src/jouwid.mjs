import { getRemoteClient } from '@datavillage-me/api'
import { assert, Required, Optional, instanceOf, oneOf, validURL } from '@muze-nl/assert'

/**
 * namespace prefix for use in the token storage.
 */
const namespace = 'sdkn:';

/**
 * Datavillage solid-bridge API endpoint
 */
const datavillageApiUrl = "https://api.sndk-dev.datavillage.me";

/**
 * OIDC Issuer url of jouw.id
 */
const idpURL = "https://idp.dev.jouw.id";

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

    const defaultOptions = {
        idpRedirect:  (url) => window.location.replace(url),
        silent:       false,
        keepLoggedIn: true
    };

    options = Object.assign({}, defaultOptions, options);

    assert(options, validOptions);

    const url = new URL(location.href);
    const searchParams = new URLSearchParams(url.search);
    if (!storage) {
        storage = tokenStorage(options.keepLoggedIn ? 'local' : 'session');
    }

    const forwardedToken = searchParams.get("token");
    if (forwardedToken) {
        storage.set("id_token", forwardedToken, "local");
    }

    const storedToken = storage.get("id_token", "", "local");
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

    if (!storage) {
        storage = tokenStorage(options.keepLoggedIn ? 'local' : 'session');
    }
    return storage.getItem("id_token");
}

/**
 * 
 */
export async function logout(options) {
    const defaultOptions = {
        redirectURL: '/'
    }
    const validOptions = {
        redirectURL: Optional(oneOf(validURL, validRelativeURL))
    }
    options = Object.assign({}, defaultOptions, options)
    assert(options, validOptions)

    if (remoteClient) {
        storage.remove("id_token", "local");
        await remoteClient.getPassport().logout();
        fetch(new URL('/logout', idpURL), {
            method: "GET",
        });
        setUser(null);
        window.location = options.redirectURL;
    }
}

/**
 * Get a resource that is protected, so you must be logged
 * in to access it, and have an access grant.
 */
export async function getProtectedResource(options) {
	const defaultOptions = {
	}
	const validOptions = {
		resourcePath: Required(String)
	}
	options = Object.assign({}, defaultOptions, options)
	assert(options, validOptions)

	if (remoteClient && user?.id) {

		const pod = await remoteClient
		.getUsersServices()
		.getPodInstance(user.id, datavillageApiUrl)

        const resource = await pod
		.getFile(options.resourcePath)

		//TODO: test that pod can convert to jsonld
		// and make sure to always request jsonld
		return await resource.content.json()
	}
    return false
}

/**
 * Token storage helper
 */
const tokenStorage = function(type) {
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

async function redirectToLogin(redirectFn) {
	const redirectURL = `CODEREDIRECT:${window.location.href}`;
	const loginURL = await remoteClient
		?.getPassport()
		?.getAuthenticationUrl(
			redirectURL,
			"inrupt",
			new URL('/', idpURL)
		);
	return redirectFn(loginURL)
};

const validRelativeURL = (url) => {
    let base = new URL('/', window.location.href)
    return validURL(base.href + url)
}