import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/products';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <section class="products section" id="productos">
      <div class="container">
        <h2 class="section-title">Nuestros Productos</h2>
        
        <div class="categories">
          <button 
            [class.active]="selectedCategory === ''" 
            (click)="filterByCategory('')"
            class="category-btn"
          >
            Todos
          </button>
          <button 
            *ngFor="let category of categories" 
            [class.active]="selectedCategory === category"
            (click)="filterByCategory(category)"
            class="category-btn"
          >
            {{ category }}
          </button>
        </div>
        
        <div class="products-grid">
          <app-card 
            *ngFor="let product of filteredProducts" 
            
            class="slide-up"
            [style.animation-delay.ms]="100 * product.id"
          ></app-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .products {
      background-color: var(--neutral-100);
    }

    .categories {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-bottom: var(--space-4);
    }

    .category-btn {
      background-color: white;
      border: 1px solid var(--neutral-300);
      color: var(--neutral-700);
      padding: var(--space-1) var(--space-2);
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .category-btn:hover {
      border-color: var(--primary-500);
      color: var(--primary-500);
    }

    .category-btn.active {
      background-color: var(--primary-500);
      border-color: var(--primary-500);
      color: white;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-4);
    }

    @media (max-width: 992px) {
      .products-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 576px) {
      .products-grid {
        grid-template-columns: 1fr;
      }

      .categories {
        gap: var(--space-1);
      }

      .category-btn {
        font-size: var(--text-sm);
        padding: 6px var(--space-1);
      }
    }
  `]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
      this.extractCategories();
    });
  }

  extractCategories(): void {
    const uniqueCategories = new Set<string>();
    this.products.forEach(product => {
      uniqueCategories.add(product.category);
    });
    this.categories = Array.from(uniqueCategories);
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    if (category === '') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }
}