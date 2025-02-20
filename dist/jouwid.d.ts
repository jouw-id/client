import { ILoginInputOptions, ILogoutOptions } from "@inrupt/solid-client-authn-browser";
import { User } from "./utils/interfaces";
import { WithResourceInfo } from "@inrupt/solid-client";
import { PodSchemaEntry } from "./utils/podschema";
export type LoginOptions = ILoginInputOptions;
export declare function initAuthentication(onAuthentication: (user: User) => void, onSessionRestore?: (url: string) => void): Promise<void>;
export declare function getUser(): User;
export declare function logIn(options: LoginOptions): void;
export declare function logOut(options: ILogoutOptions): Promise<void>;
export declare function getFromPod(schemaEntry: PodSchemaEntry): Promise<unknown>;
export declare const deleteFromPod: (schemaEntry: PodSchemaEntry) => Promise<boolean>;
export declare const postToPod: (schemaEntry: PodSchemaEntry, content: string, contentType?: string) => Promise<(Blob & WithResourceInfo) | null>;
/**
 * Get a resource that is protected, so you must be logged
 * in to access it, and have an access grant.
 */
/**
 * Add an app url as trusted application
 */
/**
 * Add an app url as trusted application
 */
