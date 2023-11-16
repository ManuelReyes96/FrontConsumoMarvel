import { CharacterDataContainer } from "./characterDataContainer.model";

/**
 * Principal part of the JSON Response
 */
export class CharacterDataWrapper {
    code: string;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: CharacterDataContainer;
    etag: string;
 }