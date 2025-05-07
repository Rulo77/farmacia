import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/products';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './products.component.html',
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