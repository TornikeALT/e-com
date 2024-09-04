import {
  Component,
  ElementRef,
  ViewChild,
  Renderer2,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CartComponent } from '../cart/cart.component';
import { SharedService } from '../../service/shared.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, CartComponent, CommonModule, SidenavComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {
  @ViewChild('test') test!: ElementRef;
  totalQuantity = null;
  isSideNavOpen = false;

  constructor(
    private renderer: Renderer2,
    private SharedService: SharedService
  ) {}

  handleNavOpen() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  onMouseEnter() {
    this.renderer.setStyle(this.test.nativeElement, 'display', 'block');
  }
  ngOnInit(): void {
    this.SharedService.data$.subscribe((data) => {
      this.totalQuantity = data.reduce((sum, item) => sum + (item.qty || 0), 0);
    });
  }
}
