import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact section" id="contacto">
      <div class="container">
        <h2 class="section-title">Contáctenos</h2>
        
        <div class="contact-content">
          <div class="contact-info fade-in">
            <div class="contact-card">
              <h3>Información de Contacto</h3>
              
              <div class="contact-item">
                <div class="contact-icon">📱</div>
                <div>
                  <p class="contact-label">Teléfono</p>
                  <p class="contact-value">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <div>
                  <p class="contact-label">Email</p>
                  <p class="contact-value">info&#64;farmaciasochoa.com</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">🏢</div>
                <div>
                  <p class="contact-label">Sucursal Principal</p>
                  <p class="contact-value">Av. Principal 123, Centro</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">🕒</div>
                <div>
                  <p class="contact-label">Horario</p>
                  <p class="contact-value">Lunes a Sábado: 8:00 AM - 8:00 PM</p>
                  <p class="contact-value">Domingo: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form slide-up">
            <h3>Envíenos un Mensaje</h3>
            <form>
              <div class="form-group">
                <label for="name">Nombre</label>
                <input type="text" id="name" name="name" placeholder="Su nombre">
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Su email">
              </div>
              
              <div class="form-group">
                <label for="message">Mensaje</label>
                <textarea id="message" name="message" rows="4" placeholder="Su mensaje"></textarea>
              </div>
              
              <button type="submit" class="btn">Enviar Mensaje</button>
            </form>
          </div>
        </div>
        
        <div class="stores-info">
          <h3 class="text-center">Nuestras Sucursales</h3>
          
          <div class="stores-grid">
            <div class="store-card">
              <h4>Sucursal Centro</h4>
              <p>Av. Principal 123, Centro</p>
              <p>Tel: +1 (555) 123-4567</p>
            </div>
            
            <div class="store-card">
              <h4>Sucursal Norte</h4>
              <p>Calle Norte 456, Sector Norte</p>
              <p>Tel: +1 (555) 234-5678</p>
            </div>
            
            <div class="store-card">
              <h4>Sucursal Sur</h4>
              <p>Av. Sur 789, Sector Sur</p>
              <p>Tel: +1 (555) 345-6789</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background-color: var(--neutral-100);
    }

    .contact-content {
      display: flex;
      gap: var(--space-4);
      margin-bottom: var(--space-6);
    }

    .contact-info, .contact-form {
      flex: 1;
    }

    .contact-card {
      background-color: white;
      border-radius: 8px;
      padding: var(--space-3);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .contact-card h3 {
      color: var(--primary-700);
      margin-bottom: var(--space-3);
    }

    .contact-item {
      display: flex;
      gap: var(--space-2);
      margin-bottom: var(--space-2);
    }

    .contact-icon {
      font-size: var(--text-2xl);
      color: var(--primary-500);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--primary-50);
      border-radius: 50%;
    }

    .contact-label {
      font-weight: 600;
      color: var(--neutral-800);
      margin-bottom: 2px;
    }

    .contact-value {
      color: var(--neutral-700);
      margin-bottom: 2px;
    }

    .contact-form h3 {
      color: var(--primary-700);
      margin-bottom: var(--space-3);
    }

    .form-group {
      margin-bottom: var(--space-2);
    }

    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 500;
      color: var(--neutral-800);
    }

    input, textarea {
      width: 100%;
      padding: var(--space-1) var(--space-2);
      border: 1px solid var(--neutral-300);
      border-radius: 4px;
      font-family: 'Open Sans', sans-serif;
      font-size: var(--text-base);
      transition: border-color 0.3s ease;
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: var(--primary-500);
    }

    .stores-info {
      margin-top: var(--space-6);
    }

    .stores-info h3 {
      color: var(--primary-700);
      margin-bottom: var(--space-3);
    }

    .stores-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-4);
    }

    .store-card {
      background-color: white;
      border-radius: 8px;
      padding: var(--space-3);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .store-card h4 {
      color: var(--primary-600);
      margin-bottom: var(--space-1);
    }

    .store-card p {
      color: var(--neutral-700);
      margin-bottom: 6px;
    }

    @media (max-width: 992px) {
      .contact-content {
        flex-direction: column;
      }

      .stores-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 576px) {
      .stores-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {}