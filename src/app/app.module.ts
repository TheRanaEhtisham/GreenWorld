import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPage2Component } from './main-page2/main-page2.component';
import { MainPage3Component } from './main-page3/main-page3.component';
import { MainPage4Component } from './main-page4/main-page4.component';
import { MenuComponent } from './menu/menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ResidenciaComponent } from './residencia/residencia.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainPageComponent,
    MainPage2Component,
    MainPage3Component,
    MainPage4Component,
    MenuComponent,
    ContactUsComponent,
    ResidenciaComponent,
    LifestyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
