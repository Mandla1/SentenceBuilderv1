import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTypesComponent } from './components/add-types/add-types.component';
import { SentenceDetailsComponent } from './components/sentence-details/sentence-details.component';
import { SentenceListComponent } from './components/sentence-list/sentence-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTypesComponent,
    SentenceDetailsComponent,
    SentenceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
