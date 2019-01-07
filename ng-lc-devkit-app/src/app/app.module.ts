import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgLcDevkitModule } from 'ng-lc-devkit';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgLcDevkitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
