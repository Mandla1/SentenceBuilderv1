import { Component, OnInit, EventEmitter, OnChanges } from '@angular/core';
import {Sentence} from 'src/app/models/sentence.model';
import { Types} from 'src/app/models/types.model';
import { SentenceService} from 'src/app/services/sentence.service';
import { SentenceTypeService} from 'src/app/services/sentence-type.service';
import { NounService} from 'src/app/services/noun.service';
import { VerbService} from 'src/app/services/verb.service';
import { AdverbService} from 'src/app/services/adverb.service';
import { AdjectiveService} from 'src/app/services/adjective.service';
import { PrepositionService} from 'src/app/services/preposition.service';
import { PronounService} from 'src/app/services/pronoun.service';
import { ConjuctionService} from 'src/app/services/conjuction.service';
import { DeterminerService} from 'src/app/services/determiner.service';
import { ExclamationService} from 'src/app/services/exclamation.service';


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
  newSenType ='';
  newSenWord='';
  types?: Types[];
  inprogress = [''];
  baseList: any[''];
  status: boolean;
  resMessage: any;
  sText: string;

  constructor(private sentenceService: SentenceService, private TypeService: SentenceTypeService, private nounService: NounService,
              private verbService: VerbService, private adverbService: AdverbService, private adjectiveService: AdjectiveService,
              private prepositionService: PrepositionService, private pronounService: PronounService, private conjunctionService: ConjuctionService,
              private determinerService: DeterminerService, private exclamationService: ExclamationService) { 
                this.status=false;
                this.sText='';
              }

  ngOnInit(): void {
      this.retrieveSentences();
      this.retrieveTypes();
      this.status=true;    
  }
  retrieveSentences(): void{
    this.sentenceService.getAll()
      .subscribe({
        next: (data: any) => {
          this.sentences = data;
        },
        error: (e: any) => console.error(e)
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
    this.newSenType = incoming;
    this.status=false; 
    if(incoming){
      if(incoming==="Noun"){
        this.nounService.getAll()
          .subscribe({
            next: (data: any) => {
              this.baseList = data;
            },
            error: (e: any) => console.error(e)
          });
      }else if(incoming ==="Verb"){
        this.verbService.getAll()
          .subscribe({
            next: (data: any) => {
              this.baseList = data;
            },
            error: (e: any) => console.error(e)
          });
      }else if(incoming ==="Adverb"){
        this.adverbService.getAll()
          .subscribe({
            next: (data: any) => {
              this.baseList = data;
            },
            error: (e: any) => console.error(e)
          });
      }else if(incoming ==="Adjective"){
        this.adjectiveService.getAll()
          .subscribe({
            next: (data: any) => {
              this.baseList = data;
            },
            error: (e: any) => console.error(e)
          });

      }else if(incoming ==="Pronoun"){
        this.pronounService.getAll()
          .subscribe({
            next: (data: any) => {
              this.baseList = data;
            },
            error: (e: any) => console.error(e)
          });

      }else if(incoming ==="Preposition"){
        this.prepositionService.getAll()
          .subscribe({
            next: (data: any) => {
              this.baseList = data;
            },
            error: (e: any) => console.error(e)
          });

      }else if(incoming ==="Conjunction"){
        this.conjunctionService.getAll()
          .subscribe({
            next: (data: any) => {
              this.baseList = data;
            },
            error: (e: any) => console.error(e)
          });

      }else if(incoming ==="Determiner"){
        this.determinerService.getAll()
          .subscribe({
            next: (data: any) => {
              this.baseList = data;
            },
            error: (e: any) => console.error(e)
          });

      }else if(incoming ==="Exclamation"){
        this.exclamationService.getAll()
          .subscribe({
            next: (data: any) => {
              this.baseList = data;
            },
            error: (e: any) => console.error(e)
          });
      
      }else{
        console.log("Not known word type!");      
      }  
    }
  }
  updateSelection(newSelection: string){
    this.newSenType = newSelection;
    if (newSelection){
      this.inprogress.push(newSelection);    
      this.status=true; 
    }
    this.ngOnInit();
  }
  commitSentence(){
    this.sText = this.inprogress.toString();
    this.sText = this.sText.replace(/[^a-zA-Z ]/g, ' ');
    this.sentenceService.create({ "description": this.sText })
      .subscribe({
        next: (res) => {
          this.resMessage = "successfully added";
        },
        error: (e) => console.error(e)
      });
  }
}
