import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styles: [`
    .hero {
      padding-top: calc(70px + var(--space-6));
      padding-bottom: var(--space-6);
      background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-700) 100%);
      color: white;
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

    .hero-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-4);
    }

    .hero-text {
      flex: 1;
    }

    .hero-text h1 {
      font-size: var(--text-5xl);
      margin-bottom: var(--space-3);
      color: white;
    }

    .hero-text p {
      font-size: var(--text-xl);
      margin-bottom: var(--space-4);
      opacity: 0.9;
    }

    .hero-image {
      flex: 1;
      display: flex;
      justify-content: center;
    }

    .owner-photo {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      max-width: 400px;
    }

    .owner-photo img {
      display: block;
      width: 100%;
      border-radius: 10px;
      transition: transform 0.3s ease;
    }

    .owner-photo:hover img {
      transform: scale(1.02);
    }

    .owner-info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
      padding: var(--space-2);
      color: white;
    }

    .owner-info h3 {
      color: white;
      margin-bottom: var(--space-1);
    }

    .owner-info p {
      margin: 0;
      font-size: var(--text-sm);
      opacity: 0.9;
    }

    .btn {
      padding: var(--space-2) var(--space-4);
      font-size: var(--text-lg);
      background-color: var(--secondary-500);
    }

    .btn:hover {
      background-color: var(--secondary-600);
    }

    @media (max-width: 992px) {
      .hero-content {
        flex-direction: column;
        text-align: center;
      }

      .hero-text {
        margin-bottom: var(--space-4);
      }

      .hero-text h1 {
        font-size: var(--text-4xl);
      }

      .hero-text p {
        font-size: var(--text-lg);
      }
    }

    @media (max-width: 576px) {
      .hero {
        min-height: auto;
        padding-top: calc(70px + var(--space-4));
        padding-bottom: var(--space-4);
      }

      .owner-photo {
        max-width: 300px;
      }
    }
  `]
})
export class HeroComponent {}