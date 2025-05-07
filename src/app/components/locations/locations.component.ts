import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
})
export class LocationsComponent {
  locations = [
    {
      id: 1,
      name: "Sucursal Centro",
      address: "Av. Principal 123, Centro",
      phone: "(555) 123-4567",
      hours: "Lun - Sáb: 8:00 - 20:00, Dom: 9:00 - 18:00",
      image: "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 2,
      name: "Sucursal Norte",
      address: "Blvd. Norte 456, Col. Moderna",
      phone: "(555) 987-6543",
      hours: "Lun - Sáb: 8:00 - 22:00, Dom: 9:00 - 20:00",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 3,
      name: "Sucursal Sur",
      address: "Calle Sur 789, Col. Jardines",
      phone: "(555) 456-7890",
      hours: "Lun - Dom: 24 horas",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600&h=400"
    }
  ];
}