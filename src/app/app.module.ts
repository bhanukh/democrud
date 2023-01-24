import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { CounterComponent } from './counter/counter.component';
import {FormsModule} from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    CounterComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
