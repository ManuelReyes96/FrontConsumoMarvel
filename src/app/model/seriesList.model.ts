import { SeriesSummary } from "./seriesSummary.model";

/**
 * Part of the JSON Response
 */
export class SeriesList {
    available: string;
    returned: string;
    collectionURI: string;
    items: SeriesSummary[];
 }