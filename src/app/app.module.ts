import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { compAcomponent } from './compA/comA.component';

import { FormsModule } from '@angular/forms';
import { compBcomponent } from './compB/compB.component';
import { compCcomponent } from './compC/compC.component';

@NgModule({
  declarations: [
    AppComponent,
    compAcomponent,
    compBcomponent,
    compCcomponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
