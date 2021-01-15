import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.components';
import { Sidenavbar } from './sidenavbar/sidenavbar.component';
import { Section1 } from './section1/section.component';
import { FooterComponent } from './footer/footer.component';
import { Section2Component } from './section2/section2.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, Sidenavbar, Section1, Section2Component, FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
