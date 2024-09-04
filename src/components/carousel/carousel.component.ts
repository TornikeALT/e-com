import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  @Output() closeCarousel = new EventEmitter<void>();
  @Input() index: number = 1;

  handleBtnClick(clickedIndex: number) {
    this.index = clickedIndex;
  }

  handlePreviousClick() {
    if (this.index === 1) {
      this.index = 4;
    } else this.index--;
  }

  handleNextClick() {
    if (this.index === 4) {
      this.index = 1;
    } else this.index++;
  }
  handleCarouselClose() {
    this.closeCarousel.emit();
  }
}
