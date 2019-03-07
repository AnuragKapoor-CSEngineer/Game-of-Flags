import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlagsComponent } from './flags/flags.component';
import{ FormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    FlagsComponent
  ],
  imports: [
    BrowserModule, FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
