import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Etapa {
  sequencia: number;
  operacao: string;
  maquina: string;
  ferramenta: string;
  vc: number;
  avance: number;
}

@Component({
  selector: 'app-criadorderoteiro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './criadorderoteiro.html',
  styleUrl: './criadorderoteiro.css'
})
export class Criadorderoteiro {
  nomePeca: string = 'Eixo Transmissor CNC';
  material: string = 'Aço ABNT 1045';

  novaEtapa: Etapa = {
    sequencia: 10,
    operacao: 'Faceamento e Centragem',
    maquina: 'Torno CNC',
    ferramenta: 'Inserto WNMG 080408',
    vc: 200,
    avance: 0.25
  };

  roteiro: Etapa[] = [
    { sequencia: 10, operacao: 'Faceamento e Centragem', maquina: 'Torno CNC', ferramenta: 'Inserto WNMG 080408', vc: 200, avance: 0.25 }
  ];

  adicionarEtapa() {
    const proximaSeq = (this.roteiro.length + 1) * 10;
    this.roteiro.push({ ...this.novaEtapa, sequencia: proximaSeq });
  }

  removerEtapa(index: number) {
    this.roteiro.splice(index, 1);
  }
}