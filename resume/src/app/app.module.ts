import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatChipsModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    ContactComponent,
    ExperienceComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
