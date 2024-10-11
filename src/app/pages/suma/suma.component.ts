import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './suma.component.html',
  styleUrl: './suma.component.scss'
})
export class SumaComponent {
  title = 'demo65';
  resultadoSuma = 0;
  calSumar() {
    const firstNumberSum = +(
      document.getElementById('firstNumberSum') as HTMLInputElement
    ).value;
    const secondNumberSum = +(
      document.getElementById('secondNumberSum') as HTMLInputElement
    ).value;
    this.resultadoSuma = firstNumberSum + secondNumberSum;
  }

}
