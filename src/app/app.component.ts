import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-conf';
  data: any = {};
  
  ngOnInit(): void {
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