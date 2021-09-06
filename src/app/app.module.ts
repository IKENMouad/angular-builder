import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { EmailEditorModule } from 'angular-email-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    // EmailEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
