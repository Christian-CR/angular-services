import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ExampleService } from './example.service';
import { ExampleHttp } from './example.http';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ], 
  providers: [ ExampleService, ExampleHttp ]
})
export class AppModule { }
