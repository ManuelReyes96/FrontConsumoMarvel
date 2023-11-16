import { StoryList } from "./storyList.model";
import { ComicList } from "./comicList.model";
import { EventList } from "./eventList.model";
import { Image } from "./image.model";
import { SeriesList } from "./seriesList.model";
import { URL } from "./url.model";

export class Character {
    id: string;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: URL[];
    thumbnail: Image;
    comics: ComicList;
    stories: StoryList;
    events: EventList;
    series: SeriesList;
 }