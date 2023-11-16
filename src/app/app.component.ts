import { Component } from '@angular/core';
import { conexionService } from './shared/conexion.service';
import { CharacterDataWrapper } from './model/characterDataWrapper.model';
import { Character } from './model/character.model';
import { ComicSummary } from './model/comicSummary.model';
import { EventSummary } from './model/eventSummary.model';
import { SeriesSummary } from './model/seriesSummary.model';
import { StorySummary } from './model/storySummary.model';
import { Bitacora } from './model/bitacora.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/**
 * Declaration of required variables
 */
  title = 'FrontConsumoMarvel';
  characterList : Character[] = [];
  openModal: boolean = false;
  showHeros: boolean = false;
  selectedCharacter: Character;
  selectedCharacterComics: ComicSummary[] = [];
  selectedCharacterEvents: EventSummary[] = [];
  selectedCharacterSeries: SeriesSummary[] = [];
  selectedCharacterStory: StorySummary[] = [];
  bitacoraList: Bitacora[] = [];

  /**
   * constructor for conexionService
   * @param conexionService class for establish connection to backend
   */
  constructor(public conexionService: conexionService){
  }

  /**
   * Method to get the list of Characters
   */
  ngOnInit(){
    this.conexionService.getListCharacters().subscribe((res) =>{
      this.characterList = res.data.results;
    }) 
  }

  /**
   * Method to get an specific Character and open a modal
   * @param id identifier of character
   */
  openHero(id : number){
    this.conexionService.getCharacterById(id).subscribe((res) => {
      this.selectedCharacter = res.data.results[0];
      this.selectedCharacterComics = res.data.results[0].comics.items;
      this.selectedCharacterEvents = res.data.results[0].events.items;
      this.selectedCharacterSeries = res.data.results[0].series.items;
      this.selectedCharacterStory = res.data.results[0].stories.items;
      this.openModal = true;
    })
  }

  /**
   * Method to close a modal and clean variables
   */
  closeHero(){
    this.selectedCharacter = null;
    this.selectedCharacterComics = [];
    this.selectedCharacterEvents = [];
    this.selectedCharacterSeries = [];
    this.selectedCharacterStory = [];
    this.openModal = false;
  }

  /**
   * Method to change the view to Bitacora
   */
  openBitacora(){
    this.showHeros = true;
    this.conexionService.getBitacora().subscribe((res)=>{
      this.bitacoraList = res;
    })
  }

  /**
   * Method to change the view to Characters
   */
  closeBitacora(){
    this.showHeros = false;
  }
}
