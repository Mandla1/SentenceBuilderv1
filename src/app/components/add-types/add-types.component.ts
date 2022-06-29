import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms'
import { Types} from 'src/app/models/types.model';
import { Noun} from 'src/app/models/noun.model';
import {Verb} from 'src/app/models/verb.model';
import { Adverb} from 'src/app/models/adverb.model';
import { Adjective} from 'src/app/models/adjective.model';
import { Pronoun} from 'src/app/models/pronoun.model';
import { Preposition} from 'src/app/models/preposition.model';
import { Conjunction} from 'src/app/models/conjunction.model';
import { Determiner} from 'src/app/models/determiner.model';
import { Exclamation} from 'src/app/models/exclamation.model';

import { NounService} from 'src/app/services/noun.service';
import { VerbService} from 'src/app/services/verb.service';
import { AdverbService} from 'src/app/services/adverb.service';
import { AdjectiveService} from 'src/app/services/adjective.service';
import { PronounService} from 'src/app/services/pronoun.service';
import { PrepositionService} from 'src/app/services/preposition.service';
import { ConjuctionService} from 'src/app/services/conjuction.service';
import { DeterminerService} from 'src/app/services/determiner.service';
import { ExclamationService} from 'src/app/services/exclamation.service';

import { SentenceTypeService} from 'src/app/services/sentence-type.service';

@Component({
  selector: 'app-add-types',
  templateUrl: './add-types.component.html',
  styleUrls: ['./add-types.component.css']
})
export class AddTypesComponent implements OnInit {
  noun: Noun={noun:''};
  verb: Verb={verb:''};
  adverb: Adverb={adverb:''};
  adjective: Adjective={adjective:''};
  pronoun: Pronoun={pronoun:''};
  preposistion: Preposition={preposition:''};
  conjunction: Conjunction={conjuction:''};
  determiner: Determiner={determiner:''};
  exclamation: Exclamation={exclamation:''};
  types?: Types[];
  myType='';
  resMessage: any;
  results: string;
  
  stcform: FormGroup;
  constructor(fb: FormBuilder, private TypeService: SentenceTypeService, private nounService: NounService,
              private verbService: VerbService, private adverbService: AdverbService, private adjectiveService: AdjectiveService,
              private pronounService: PronounService, private prepositionService: PrepositionService, private conjunctionService: ConjuctionService,
              private determinerService: DeterminerService, private exclamationService: ExclamationService) { 
    this.stcform = fb.group({
      'selectType': '',
      'newLine': ''});
      this.results='';
    }
  
  ngOnInit(): void {
    this.retrieveTypes();
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
  onSelect(value: any, newWord: HTMLInputElement){
    if (value === "Noun") {
      this.saveNoun(newWord.value);
    }else if (value ==="Verb"){
      this.saveVerb(newWord.value);
    }else if (value ==="Adverb"){
      this.saveAdverb(newWord.value);
    }else if (value ==="Adjective"){
      this.saveAdjective(newWord.value);
    }else if (value ==="Pronoun"){
      this.saveProNoun(newWord.value);
    }else if (value ==="Preposition"){
      this.savePreposition(newWord.value);
    }else if (value ==="Conjunction"){
      this.saveConjunction(newWord.value);
    }else if (value ==="Determiner"){
      this.saveDeterminer(newWord.value);
    }else if (value ==="Exclamation"){
      this.saveExclamation(newWord.value);
    }else{
      console.log("Unknown value!");
    }
   
  }
  saveNoun(wordTo: any): void{
    console.log("word to save: "+wordTo);
    this.nounService.create({"noun": wordTo})
      .subscribe({
        next: (res) => {
          this.resMessage = "successfully added";
        },
        error:(e) => console.error(e)
      });
  }
  saveVerb(wordTo: any): void{
    console.log("word to save: "+wordTo);
    this.verbService.create({"verb": wordTo})
      .subscribe({
        next: (res) => {
          this.resMessage = "successfully added";
        },
        error:(e) => console.error(e)
      });
  }
  saveAdverb(wordTo: any): void{
    console.log("word to save: "+wordTo);
    this.adverbService.create({"adverb": wordTo})
      .subscribe({
        next: (res) => {
          this.resMessage = "successfully added";
        },
        error:(e) => console.error(e)
      });
  }
  saveAdjective(wordTo: any): void{
    console.log("word to save: "+wordTo);
    this.adjectiveService.create({"adjective": wordTo})
      .subscribe({
        next: (res) => {
          this.resMessage = "successfully added";
        },
        error:(e) => console.error(e)
      });
  }
  saveProNoun(wordTo: any): void{
    console.log("word to save: "+wordTo);
    this.pronounService.create({"pronoun": wordTo})
      .subscribe({
        next: (res) => {
          this.resMessage = "successfully added";
        },
        error:(e) => console.error(e)
      });
  }
  savePreposition(wordTo: any): void{
    console.log("word to save: "+wordTo);
    this.prepositionService.create({"preposition": wordTo})
      .subscribe({
        next: (res) => {
          this.resMessage = "successfully added";
        },
        error:(e) => console.error(e)
      });
  }
  saveConjunction(wordTo: any): void{
    console.log("word to save: "+wordTo);
    this.conjunctionService.create({"conjuction": wordTo})
      .subscribe({
        next: (res) => {
          this.resMessage = "successfully added";
        },
        error:(e) => console.error(e)
      });
  }
  saveDeterminer(wordTo: any): void{
    console.log("word to save: "+wordTo);
    this.determinerService.create({"determiner": wordTo})
      .subscribe({
        next: (res) => {
          this.resMessage = "successfully added";
        },
        error:(e) => console.error(e)
      });
  }
  saveExclamation(wordTo: any): void{
    console.log("word to save: "+wordTo);
    this.exclamationService.create({"exclamation": wordTo})
      .subscribe({
        next: (res) => {
          this.resMessage = "successfully added";
        },
        error:(e) => console.error(e)
      });
  }
}
