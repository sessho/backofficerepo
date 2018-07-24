import { BrowserModule } from 'node_modules/@angular/platform-browser';
import { NgModule } from 'node_modules/@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from 'node_modules/@angular/forms';
import { HttpModule } from 'node_modules/@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
