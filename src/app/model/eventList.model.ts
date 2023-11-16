import { EventSummary } from "./eventSummary.model";

/**
 * Part of the JSON Response
 */
export class EventList {
    available: string;
    returned: string;
    collectionURI: string;
    items: EventSummary[];
 }