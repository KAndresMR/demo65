import { Component, HostListener} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CalculadoraService } from '../../services/calculadora.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-resta',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './resta.component.html',
  styleUrl: './resta.component.scss'
})
export class RestaComponent {

  displayValue: string = '0';

  constructor(private calculadoraService: CalculadoraService){
  }
  

  limpiar() {
    this.calculadoraService.limpiar();
  }

  agregarNumero(num: string) {
    this.calculadoraService.agregarNumero(num);
    this.displayValue = num
  }

  agregarDecimal() {
    this.calculadoraService.agregarDecimal();

  }

  agregarOperador(op: string) {
    this.calculadoraService.agregarOperador(op);
    this.displayValue = op
  }

  calcular() {
    this.calculadoraService.calcular();
  }

  obtenerNumeroEnPantalla(): string {
    return this.calculadoraService.obtenerNumeroEnPantalla();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const key = event.key;
    if (!isNaN(Number(key))) {
      this.agregarNumero(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
      this.agregarOperador(key);
    } else if (key === '.' || key === ',') {
      this.agregarDecimal();
    } else if (key === 'Enter') {
      this.calcular();
    } else if (key === 'Escape') {
      this.limpiar();
    }
  }


}
