import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: any = {};
  
  constructor() {
    // Obtén el contenido de <noscript> con id="app-data"
    const dataElement = document.getElementById('app-data');
    if (dataElement) {
      try {
        // Parsea el contenido de <noscript> como JSON
        this.data = JSON.parse(dataElement.textContent || '{}');
        console.log('Datos del json:', this.data); // Para depuración
      } catch (error) {
        console.error('Error al parsear JSON:', error);
      }
    }
  }

}