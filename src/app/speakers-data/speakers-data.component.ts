import { Component, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-speakers-data',
  templateUrl: './speakers-data.component.html',
  styleUrls: ['./speakers-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SpeakersDataComponent {

}
