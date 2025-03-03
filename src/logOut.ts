// import { assert, Required, Optional, validURL } from "@muze-nl/assert";
import {
  getDefaultSession,
  ILogoutOptions,
} from "@inrupt/solid-client-authn-browser";
// import { assert, Required, Optional, validURL } from "@muze-nl/assert";

export function logOut(options: ILogoutOptions) {
  const defaultOptions = {
    logoutType: "idp",
    postLogoutUrl: "https://jouw.id",
  };

  // Post logout urls must be set on the client config json in .db in the idp.
  // https://docs.inrupt.com/developer-tools/api/javascript/solid-client-authn-browser/classes/Session.html#logout
  // However currently that does not seem to be working, so in our nginx config we redirect all logged out users to https://jouw.id.
  // If more logout urls are required, we need to investigate what is going wrong with the post logout urls in the NSS.

  return getDefaultSession()?.logout(
    (options || defaultOptions) as ILogoutOptions
  );
}
