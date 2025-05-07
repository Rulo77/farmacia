import { Component, Input } from '@angular/core';
import { Product } from '../../models/products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() product!: Product;
}
