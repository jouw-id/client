// import { assert, Required, Optional, validURL } from "@muze-nl/assert";
import {
    deleteFile,
    overwriteFile
} from "@inrupt/solid-client";
import {
    fetch as inruptFetch
} from "@inrupt/solid-client-authn-browser";
import { podSchema, PodSchemaEntry, ResourcePath } from "./podschema";  

export const readResource = async (
  pod: string,
  resourceId: PodSchemaEntry
): Promise<unknown> => {
  if (pod) {
    const resourcePath: ResourcePath = podSchema[resourceId];
    const url = new URL(resourcePath, pod).href;
    const response = await inruptFetch(url);
    const contentType = response.headers.get("content-type") || "";
    switch (response.status) {
      case 200:
        if (contentType.match(/^application\/(.*\+)?json/)) {
          return response.json();
        } else if (contentType.match(/^text\//)) {
          return response.text();
        } else {
          return response.blob();
        }
      case 404:
        console.warn("resource not found", resourcePath);
        return null;
      default:
        console.error(
          "Error reading resource",
          response.status,
          response.statusText
        );
        break;
    }
  }
  console.error("No pod address found for reading resources", pod);
  return null;
};

export const writeResource = async (
  pod: string,
  resourceId: PodSchemaEntry,
  content: string,
  contentType: string = "text/plain"
) => {
  const resourcePath: ResourcePath = podSchema[resourceId];
  const url = new URL(resourcePath, pod).href;
  const fileName = url.split("/").pop()?.split(".")[0];

  if (!fileName) throw new Error("No filename found in url");

  const newFile = new Blob([content], { type: contentType });
  return overwriteFile(url, newFile, {
    fetch: inruptFetch,
  });
};

export const deleteResource = async (
  pod: string,
  resourceId: PodSchemaEntry
): Promise<boolean> => {
  const resourcePath: ResourcePath = podSchema[resourceId];
  const url = new URL(resourcePath, pod).href;
  await deleteFile(url, { fetch: inruptFetch });
  return true;
};
