import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  products: Product[] = [];
}
