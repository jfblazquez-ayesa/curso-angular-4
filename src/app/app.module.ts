import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import localeCa from '@angular/common/locales/ca';
import localeCaExtra from '@angular/common/locales/extra/ca';

import { APP_ROUTING } from './app.routing';


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
import { ActiveUserPipe } from './pipes/active-user.pipe';
import { ActiveUserComponent } from './components/active-user/active-user.component';
import { EjercicioReactiveFormComponent } from './components/ejercicio-reactive-form/ejercicio-reactive-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RoutingComponent } from './components/routing/routing.component';
import { DummyEmployeeService } from './services/dummy-employee.service';
import { RoutingChildComponent } from './components/routing-child/routing-child.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { EjercicioDirectivaParentComponent } from './components/ejercicio-directiva-parent/ejercicio-directiva-parent.component';
import { EjercicioDirectivaChildDirective } from './directives/ejercicio-directiva-child.directive';
import { Child2Component } from './components/child2/child2.component';



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
    ReactiveFormsComponent,
    ActiveUserPipe,
    ActiveUserComponent,
    EjercicioReactiveFormComponent,
    PageNotFoundComponent,
    RoutingComponent,
    RoutingChildComponent,
    ChildComponent,
    ParentComponent,
    EjercicioDirectivaParentComponent,
    EjercicioDirectivaChildDirective,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'ca-ES'},
    DummyEmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeCa, 'ca-ES', localeCaExtra);