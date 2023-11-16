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

  constructor(public conexionService: conexionService){

  }

  ngOnInit(){
    this.conexionService.getListCharacters().subscribe((res) =>{
      this.characterList = res.data.results;
    }) 
  }

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

  closeHero(){
    this.selectedCharacter = null;
    this.selectedCharacterComics = [];
    this.selectedCharacterEvents = [];
    this.selectedCharacterSeries = [];
    this.selectedCharacterStory = [];
    this.openModal = false;
  }

  openBitacora(){
    this.showHeros = true;
    this.conexionService.getBitacora().subscribe((res)=>{
      this.bitacoraList = res;
    })
  }

  closeBitacora(){
    this.showHeros = false;
  }
}
