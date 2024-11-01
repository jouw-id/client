# jouw-id/client: authentication client for https://jouw.id/

```javascript
import * as jouwid from '@jouw-id/client'

async function main() {
	await jouwid.login({
		client_id: 'myClient',
		client_secret: 'myClientSecret',
		keepLoggedIn: true,
		silent: true
	})
	if (jouwid.isLoggedIn()) {
		let profile = await jouwid.getProtectedResource('/path/to/file')
	}
}
main()
```

## Installation

```shell
npm install @jouw-id/client
```

You can also use a CDN (Content Delivery Network) like jsdelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/@jouw-id/client@0.1.4/dist/bundle.js"></script>
```

Use for example https://www.srihash.org/ to calculate the resource integrity for added security.

## Usage

In ES6 modules:

```javascript
import * as jouwid from '@jouw-id/client'

await jouwid.login({
	client_id: 'myClient',
	client_secret: 'myClientSecret',
	keepLoggedIn: true,
	silent: true
})
```

Alternatively, when using a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@jouw-id/client@0.1.4/dist/bundle.js"></script>
<script>

	jouwid.login({
		client_id: 'myClient',
		client_secret: 'myClientSecret',
		keepLoggedIn: true,
		silent: true
	}).then(() => {
		// ... do your thing
	})

</script>
```

## Development usage

If you just want to be able to step through the code, you can use the development build from the cdn like this:

```html
<script src="https://cdn.jsdelivr.net/npm/@jouw-id/client@0.1.4/dist/bundle-dev.js"></script>
```

This includes a source map.

If you want to use the development server `https://idp.dev.jouw.id/`, you must call the `useDevServers()` method before any other:

```javascript
jouwid.useDevServers()
await jouwid.login({
	...
})
```

## API

### login()

This triggers the login flow, using the Solid-OIDC (OpenID Connect) protocol. You must pass an options object as the first parameter, with the following settings:
- client_id: Required. A string containing the client id for OIDC.
- client_secret: Required. A string with the client secret for OIDC.
- keepLoggedIn: Optional. Boolean. If true, the user will stay logged in between sessions.
- silent: Optional. Boolean. Defaults to false. If true, the user won't be redirected to a login screen if the user is not logged in.
- idpRedirect: Optional. Function: <Promise>(url) => {}. If set, this function will be called when the user must log in to jouw.id, with the url to do so. The idpRedirect function can then handle this as required, e.g. open a popup or iframe to log in. On resolve, the user should be logged in.

Calling this function will always log the user back in, if the user is still logged in on https://idp.jouw.id/, even if you called logout() locally before. To make sure you don't login a user that has specifically logged out, use `isLoggedIn()` before calling `login({silent:true})`.

### isLoggedIn()

This function returns true if the user is logged in locally. It takes an options object as first parameter. The only option you can specify is:
- keepLoggedIn: Optional. Boolean. If true, the login status is checked against localStorage, otherwise against sessionStorage. Keep this the same as in the `login()` call.

Note: even if `isLoggedIn()` returns `true`, you will still have to call `login()` to make sure that all the users information is available, before calling `getProtectedResource()`. All that `isLoggedIn(): true` means is that the user has logged in previously on this website / domain. So:

```javascript
if (jouwid.isLoggedIn({keepLoggedIn:true})) {
	// previously logged in, so resume
	await jouwid.login({
		...
		keepLoggedIn: true
	})
	let resource = await jouwid.getProtectedResource({...})
}
```

Only after calling `logout()` will `isLoggedIn()` return false. By checking `isLoggedIn()` before calling `login()`, you can logout the user locally. Calling `login({silent:true})` wil automatically log the user back in, if he/she isn't loggout out at idp.jouw.id.

### logout()

This function will logout the user in the browser and optionally from the jouw.id provider as well. It takes an options object as first parameter. Available options are:
- redirectURL: Optional. A url that is used to redirect the user after logging out.
- lougoutIDP: Optional. Boolean. Default is false. If true, the user will also be logged out in the identity provider - this will log the user out on all websites using this identity provider.

To use this function, you must first have called login(). This will make sure the required information (who the user is) is available to allow logout() to function, e.g:

```javascript
await jouwid.login({
	client_id: ...,
	client_secret: ...,
	silent: true
})

// sometime later

await jouwid.logout({
	logoutIDP: true // logout the user everywhere
})
```

### getProtectedResource()

Will fetch a file (resource) from the master solid pod of the logged in user. It takes an options object as first parameter. Available options are:
- resourcePath: Required. A valid path in the users master pod.

This will return either a javascript object, if the resource is a json or json-ld file. A text string if the resource is a text file, e.g. text/turtle. Or a Blob otherwise.
If the resource is not found, it will return false.

```javascript
const profileTurtle = await jouwid.getProtectedResource('sndk/basicProfile.ttl')
```

