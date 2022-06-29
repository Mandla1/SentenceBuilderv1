import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentenceListComponent } from './components/sentence-list/sentence-list.component';
import { SentenceDetailsComponent } from './components/sentence-details/sentence-details.component';
import { AddTypesComponent } from './components/add-types/add-types.component';


const routes: Routes = [
  { path: '', redirectTo: 'senteces', pathMatch: 'full'},
  { path: 'sentences', component: SentenceListComponent},
  { path: 'sentences/:id', component: SentenceDetailsComponent},
  { path: 'add', component: AddTypesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
