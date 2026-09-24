import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface OperacaoRoteiro {
  id: number;
  operacao: string;
  maquina: string;
  ferramenta: string;
  vc: number;
  avanco: number;
  ap?: number;
  obs?: string;
}

@Component({
  selector: 'app-criadorderoteiro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './criadorderoteiro.html',
  styleUrl: './criadorderoteiro.css'
})
export class CriadorderoteiroComponent {
  // Informações do Cabeçalho
  nomePeca: string = 'Eixo Transmissor CNC';
  codigoDesenho: string = 'DES-2026-001';
  materialBruto: string = 'Aço ABNT 1045';
  dimensoesBruto: string = 'Ø 50mm x 250mm';
  elaborador: string = 'Eng. de Processos';
  dataHoje: string = new Date().toLocaleDateString('pt-BR');

  // Formulário de Nova Operação
  novaOp: string = 'Faceamento e Centragem';
  novaMaq: string = 'Torno CNC';
  novaFerr: string = 'Inserto WNMG 080408';
  novoVc: number = 200;
  novoAvanco: number = 0.25;
  novoAp: number = 1.5;
  novaObs: string = 'Refrigerar com óleo solúvel 8%';

  // Lista de Operações
  operacoes: OperacaoRoteiro[] = [];

  constructor() {
    this.carregarExemplo();
  }

  // Adicionar uma nova operação ao roteiro
  adicionarOperacao(): void {
    if (!this.novaOp.trim() || !this.novaMaq.trim()) {
      alert('Por favor, informe a descrição da operação e a máquina.');
      return;
    }

    const nova: OperacaoRoteiro = {
      id: Date.now(),
      operacao: this.novaOp,
      maquina: this.novaMaq,
      ferramenta: this.novaFerr,
      vc: this.novoVc,
      avanco: this.novoAvanco,
      ap: this.novoAp,
      obs: this.novaObs
    };

    this.operacoes.push(nova);
    this.limparFormularioOperacao();
  }

  // Remover operação pelo ID
  removerOperacao(id: number): void {
    this.operacoes = this.operacoes.filter(op => op.id !== id);
  }

  // Reordenar operações na lista
  moverOperacao(index: number, direcao: 'up' | 'down'): void {
    if (direcao === 'up' && index > 0) {
      const temp = this.operacoes[index];
      this.operacoes[index] = this.operacoes[index - 1];
      this.operacoes[index - 1] = temp;
    } else if (direcao === 'down' && index < this.operacoes.length - 1) {
      const temp = this.operacoes[index];
      this.operacoes[index] = this.operacoes[index + 1];
      this.operacoes[index + 1] = temp;
    }
  }

  // Resetar campos do formulário de adição
  limparFormularioOperacao(): void {
    this.novaOp = '';
    this.novaMaq = '';
    this.novaFerr = '';
    this.novoVc = 150;
    this.novoAvanco = 0.15;
    this.novoAp = 1.0;
    this.novaObs = '';
  }

  // Carregar um exemplo pronto completo
  carregarExemplo(): void {
    this.nomePeca = 'Eixo Transmissor Principal CNC';
    this.codigoDesenho = 'DES-2026-001-REV2';
    this.materialBruto = 'Aço ABNT 1045 (Laminado)';
    this.dimensoesBruto = 'Ø 50,8mm x 250mm';
    this.elaborador = 'Eng. de Processos';

    this.operacoes = [
      {
        id: 1,
        operacao: 'Faceamento e Centragem de Topo',
        maquina: 'Torno CNC',
        ferramenta: 'Inserto WNMG 080408 - P25',
        vc: 220,
        avanco: 0.25,
        ap: 1.5,
        obs: 'Abrir furo de centro 60° DIN 333'
      },
      {
        id: 2,
        operacao: 'Desbaste Longitudinal Externo (Ø 50 para Ø 35mm)',
        maquina: 'Torno CNC',
        ferramenta: 'Inserto WNMG 080408 - P25',
        vc: 240,
        avanco: 0.30,
        ap: 2.0,
        obs: 'Deixar sobremetal de 0.5mm no diâmetro para acabamento'
      },
      {
        id: 3,
        operacao: 'Acabamento Dimensional nos Rebaixos',
        maquina: 'Torno CNC',
        ferramenta: 'Inserto VNMG 160404 - P10',
        vc: 280,
        avanco: 0.12,
        ap: 0.5,
        obs: 'Garantir rugosidade Ra 1.6 e tolerância h6'
      },
      {
        id: 4,
        operacao: 'Usinagem de Sangro e Canal de Rasteira',
        maquina: 'Torno CNC',
        ferramenta: 'Bedame de Canal 3mm',
        vc: 120,
        avanco: 0.08,
        ap: 3.0,
        obs: 'Verificar largura de 3.0mm com micrômetro'
      },
      {
        id: 5,
        operacao: 'Rosqueamento M24 x 1.5 - 6g',
        maquina: 'Torno CNC',
        ferramenta: 'Inserto de Rosca 60° ER 16',
        vc: 90,
        avanco: 1.50,
        ap: 0.2,
        obs: 'Realizar 8 passes. Testar com calibrador anel passa/não-passa'
      }
    ];
  }

  // Limpar todo o roteiro
  limparRoteiro(): void {
    if (confirm('Deseja realmente limpar todas as informações do roteiro?')) {
      this.nomePeca = '';
      this.codigoDesenho = '';
      this.materialBruto = '';
      this.dimensoesBruto = '';
      this.operacoes = [];
    }
  }

  // Ação de Impressão
  imprimirRoteiro(): void {
    window.print();
  }
}

// Exportação secundária para evitar erro TS2305 no app.routes.ts
export { CriadorderoteiroComponent as Criadorderoteiro };