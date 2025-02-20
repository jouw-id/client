// import { assert, Required, Optional, validURL } from "@muze-nl/assert";
// import { assert, Required, Optional, validURL } from "@muze-nl/assert";
import { WithResourceInfo } from "@inrupt/solid-client";
import { deleteResource, readResource, writeResource } from "./utils/api";
import { PodSchemaEntry } from "./utils/podschema";
import { getUser } from "./getUser";

export async function getFromPod(
  schemaEntry: PodSchemaEntry
): Promise<unknown> {
  const { pod } = getUser();
  return pod ? readResource(pod, schemaEntry) : null;
}

export const deleteFromPod = async (
  schemaEntry: PodSchemaEntry
): Promise<boolean> => {
  const { pod } = getUser();
  return pod ? deleteResource(pod, schemaEntry) : false;
};

export const postToPod = async (
  schemaEntry: PodSchemaEntry,
  content: string,
  contentType: string = "application/ld+json"
): Promise<(Blob & WithResourceInfo) | null> => {
  const { pod } = getUser();
  if (!pod) return null;
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
      await deleteFromPod(schemaEntry);
      return await writeResource(pod, schemaEntry, content, contentType);
      // Just throw the error for other status codes.
    } else throw error;
  }
};
