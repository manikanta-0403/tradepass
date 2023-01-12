import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MaterialExampleModule } from 'src/material.module';
import { CountdownComponent } from './countdown/countdown.component';
import { VirtualDataComponent } from './virtual-data/virtual-data.component';
import { SpeakersDataComponent } from './speakers-data/speakers-data.component';
import { EventDataComponent } from './event-data/event-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadCarouselComponent } from './head-carousel/head-carousel.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    CountdownComponent,
    VirtualDataComponent,
    SpeakersDataComponent,
    EventDataComponent,
    HeadCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    NgbModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
