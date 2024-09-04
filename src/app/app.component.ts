import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from '../components/navigation/navigation.component';
import { ProductPageComponent } from '../components/product-page/product-page.component';
import { CollectionsComponent } from '../pages/collections/collections.component';
import { CartComponent } from '../components/cart/cart.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    ProductPageComponent,
    CollectionsComponent,
    CartComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'e-comm';
}
