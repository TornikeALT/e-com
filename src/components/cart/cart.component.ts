import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  isVisible = false;
  cartDetails: any[] | null = null;
  constructor(private SharedService: SharedService) {}

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  handleItemRemove(index: number) {
    if (this.cartDetails) {
      this.cartDetails.splice(index, 1);
      if (this.cartDetails.length === 0) {
        this.cartDetails = null;
      }
      this.SharedService.setData(this.cartDetails || []);
    }
  }

  ngOnInit(): void {
    this.SharedService.data$.subscribe((data) => {
      this.cartDetails = data;
    });
  }
}
