import { Component } from '@angular/core';
import { NavBarComponent } from './components/navBar/navBar.component';
import { HeroComponent } from './components/hero/hero.component';
import {  LocationsComponent } from './components/locations/locations.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavBarComponent,
    //HeroComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    LocationsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'store-test';
}
