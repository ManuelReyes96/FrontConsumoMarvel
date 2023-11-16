import { ComicSummary } from "./comicSummary.model";

/**
 * Part of the JSON Response
 */
export class ComicList {
    available: string;
    returned: string;
    collectionURI: string;
    items: ComicSummary[];
 }