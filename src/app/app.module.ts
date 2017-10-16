import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
