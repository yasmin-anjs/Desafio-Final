import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Diagnostico {
  tipo: string;
  causa: string;
  solucao: string;
  severidade: 'Baixa' | 'Média' | 'Alta';
}

@Component({
  selector: 'app-diagnosticosdedesgaste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagnosticosdedesgaste.html',
  styleUrl: './diagnosticosdedesgaste.css'
})
export class Diagnosticosdedesgaste {
  analisando: boolean = false;
  resultado: Diagnostico | null = null;

  exemplos: { [key: string]: Diagnostico } = {
    flanco: {
      tipo: 'Desgaste de Flanco (VB)',
      causa: 'Atrito natural prolongado entre a peça e a superfície de folga da ferramenta.',
      solucao: 'Reduzir a velocidade de corte (Vc) ou selecionar uma classe de metal duro mais resistente ao desgaste.',
      severidade: 'Média'
    },
    bue: {
      tipo: 'Aresta Postiça de Corte (BUE)',
      causa: 'Temperatura de corte insuficiente gerando soldagem de material da peça na aresta.',
      solucao: 'Aumentar a velocidade de corte (Vc) e utilizar fluido de corte sob elevada pressão.',
      severidade: 'Baixa'
    },
    lascamento: {
      tipo: 'Lascamento na Aresta',
      causa: 'Vibrações excessivas, cortes intermitentes severos ou classe de metal duro muito frágil.',
      solucao: 'Aumentar a tenacidade da classe do inserto e reforçar a rigidez da fixação.',
      severidade: 'Alta'
    }
  };

  simularAnalise(tipo: string) {
    this.analisando = true;
    this.resultado = null;

    setTimeout(() => {
      this.analisando = false;
      this.resultado = this.exemplos[tipo];
    }, 1000);
  }
}