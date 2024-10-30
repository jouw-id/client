import { assert, Required, Optional, instanceOf, oneOf, validURL } from '@muze-nl/assert'
import {
  login as inruptLogin,
  logout as inruptLogout,
  handleIncomingRedirect,
  fetch as inruptFetch,
  getDefaultSession,
} from "@inrupt/solid-client-authn-browser";
import { Parser } from "n3";

/**
 * namespace prefix for use in the token storage.
 */
const namespace = 'sndk:';

/**
 * OIDC Issuer url of jouw.id
 */
const idpURL = "https://idp.dev.jouw.id";

/**
 * variable containing the inrupt client
 */
let remoteClient

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
        redirect_url:  Required(validURL),
        idpRedirect:   Optional(instanceOf(Function)),
        silent:        Optional(Boolean),
        keepLoggedIn:  Optional(Boolean)
    };

    assert(options, validOptions);

    const defaultOptions = {
        silent:       false,
        keepLoggedIn: true
    };

    options = Object.assign({}, defaultOptions, options);

    const errorHandle = (error, errorDescription) => {
        console.error(`${error} has occured: `, errorDescription);
    }

    const info = await handleIncomingRedirect({
        restorePreviousSession: options.keepLoggedIn,
        onError: errorHandle,
    })
    let user = {}
    if (info?.webId) {
        user.webId = info.webId
    }

    if (!remoteClient) {
        remoteClient = getDefaultSession()
        if (remoteClient?.info?.webId) {
            user.webId = remoteClient.info.webId
        }
    }

    // user = await remoteClient
    // .getPassport()
    // .getCurrentUser();

    if (!user.webId && !options.silent) {
        if (options.idpRedirect) {
            options.idpRedirect() //FIXME: set correct url here
        } else {
            inruptLogin({
              redirectUrl: options.redirect_url,
              oidcIssuer: idpURL,
              clientId: options.client_id,
              clientSecret: options.client_secret,
            });
        }
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

    if (!remoteClient) {
        remoteClient = getDefaultSession()
    }
    return remoteClient.isLoggedIn
}

/**
 * 
 */
export async function logout(options)
{
    const defaultOptions = {
        redirect_url: '/'
    }

    const validOptions = {
        redirect_url: Optional(oneOf(validURL, validRelativeURL))
    }

    assert(options, validOptions)

    options = Object.assign({}, defaultOptions, options)

    if (isLoggedIn()) {
        inruptLogout();
        if (options.redirect_url) {
            window.location = options.redirect_url;
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

    assert(options, validOptions)

	options = Object.assign({}, defaultOptions, options)

	if (remoteClient && user?.webId) {
		const profile = await inruptFetch(user.webId) // profile
        const pod = getPod(profile, MASTER_POD_ALIAS)
        const url = new URL(options.resourcePath, pod).href
        delete options.resourcePath
        const response = await inruptFetch( url, options)

        const contentType = response.heading.get('content-type')
        if (contentType.match(/^application\/(.*\+)?json/)) {
            return response.json()
        } else if (contentType.match(/^text\//)) {
            return response.text()
        } else {
            return response.blob()
        }
    }
    return false
}

const validRelativeURL = (url) => {
    let base = new URL('/', window.location.href)
    return validURL(base.href + url)
}

function getPod(profile, podAlias) {
    const parser = new Parser();
    //FIXME: find the master pod, not just the first pod
    let pod = null
    parser.parse(profile, (error, quad) => {
        if (quad.predicate.value == 'http://www.w3.org/ns/pim/space#storage') {
            if (!pod) {
                pod = quad.object.value
            }
        }
    })
    return pod
}