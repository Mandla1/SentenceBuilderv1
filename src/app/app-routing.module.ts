import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentenceListComponent } from './components/sentence-list/sentence-list.component';
import { AddTypesComponent } from './components/add-types/add-types.component';


const routes: Routes = [
  { path: '', redirectTo: 'sentences', pathMatch: 'full'},
  { path: 'sentences', component: SentenceListComponent},
  { path: 'add', component: AddTypesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
