import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IpCalculator } from './services/ip-calculator';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  
  request = {
    ip: '',
    maskOrCidr: ''
  };

  resultado: any = null;
  mensagemErro: string = '';

  
  constructor(private ipService: IpCalculator) {}

  fazerCalculo() {
    this.mensagemErro = '';
    this.resultado = null;

    this.ipService.calcularRede(this.request).subscribe({
      next: (respostaDoBackend) => {
        this.resultado = respostaDoBackend;
      },
      error: (erro) => {
        this.mensagemErro = 'Erro ao calcular. Verifique os dados ou se o backend está rodando.';
        console.error(erro);
      }
    });
  }
}