import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SharedService } from '../../service/shared.service';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [DecimalPipe, CarouselComponent, CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  @ViewChild('title') title!: ElementRef;
  public index = 1;
  quantity = 0;
  price = 125;
  sale = 50;
  discount = 250;
  showCarousel = false;

  constructor(private SharedService: SharedService) {}

  handleShowCarousel() {
    this.showCarousel = !this.showCarousel;
  }

  handleCloseCarousel() {
    this.showCarousel = false;
  }

  handleBtnClick(clickedIndex: number) {
    this.index = clickedIndex;
  }

  handleQuantityIncrease() {
    this.quantity++;
  }

  handleQuantityDecrease() {
    if (this.quantity > 0) {
      this.quantity--;
    } else return;
  }
  handleNextImage() {
    if (this.index === 4) {
      this.index = 1;
    } else this.index++;
  }
  handlePreviousImage() {
    if (this.index === 1) {
      this.index = 4;
    } else this.index--;
  }
  handeAddToCart() {
    // Retrieve existing cart details
    const existingCartDetails = this.SharedService.getData() || [];

    // Get the title of the product
    const productTitle = this.title.nativeElement.innerText;

    // Check if the product is already in the cart
    const existingProduct = existingCartDetails.find(
      (item) => item.heading === productTitle
    );

    if (existingProduct) {
      // Update the quantity and total price if product already exists in the cart
      existingProduct.qty += this.quantity;
      existingProduct.total = existingProduct.price * existingProduct.qty;
    } else {
      // Add new product to the cart if it doesn't exist
      const newProduct = {
        heading: productTitle,
        qty: this.quantity,
        total: this.price * this.quantity,
        price: this.price,
      };
      existingCartDetails.push(newProduct);
    }
    this.quantity > 0 && this.SharedService.setData(existingCartDetails);
  }
}
