// import { assert, Required, Optional, validURL } from "@muze-nl/assert";
import {
  EVENTS,
  getDefaultSession,
  handleIncomingRedirect,
  ILoginInputOptions,
  ILogoutOptions,
  fetch as inruptFetch,
  login as inruptLogin,
} from "@inrupt/solid-client-authn-browser";
import { Parser } from "n3";
import { User } from "./utils/interfaces";
import storage from "./utils/storage";
// import { assert, Required, Optional, validURL } from "@muze-nl/assert";
import { WithResourceInfo } from "@inrupt/solid-client";
import { deleteResource, readResource, writeResource } from "./utils/api";
import { PodSchemaEntry } from "./utils/podschema";

async function getPod(webId: string): Promise<string> {
  const profile = await (await inruptFetch(webId)).text();
  const parser = new Parser({ baseIRI: webId });
  return new Promise((resolve) => {
    parser.parse(profile, (error, quad) => {
      if (quad?.predicate?.value == "http://www.w3.org/ns/pim/space#storage") {
        resolve(quad.object.value);
      }
    });
  });
}

export function initAuthentication(
  onAuthentication: (user: User) => void,
  onSessionRestore?: (url: string) => void
) {
  // https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/restore-session-browser-refresh/#use-session-restore-event-handler
  if (onSessionRestore) {
    getDefaultSession().events.on(EVENTS.SESSION_RESTORED, onSessionRestore);
    getDefaultSession().events.on(EVENTS.LOGIN, onSessionRestore as () => void);
  }

  handleIncomingRedirect({
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

export async function logIn(options: ILoginInputOptions) {
  const isLoggedIn = getDefaultSession().info.isLoggedIn;
  // TODO: check for current session and exp. date
  if (!isLoggedIn) await inruptLogin(options);
}

export async function logOut(options: ILogoutOptions) {
  const defaultOptions = {
    logoutType: "idp",
    postLogoutUrl: "https://jouw.id",
  };
  // Post logout urls must be set on the client config json in .db in the idp.
  // https://docs.inrupt.com/developer-tools/api/javascript/solid-client-authn-browser/classes/Session.html#logout
  // However currently that does not seem to be working, so in our nginx config we redirect all logged out users to https://jouw.id.
  // If more logout urls are required, we need to investigate what is going wrong with the post logout urls in the NSS.

  await getDefaultSession().logout(options || defaultOptions);
}

export async function getFromPod(
  pod: string,
  schemaEntry: PodSchemaEntry
): Promise<unknown> {
  return readResource(pod, schemaEntry);
}

export const deleteFromPod = async (
  pod: string,
  schemaEntry: PodSchemaEntry
): Promise<boolean> => {
  return deleteResource(pod, schemaEntry);
};

export const postToPod = async (
  pod: string,
  schemaEntry: PodSchemaEntry,
  content: string,
  contentType: string = "application/ld+json"
): Promise<Blob & WithResourceInfo> => {
  try {
    return await writeResource(pod, schemaEntry, content, contentType);
  } catch (error: unknown) {
    // Sometimes athumi returns a 409 when simultaneously saving two files.
    // If there's a 409, delete the resource and try again.
    const { status, response } = error as {
      status: number;
      response: { status: number };
    };
    const statusCode = status || response?.status;
    if (statusCode === 409) {
      await deleteFromPod(pod, schemaEntry);
      return await writeResource(pod, schemaEntry, content, contentType);
      // Just throw the error for other status codes.
    } else throw error;
  }
};

/**
 * Get a resource that is protected, so you must be logged
 * in to access it, and have an access grant.
 */
// export async function getProtectedResource(options) {
//   const defaultOptions = {};

//   const validOptions = {
//     resourcePath: Required(String),
//   };

//   assert(options, validOptions);

//   options = Object.assign({}, defaultOptions, options);

//   if (remoteClient && user?.webId) {
//     const profileResponse = await inruptFetch(user.webId); // profile
//     const profile = await profileResponse.text();
//     const pod = await getPod(profile);

//     const url = new URL(options.resourcePath, pod).href;
//     delete options.resourcePath;
//     const response = await inruptFetch(url, options);

//     const contentType = response.headers.get("content-type");
//     if (contentType.match(/^application\/(.*\+)?json/)) {
//       return response.json();
//     } else if (contentType.match(/^text\//)) {
//       return response.text();
//     } else {
//       return response.blob();
//     }
//   }
//   return false;
// }

/**
 * Add an app url as trusted application
 */
// export async function trustApp(options) {
//   const defaultOptions = {};

//   const validOptions = {
//     appUrl: Required(validURL),
//   };

//   assert(options, validOptions);

//   options = Object.assign({}, defaultOptions, options);

//   if (remoteClient && user?.webId) {
//     const body =
//       "_:1 a <http://www.w3.org/ns/solid/terms#InsertDeletePatch>;" +
//       "<http://www.w3.org/ns/solid/terms#inserts> { " +
//       "  <" +
//       user.webId +
//       "> <http://www.w3.org/ns/auth/acl#trustedApp> " +
//       "[<http://www.w3.org/ns/auth/acl#mode> <http://www.w3.org/ns/auth/acl#Append>, <http://www.w3.org/ns/auth/acl#Read>, <http://www.w3.org/ns/auth/acl#Write>; <http://www.w3.org/ns/auth/acl#origin> <" +
//       options.appUrl +
//       ">] ." +
//       "}.";

//     const response = await inruptFetch(user.webId, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "text/n3",
//       },
//       body: body,
//     });

//     return response;
//   }
//   return false;
// }

/**
 * Add an app url as trusted application
 */
// export async function revokeApp(options) {
//   const defaultOptions = {};

//   const validOptions = {
//     appUrl: Required(validURL),
//   };

//   assert(options, validOptions);

//   options = Object.assign({}, defaultOptions, options);

//   if (remoteClient && user?.webId) {
//     const body = `
// @prefix solid: <http://www.w3.org/ns/solid/terms#>.
// @prefix ex: <http://www.example.org/terms#>.

// _:patch

//       solid:where {
//         <${user.webId}> <http://www.w3.org/ns/auth/acl#trustedApp> ?_g_L61C2150 .
//         ?_g_L61C2150 <http://www.w3.org/ns/auth/acl#mode> <http://www.w3.org/ns/auth/acl#Append> .
//         ?_g_L61C2150 <http://www.w3.org/ns/auth/acl#mode> <http://www.w3.org/ns/auth/acl#Read> .
//         ?_g_L61C2150 <http://www.w3.org/ns/auth/acl#mode> <http://www.w3.org/ns/auth/acl#Write> .
//         ?_g_L61C2150 <http://www.w3.org/ns/auth/acl#origin> <${options.appUrl}> .
//       };
//       solid:deletes {
//         <${user.webId}> <http://www.w3.org/ns/auth/acl#trustedApp> ?_g_L61C2150 .
//         ?_g_L61C2150 <http://www.w3.org/ns/auth/acl#mode> <http://www.w3.org/ns/auth/acl#Append> .
//         ?_g_L61C2150 <http://www.w3.org/ns/auth/acl#mode> <http://www.w3.org/ns/auth/acl#Read> .
//         ?_g_L61C2150 <http://www.w3.org/ns/auth/acl#mode> <http://www.w3.org/ns/auth/acl#Write> .
//         ?_g_L61C2150 <http://www.w3.org/ns/auth/acl#origin> <${options.appUrl}> .
//       };   a solid:InsertDeletePatch .
// `;

//     const response = await inruptFetch(user.webId, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "text/n3",
//       },
//       body: body,
//     });

//     return response;
//   }
//   return false;
// }
