import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/products';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <section class="featured-products section">
      <div class="container">
        <h2 class="section-title">Productos Destacados</h2>
        <div class="featured-products-grid">
          <app-card 
            *ngFor="let product of featuredProducts" 
            class="fade-in"
            [style.animation-delay.ms]="100 * product.id"
          ></app-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .featured-products {
      background-color: white;
    }

    .featured-products-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-4);
    }

    @media (max-width: 992px) {
      .featured-products-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 576px) {
      .featured-products-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FeaturedProductsComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getFeaturedProducts().subscribe(products => {
      this.featuredProducts = products;
    });
  }
}