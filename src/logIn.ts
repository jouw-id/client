// import { assert, Required, Optional, validURL } from "@muze-nl/assert";
import {
  ILoginInputOptions,
  login as inruptLogin,
} from "@inrupt/solid-client-authn-browser";
import { getUser } from "./getUser";
// import { assert, Required, Optional, validURL } from "@muze-nl/assert";
export type LoginOptions = ILoginInputOptions;

export function logIn(options: LoginOptions) {
  if (!getUser().isLoggedIn) inruptLogin(options);
}
