import { Component } from '@angular/core';

@Component({
  selector: 'app-button-greet',
  standalone: true,
  templateUrl: './button-greet.component.html',  // Usando el HTML que compartiste
  styleUrls: ['./button-greet.component.css']
})
export class ButtonGreetComponent {
  message: string = '';  // El mensaje estará vacío al inicio

  greet() {
    console.log('¡Hola, bienvenido a Angular! 👋');
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';  // El mensaje aparece cuando pasas el mouse
  }

  onMouseOut() {
    this.message = '';  // El mensaje desaparece cuando quitas el mouse
  }
}
