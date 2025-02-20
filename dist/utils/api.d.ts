import { PodSchemaEntry } from "./podschema";
export declare const readResource: (pod: string, resourceId: PodSchemaEntry) => Promise<unknown>;
export declare const writeResource: (pod: string, resourceId: PodSchemaEntry, content: string, contentType?: string) => Promise<Blob & import("@inrupt/solid-client").WithResourceInfo>;
export declare const deleteResource: (pod: string, resourceId: PodSchemaEntry) => Promise<boolean>;
