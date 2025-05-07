import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about section" id="nosotros">
      <div class="container">
        <div class="about-content">
          <div class="about-image fade-in">
            <img src="https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Farmacia L. Ochoa">
          </div>
          <div class="about-text slide-up">
            <h2>Sobre Farmacias L. Ochoa</h2>
            <p class="about-subtitle">Más de 20 años cuidando de su salud</p>
            
            <div class="about-features">
              <div class="feature">
                <div class="feature-icon">🏆</div>
                <div class="feature-text">
                  <h3>Calidad Garantizada</h3>
                  <p>Todos nuestros productos son de la más alta calidad y cuentan con todas las certificaciones necesarias.</p>
                </div>
              </div>
              
              <div class="feature">
                <div class="feature-icon">👨‍⚕️</div>
                <div class="feature-text">
                  <h3>Asesoría Profesional</h3>
                  <p>Contamos con farmacéuticos certificados que le brindarán la mejor asesoría para su salud.</p>
                </div>
              </div>
              
              <div class="feature">
                <div class="feature-icon">🏥</div>
                <div class="feature-text">
                  <h3>Múltiples Sucursales</h3>
                  <p>Estamos presentes en diferentes puntos de la ciudad para su comodidad.</p>
                </div>
              </div>
            </div>
            
            <p class="about-history">
              Fundada en 2003 por el Dr. Luis Ochoa, nuestra farmacia ha crecido hasta convertirse en una referencia 
              en atención farmacéutica de calidad. Nuestro compromiso es brindar productos de calidad y un servicio 
              excepcional a cada uno de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background-color: white;
    }

    .about-content {
      display: flex;
      align-items: center;
      gap: var(--space-6);
    }

    .about-image {
      flex: 1;
    }

    .about-image img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .about-text {
      flex: 1;
    }

    .about-text h2 {
      color: var(--primary-700);
      margin-bottom: var(--space-1);
    }

    .about-subtitle {
      color: var(--primary-500);
      font-size: var(--text-lg);
      margin-bottom: var(--space-3);
      font-weight: 500;
    }

    .about-features {
      margin-bottom: var(--space-3);
    }

    .feature {
      display: flex;
      gap: var(--space-2);
      margin-bottom: var(--space-2);
    }

    .feature-icon {
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

    .feature-text h3 {
      font-size: var(--text-lg);
      margin-bottom: var(--space-1);
      color: var(--primary-600);
    }

    .feature-text p {
      color: var(--neutral-700);
      font-size: var(--text-sm);
    }

    .about-history {
      color: var(--neutral-700);
      line-height: 1.6;
    }

    @media (max-width: 992px) {
      .about-content {
        flex-direction: column;
        gap: var(--space-4);
      }

      .about-image, .about-text {
        width: 100%;
      }
    }
  `]
})
export class AboutComponent {}