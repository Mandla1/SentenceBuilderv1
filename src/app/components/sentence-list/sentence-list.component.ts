import { Component, OnInit, EventEmitter } from '@angular/core';
import {Sentence} from 'src/app/models/sentence.model';
import { Types} from 'src/app/models/types.model';
import { SentenceService} from 'src/app/services/sentence.service';
import { SentenceTypeService} from 'src/app/services/sentence-type.service';

import { Noun} from 'src/app/models/noun.model';

import { NounService} from 'src/app/services/noun.service';
@Component({
  selector: 'app-sentence-list',
  templateUrl: './sentence-list.component.html',
  styleUrls: ['./sentence-list.component.css']
})
export class SentenceListComponent implements OnInit {
  sentences?: Sentence[];
  currentSentence: Sentence={};
  currentIndex = -1;
  description ='';
  types?: Types[];
  inprogress = [''];
  nouns: Noun={noun:''};
  currentList?: Noun[];

  constructor(private sentenceService: SentenceService, private TypeService: SentenceTypeService, private nounService: NounService) { }

  ngOnInit(): void {
    this.retrieveSentences();
    this.retrieveTypes();
  }
  retrieveSentences(): void{
    this.sentenceService.getAll()
      .subscribe({
        next: (data: any) => {
          this.sentences = data;
          console.log("list of sentence: "+ data);
        },
        error: (e: any) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveSentences();
    this.currentSentence = {};
    this.currentIndex = -1;
  }
  setActiveSentence(sentence: Sentence, index: number): void {
    this.currentSentence = sentence;
    this.currentIndex = index;
  }
  removeSentence(): void {
    this.sentenceService.delete(this.description)
      .subscribe({
        next: (res: any) => {
          this.refreshList();
        },
          error:(e:any) => console.error(e)
      });
  }
  retrieveTypes(): void{
    this.TypeService.getAll()
      .subscribe({
        next: (data) => {
          this.types = data;
        },
        error:(e) => console.error(e)
      });
  }
  updateNewWord(incoming: string){
    if(incoming){
      if(incoming==="Noun"){
        this.getAllNouns();
      }else if(incoming ==="Verb"){
      
      }else if(incoming ==="Adverb"){

      }else if(incoming ==="Adjective"){

      }else if(incoming ==="Pronoun"){

      }else if(incoming ==="Preposition"){

      }else if(incoming ==="Conjunction"){

      }else if(incoming ==="Determiner"){

      }else if(incoming ==="Exclamation"){
      
      }else{
        console.log("Not known word type!");      
      }  
    }
  }
  updateSelection(newSelection: string){
    if (newSelection){
      this.inprogress.push(newSelection);      
    }
  }
  getAllNouns(): void{
    this.nounService.getAll()
    .subscribe({
      next: (data: any) => {
        this.currentList = data;
        console.log("list of nouns: "+ this.currentList);
      },
      error: (e: any) => console.error(e)
    });
  }
}
