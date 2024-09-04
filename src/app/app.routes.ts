import { Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { CollectionsComponent } from '../pages/collections/collections.component';
import { MenComponent } from '../pages/men/men.component';
import { WomenComponent } from '../pages/women/women.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'collections', component: CollectionsComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
