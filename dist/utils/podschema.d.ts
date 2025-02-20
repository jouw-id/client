declare const STORAGE_ROOT: "sndk";
declare const partiallyTypedPodSchema: {
    readonly profile: "sndk/basicProfile.jsonld";
    readonly shows: "sndk/talpa/interest.jsonld";
    readonly themes: "sndk/npo/themes.jsonld";
    readonly contentConsent: "sndk/consent/personalised-content.json";
    readonly adsConsent: "sndk/consent/ads.json";
};
declare const podSchema: typeof partiallyTypedPodSchema;
type ResourcePath = `${typeof STORAGE_ROOT}/${string}.${"jsonld" | "ttl" | "json"}`;
type PodSchemaEntry = keyof typeof podSchema;
export { podSchema };
export type { PodSchemaEntry, ResourcePath };
