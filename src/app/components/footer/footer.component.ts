import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h2>Farmacias L. Ochoa</h2>
            <p>Su farmacia de confianza</p>
          </div>
          
          <div class="footer-links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          
          <div class="footer-contact">
            <h3>Contacto</h3>
            <p>Av. Principal 123, Centro</p>
            <p>+1 (555) 123-4567</p>
            <p>info&#64;farmaciasochoa.com</p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Farmacias L. Ochoa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--primary-700);
      color: white;
      padding: var(--space-6) 0 var(--space-2) 0;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: var(--space-4);
      margin-bottom: var(--space-4);
    }

    .footer-logo h2 {
      color: white;
      margin-bottom: var(--space-1);
    }

    .footer-logo p {
      opacity: 0.8;
    }

    .footer-links h3, .footer-contact h3 {
      color: white;
      margin-bottom: var(--space-2);
      font-size: var(--text-lg);
    }

    .footer-links ul {
      list-style: none;
    }

    .footer-links li {
      margin-bottom: var(--space-1);
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: white;
    }

    .footer-contact p {
      margin-bottom: var(--space-1);
      opacity: 0.8;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: var(--space-2);
      text-align: center;
    }

    .footer-bottom p {
      opacity: 0.6;
      font-size: var(--text-sm);
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: var(--space-3);
      }

      .footer-logo, .footer-links, .footer-contact {
        text-align: center;
      }

      .footer-logo {
        margin-bottom: var(--space-2);
      }
    }
  `]
})
export class FooterComponent {}