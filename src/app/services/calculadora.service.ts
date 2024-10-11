import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  private numeroEnPantalla = '0';
  private operador = '';
  private resultado = '';

  limpiar() {
    this.numeroEnPantalla = '0';
    this.operador = '';
    this.resultado = '';
  }

  agregarNumero(num: string) {
    if (this.numeroEnPantalla === '0') {
      this.numeroEnPantalla += num;
    } else {
      this.numeroEnPantalla += num;
    }

    console.log('Número en pantalla:', this.numeroEnPantalla);
  }

  agregarDecimal() {
    if (!this.numeroEnPantalla.includes('.')) {
      this.numeroEnPantalla += '.';
    }
  }

  agregarOperador(op: string) {
    if (this.numeroEnPantalla !== '') {
      if (this.operador !== '') {
        this.calcular();
      }
      this.operador = op;
      this.resultado = this.numeroEnPantalla;
      this.numeroEnPantalla = '';
    }
  }

  calcular(): string {
    if (this.operador !== '' && this.numeroEnPantalla !== '') {
      const num1 = parseFloat(this.resultado);
      const num2 = parseFloat(this.numeroEnPantalla);
      switch (this.operador) {
        case '+':
          this.resultado = (num1 + num2).toString();
          break;
        case '-':
          this.resultado = (num1 - num2).toString();
          break;
        case '*':
          this.resultado = (num1 * num2).toString();
          break;
        case '/':
          this.resultado = (num1 / num2).toString();
          break;
      }
      this.numeroEnPantalla = this.resultado;
      this.operador = '';
    }
    return this.resultado;
  }

  obtenerNumeroEnPantalla(): string {
    return this.numeroEnPantalla;
  }

}
