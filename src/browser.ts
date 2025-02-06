import { WithResourceInfo } from "@inrupt/solid-client";
import {
  ILoginInputOptions,
  ILogoutOptions,
} from "@inrupt/solid-client-authn-browser";
import {
  deleteFromPod,
  getFromPod,
  initAuthentication,
  logIn,
  logOut,
  postToPod,
} from "./jouwid";
import { User } from "./utils/interfaces";
import { PodSchemaEntry } from "./utils/podschema";

interface JouwId {
  initAuthentication: (
    onAuthentication: (user: User) => void,
    onSessionRestore: (url: string) => void
  ) => void;
  logIn: (options: ILoginInputOptions) => Promise<void>;
  logOut: (options: ILogoutOptions) => Promise<void>;
  getFromPod: (pod: string, schemaEntry: PodSchemaEntry) => Promise<unknown>;
  deleteFromPod: (pod: string, schemaEntry: PodSchemaEntry) => Promise<boolean>;
  postToPod: (
    pod: string,
    schemaEntry: PodSchemaEntry,
    content: string,
    contentType?: string
  ) => Promise<Blob & WithResourceInfo>;
  // isLoggedIn: (options?: {}) => any;
  // getProtectedResource: (options: any) => Promise<any>;
  // trustApp: (options: any) => Promise<false | Response>;
  // revokeApp: (options: any) => Promise<false | Response>;
}

interface Global {
  jouwid: JouwId;
}

declare let globalThis: Global;

globalThis.jouwid = {
  initAuthentication,
  logIn,
  logOut,
  getFromPod,
  deleteFromPod,
  postToPod,
  // isLoggedIn,
  // getProtectedResource,
  // trustApp,
  // revokeApp,
};
