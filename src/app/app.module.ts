import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { WhoweAreComponent } from './whowe-are/whowe-are.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HappCustomersComponent } from './happ-customers/happ-customers.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { PatnershipsComponent } from './patnerships/patnerships.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollTopModule } from 'primeng/scrolltop'; 
import { ScrollPanelModule } from 'primeng/scrollpanel'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    WhoweAreComponent,
    WhatWeDoComponent,
    HappCustomersComponent,
    PatnershipsComponent,
    ContactFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    ScrollTopModule,
    ScrollPanelModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
