const STORAGE_ROOT = "sndk" as const;

const partiallyTypedPodSchema = {
  profile: `${STORAGE_ROOT}/basicProfile.jsonld`,
  shows: `${STORAGE_ROOT}/talpa/interest.jsonld`,
  themes: `${STORAGE_ROOT}/npo/themes.jsonld`,
  contentConsent: `${STORAGE_ROOT}/consent/personalised-content.json`,
  adsConsent: `${STORAGE_ROOT}/consent/ads.json`,
} as const;

const podSchema = partiallyTypedPodSchema as typeof partiallyTypedPodSchema;

type ResourcePath =
  `${typeof STORAGE_ROOT}/${string}.${"jsonld" | "ttl" | "json"}`;
type PodSchemaEntry = keyof typeof podSchema;

export { podSchema };
export type { PodSchemaEntry, ResourcePath };
