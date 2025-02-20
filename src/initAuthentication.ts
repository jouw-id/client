// import { assert, Required, Optional, validURL } from "@muze-nl/assert";
import {
  EVENTS,
  getDefaultSession,
  handleIncomingRedirect,
  fetch as inruptFetch,
} from "@inrupt/solid-client-authn-browser";
import { Parser } from "n3";
import { User } from "./utils/interfaces";
import storage from "./utils/storage";
// import { assert, Required, Optional, validURL } from "@muze-nl/assert";

async function getPod(userWebId: string): Promise<string> {
  const profile = await (await inruptFetch(userWebId)).text();
  const parser = new Parser({ baseIRI: userWebId });
  return new Promise((resolve) => {
    parser.parse(profile, (error, quad) => {
      if (quad?.predicate?.value == "http://www.w3.org/ns/pim/space#storage") {
        resolve(quad.object.value);
      }
    });
  });
}

export async function initAuthentication(
  onAuthentication: (user: User) => void,
  onSessionRestore?: (url: string) => void
) {
  // https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/restore-session-browser-refresh/#use-session-restore-event-handler
  if (onSessionRestore) {
    getDefaultSession().events.on(EVENTS.SESSION_RESTORED, onSessionRestore);
    getDefaultSession().events.on(EVENTS.LOGIN, onSessionRestore as () => void);
  }

  await handleIncomingRedirect({
    restorePreviousSession: true,
  }).then(async (sessionInfo) => {
    if (!sessionInfo) return undefined;
    const { webId = "", isLoggedIn = false } = sessionInfo;
    const pod = webId ? await getPod(webId) : "";
    const returnedUser = {
      webId,
      isLoggedIn,
      pod,
    };
    // TO DO: save session
    storage.set("user", returnedUser);
    onAuthentication(returnedUser);
  });
}
