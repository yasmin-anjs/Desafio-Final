import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DiagnosticoIA {
  titulo: string;
  causaRaiz: string;
  solucoes: string[];
  precisao: string;
  ajusteVc: string;
  ajusteF: string;
  refrigeracao: string;
}

@Component({
  selector: 'app-diagnosticosdedesgaste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagnosticosdedesgaste.html',
  styleUrl: './diagnosticosdedesgaste.css'
})
export class DiagnosticosdedesgasteComponent {
  opcaoSelecionada: string = 'flanco';

  diagnosticos: { [key: string]: DiagnosticoIA } = {
    flanco: {
      titulo: 'Desgaste de Flanco (VB)',
      causaRaiz: 'Velocidade de corte excessiva ou falta de resistência ao desgaste no material do inserto.',
      solucoes: [
        'Reduzir a velocidade de corte (Vc).',
        'Selecionar uma classe de metal duro mais dura / com cobertura PVD/CVD.',
        'Garantir fluxo contínuo de fluido de corte.'
      ],
      precisao: '98.5%',
      ajusteVc: '⬇️ Reduzir 15%',
      ajusteF: '↔️ Manter',
      refrigeracao: 'Abundante (Ativada)'
    },
    bue: {
      titulo: 'Aresta Postiça de Corte (BUE)',
      causaRaiz: 'Temperatura de corte muito baixa na zona de cavaco, causando soldagem do material no inserto.',
      solucoes: [
        'Aumentar a velocidade de corte (Vc) para elevar a temperatura.',
        'Usar inserto com cobertura mais lisa (TiAlN / DLC).',
        'Aumentar a pressão do fluido de refrigeração.'
      ],
      precisao: '96.2%',
      ajusteVc: '⬆️ Aumentar 20%',
      ajusteF: '⬆️ Aumentar 10%',
      refrigeracao: 'Alta Pressão'
    },
    lascamento: {
      titulo: 'Lascamento na Aresta',
      causaRaiz: 'Golpes mecânicos, vibração excessiva da máquina ou tenacidade insuficiente do inserto.',
      solucoes: [
        'Selecionar uma classe de inserto mais tenaz.',
        'Verificar rigidez do fixador da ferramenta e da peça.',
        'Reduzir o avanço (f) no início do corte.'
      ],
      precisao: '94.8%',
      ajusteVc: '↔️ Manter',
      ajusteF: '⬇️ Reduzir 25%',
      refrigeracao: 'Opcional / Seco'
    },
    trinca: {
      titulo: 'Trincas Térmicas',
      causaRaiz: 'Ciclos alternados de aquecimento e resfriamento rápido (corte intermitente com refrigeração má posicionada).',
      solucoes: [
        'Usinar a seco ou aplicar refrigeração muito abundante e direta.',
        'Usar classe com melhor resistência ao choque térmico.',
        'Reduzir a velocidade de corte.'
      ],
      precisao: '97.1%',
      ajusteVc: '⬇️ Reduzir 10%',
      ajusteF: '↔️ Manter',
      refrigeracao: 'Desativar ou Abundante'
    }
  };

  get dados(): DiagnosticoIA {
    return this.diagnosticos[this.opcaoSelecionada] || this.diagnosticos['flanco'];
  }

  selecionarDesgaste(chave: string): void {
    this.opcaoSelecionada = chave;
  }
}

// Exporta exatamente com o nome exigido no app.routes.ts
export { DiagnosticosdedesgasteComponent as Diagnosticosdedesgaste };