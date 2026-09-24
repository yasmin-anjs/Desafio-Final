import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface SimboloTecnico {
  id: number;
  nome: string;
  categoria: 'GD&T (Forma e Posição)' | 'Rugosidade / Acabamento' | 'Linhas e Cortes' | 'Tolerâncias ISO';
  simbolo: string;
  significado: string;
  exemploUso: string;
  dicaUsinagem: string;
}

export interface ExemploInterpretação {
  cota: string;
  elemento: string;
  significado: string;
  toleranciaOuProcesso: string;
}

@Component({
  selector: 'app-desenhotecnico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './desenhotecnico.html',
  styleUrls: ['./desenhotecnico.css']
})
export class DesenhotecnicoComponent {
  termoBusca: string = '';
  categoriaSelecionada: string = 'Todas';
  diedroSelecionado: '1' | '3' = '1';

  categorias: string[] = [
    'Todas',
    'GD&T (Forma e Posição)',
    'Rugosidade / Acabamento',
    'Linhas e Cortes',
    'Tolerâncias ISO'
  ];

  simbolos: SimboloTecnico[] = [
    {
      id: 1,
      nome: 'Paralelismo',
      categoria: 'GD&T (Forma e Posição)',
      simbolo: '∥',
      significado: 'Garante que uma superfície ou eixo esteja a uma distância constante de uma referência.',
      exemploUso: '∥ 0,02 | A',
      dicaUsinagem: 'Exige passe de acabamento em retificadora ou fresadora de alta precisão.',
      
    },
    {
      id: 2,
      nome: 'Perpendicularidade',
      categoria: 'GD&T (Forma e Posição)',
      simbolo: '⊥',
      significado: 'Controla o ângulo exato de 90° entre duas superfícies ou eixos.',
      exemploUso: '⊥ 0,01 | B',
      dicaUsinagem: 'Verifique o esquadro do torno/morsa antes de realizar a usinagem de encosto.',
      
    },
    {
      id: 3,
      nome: 'Concentricidade / Coaxialidade',
      categoria: 'GD&T (Forma e Posição)',
      simbolo: '◎',
      significado: 'Garante que os eixos de dois cilindros partilhem exatamente a mesma linha de centro.',
      exemploUso: '◎ ∅0,03 | A',
      dicaUsinagem: 'Usinar todos os diâmetros na mesma fixação (sem desapertar a peça da placa).',
      
    },
    {
      id: 4,
      nome: 'Batimento Circular (Runout)',
      categoria: 'GD&T (Forma e Posição)',
      simbolo: '↗',
      significado: 'Variação total medida por comparador centesimal ao girar a peça 360°.',
      exemploUso: '↗ 0,015 | A-B',
      dicaUsinagem: 'Medição realizada diretamente na máquina com relógio comparador apalpador.',
      
    },
    {
      id: 5,
      nome: 'Rugosidade Ra (µm)',
      categoria: 'Rugosidade / Acabamento',
      simbolo: '∇ / Ra',
      significado: 'Desvio médio aritmético do perfil da superfície usinada em micrómetros.',
      exemploUso: 'Ra 1,6 µm',
      dicaUsinagem: 'Ra 1,6 exige ferramenta de acabamento com raio de ponta adequado e avanço reduzido.',
      
    },
    {
      id: 6,
      nome: 'Ajuste e Tolerância ISO (Furo H7)',
      categoria: 'Tolerâncias ISO',
      simbolo: 'H7',
      significado: 'Tolerância padrão ISO para furos base. Desvio inferior é sempre zero.',
      exemploUso: '∅25 H7 (+0,021 / 0)',
      dicaUsinagem: 'Usar escareador/alargador h7 após a operação de furação prévia.',
      
    },
    {
      id: 7,
      nome: 'Ajuste e Tolerância ISO (Eixo g6)',
      categoria: 'Tolerâncias ISO',
      simbolo: 'g6',
      significado: 'Tolerância padrão ISO para eixos com folga fina ou deslizante.',
      exemploUso: '∅25 g6 (-0,007 / -0,020)',
      dicaUsinagem: 'Exige retificação cilíndrica ou passe de acabamento em torno CNC com pastilha limpadora (wiper).',
      
    },
    {
      id: 8,
      nome: 'Linha Oculta (Tracejada)',
      categoria: 'Linhas e Cortes',
      simbolo: '╌ ╌ ╌',
      significado: 'Representa arestas, furos internos e contornos que não estão visíveis na vista atual.',
      exemploUso: 'Furos internos em vista frontal simples',
      dicaUsinagem: 'Confira a vista em corte para entender a profundidade e o diâmetro do furo escondido.',
      
    }
  ];

  exemplosLeitura: ExemploInterpretação[] = [
    {
      cota: '∅ 30 H7',
      elemento: 'Diâmetro Nominal 30mm',
      significado: 'Furo cilíndrico de 30mm com campo de tolerância ISO H7.',
      toleranciaOuProcesso: 'Dimensão Final: 30,000mm a 30,021mm (Alargador/Mandriladora).'
    },
    {
      cota: 'Ra 0,8',
      elemento: 'Acabamento Superficial',
      significado: 'Superfície retificada ou polida com ruído máximo Ra de 0,8 micrometros.',
      toleranciaOuProcesso: 'Processo: Retificação ou Torneamento CNC com ferramenta wiper.'
    },
    {
      cota: '⌖ ∅0,02 | A | B',
      elemento: 'Tolerância de Posição (GD&T)',
      significado: 'O centro do furo deve estar localizado dentro de uma zona cilíndrica de 0,02mm referente aos datums A e B.',
      toleranciaOuProcesso: 'Exige usinagem em Centro de Usinagem CNC com apalpador 3D.'
    }
  ];

  get simbolosFiltrados(): SimboloTecnico[] {
    return this.simbolos.filter(item => {
      const bateCat = this.categoriaSelecionada === 'Todas' || item.categoria === this.categoriaSelecionada;
      const termo = this.termoBusca.toLowerCase().trim();
      const bateTexto = !termo ||
        item.nome.toLowerCase().includes(termo) ||
        item.simbolo.toLowerCase().includes(termo) ||
        item.significado.toLowerCase().includes(termo) ||
        item.exemploUso.toLowerCase().includes(termo);

      return bateCat && bateTexto;
    });
  }

  setDiedro(val: '1' | '3'): void {
    this.diedroSelecionado = val;
  }
}

// Exportação compatível com o router
export { DesenhotecnicoComponent as Desenhotecnico };