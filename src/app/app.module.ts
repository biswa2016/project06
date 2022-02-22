import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CtableComponent } from './ctable/ctable.component';
import { CdetailsComponent } from './cdetails/cdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CtableComponent,
    CdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
