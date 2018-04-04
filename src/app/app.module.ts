import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import localeCa from '@angular/common/locales/ca';
import localeCaExtra from '@angular/common/locales/extra/ca';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { SimpleMessageDirective } from './directives/simple-message.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { StripHtmlPipe } from './pipes/strip-html.pipe';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    DataBindingComponent,
    DirectivesComponent,
    SimpleMessageDirective,
    PipesComponent,
    StripHtmlPipe,
    TruncateTextPipe,
    FormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'ca-ES'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeCa, 'ca-ES', localeCaExtra);