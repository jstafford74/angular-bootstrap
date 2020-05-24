import { Component } from '@angular/core'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent {
  showNavigationArrows = true
  images = [
    'assets/images/laka_obx.jpg',
    'assets/images/obx_beach.jpg',
    'assets/images/reflection.jpg'
  ]
  constructor (config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000
    config.wrap = true
    config.keyboard = false
    config.pauseOnHover = false
    config.showNavigationArrows = true
  }
}
