import { Component } from '@angular/core';
import { ProductPageComponent } from '../../components/product-page/product-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
