import {
    getDefaultSession,
    Session as InruptSession
} from "@inrupt/solid-client-authn-browser";
import { User } from "./utils/interfaces";
import storage from "./utils/storage";
// import { assert, Required, Optional, validURL } from "@muze-nl/assert";



const validateSession = (session: InruptSession) => {
  const { expirationDate = 0, isLoggedIn } = session.info;
  const hasAValidSession = new Date(expirationDate) > new Date();
  return isLoggedIn && hasAValidSession;
};

export function getUser(): User {
  let user = {
    webId: "",
    isLoggedIn: false,
    pod: "",
  };

  user = storage.get("user", user);

  const session = getDefaultSession();
  const isValid = validateSession(session);

  if (!isValid) {
    storage.remove("user");
    return user;
  } else return user;
}
