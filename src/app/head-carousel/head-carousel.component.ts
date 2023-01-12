import { Component, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-head-carousel',
  templateUrl: './head-carousel.component.html',
  styleUrls: ['./head-carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HeadCarouselComponent {
  public images = [267, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // config.interval = 2000;
    // config.keyboard = true;
    // config.pauseOnHover = true;
    // this.carousel.pause();
  }

}
