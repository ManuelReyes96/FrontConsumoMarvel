import { StorySummary } from "./storySummary.model";

/**
 * Part of the JSON Response
 */
export class StoryList {
    available: string;
    returned: string;
    collectionURI: string;
    items: StorySummary[];
 }