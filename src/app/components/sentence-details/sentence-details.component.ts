import { Component, OnInit, Input } from '@angular/core';
//import {SentenceTypesService } from 'src/app/services/sentence-types.service';
import { SentenceTypeService} from 'src/app/services/sentence-type.service';
import {ActivatedRoute, Router } from '@angular/router';
import {Sentence} from 'src/app/models/sentence.model';

@Component({
  selector: 'app-sentence-details',
  templateUrl: './sentence-details.component.html',
  styleUrls: ['./sentence-details.component.css']
})
export class SentenceDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentSentence: Sentence = {
    description:''
  };
  message='';

  constructor(
    private sentenceTypeservice: SentenceTypeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode){
      this.message='';
      this.getSentence(this.route.snapshot.params["id"]);
    }
  }
  getSentence(id: any): void{
    this.sentenceTypeservice.get(id)
      .subscribe({
        next: (data: any) => {
          this.currentSentence = data;
          console.log("returned data: "+ data);
        },
        error:(e: any) => console.error(e)
      });
  }
  updateSentence(): void{
    this.message='';
    this.sentenceTypeservice.update(this.currentSentence, this.currentSentence)
      .subscribe({
        next: (res:any) => {
          console.log("new sentence: "+res);
          this.message = res.message ? res.message : 'This sentence was updated';
        },
        error:(e:any) => console.error(e)
      });
  }
  deleteSentence(): void{
    this.sentenceTypeservice.delete(this.currentSentence)
      .subscribe({
        next: (res:any) => {
          console.log("sentence has been deleted "+res);
          this.router.navigate(['/sentence']);
        },
        error:(e:any) => console.error(e)
      });
  }
}
