import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface EpiItem {
  id: number;
  nome: string;
  categoria: 'Obrigatório Geral' | 'Específico / Processo' | 'Atenção / Proibição';
  exigencia: string;
  riscoEvitado: string;
  norma: string;
  icone: string;
  dicaSeguranca: string;
  tipoAlerta: 'danger' | 'warning' | 'info';
}

@Component({
  selector: 'app-segurancaeepis',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './segurancaeepis.html',
  styleUrls: ['./segurancaeepis.css']
})
export class SegurancaeepisComponent {
  termoBusca: string = '';
  categoriaSelecionada: string = 'Todas';

  categorias: string[] = [
    'Todas',
    'Obrigatório Geral',
    'Específico / Processo',
    'Atenção / Proibição'
  ];

  epis: EpiItem[] = [
    {
      id: 1,
      nome: 'Óculos de Proteção com Proteção Lateral',
      categoria: 'Obrigatório Geral',
      exigencia: '100% do tempo no chão de fábrica e zonas de usinagem.',
      riscoEvitado: 'Projeção de cavacos incandescentes, fluidos sob pressão e partículas no ar.',
      norma: 'NR-6 / ANSI Z87.1',
      icone: '🥽',
      dicaSeguranca: 'Lentes arranhadas devem ser substituídas imediatamente para evitar fadiga visual.',
      tipoAlerta: 'info'
    },
    {
      id: 2,
      nome: 'Protetor Auditivo (Concha ou Plug)',
      categoria: 'Obrigatório Geral',
      exigencia: 'Obrigatório em zonas operacionais com nível de ruído > 85 dB(A).',
      riscoEvitado: 'Perda auditiva induzida por ruído contínuo de corte e picos de impacto.',
      norma: 'NR-6 / NR-15 / NBR 16021',
      icone: '🎧',
      dicaSeguranca: 'Higienize diariamente os plugs de silicone com água e sabão neutro.',
      tipoAlerta: 'info'
    },
    {
      id: 3,
      nome: 'Calçado de Segurança com Biqueira',
      categoria: 'Obrigatório Geral',
      exigencia: 'Uso contínuo para circulação e operação no chão de fábrica.',
      riscoEvitado: 'Queda de ferramentas/peças pesadas, perfuração por cavacos e pisos escorregadios.',
      norma: 'NR-6 / ISO 20345',
      icone: '🥾',
      dicaSeguranca: 'Garante aderência contra óleos e proteção contra impactos diretos nos pés.',
      tipoAlerta: 'info'
    },
    {
      id: 4,
      nome: 'PROIBIÇÃO: Luvas em Máquinas Rotativas',
      categoria: 'Atenção / Proibição',
      exigencia: 'PROIBIDO ao operar tornos, furadeiras, fresadoras e fuso em rotação.',
      riscoEvitado: 'Agarramento e esmagamento fatal dos membros pelas partes em movimento.',
      norma: 'NR-12 (Segurança em Máquinas)',
      icone: '🚫',
      dicaSeguranca: 'Luvas anticorte só devem ser usadas no manuseio de cavacos COM A MÁQUINA TOTALMENTE PARADA.',
      tipoAlerta: 'danger'
    },
    {
      id: 5,
      nome: 'Creme Protetor de Pele (Barreira)',
      categoria: 'Específico / Processo',
      exigencia: 'Aplicar nas mãos/braços antes de manusear óleos solúveis e refrigerantes.',
      riscoEvitado: 'Dermatites de contacto, alergias químicas e ressecamento da pele.',
      norma: 'NR-6 / Portaria 3.214',
      icone: '🧴',
      dicaSeguranca: 'Reaplique o creme a cada 4 horas de trabalho ou após a lavagem das mãos.',
      tipoAlerta: 'warning'
    },
    {
      id: 6,
      nome: 'Protetor Facial de Policarbonato (Viseira)',
      categoria: 'Específico / Processo',
      exigencia: 'Operações de esmerilhamento, corte com disco e rebarbamento pesado.',
      riscoEvitado: 'Impactos de alta energia em todo o rosto e projeção intensa de fagulhas.',
      norma: 'NR-6 / ANSI Z87.1+',
      icone: '🛡️',
      dicaSeguranca: 'Deve ser utilizado em conjunto com os óculos de proteção (proteção dupla).',
      tipoAlerta: 'warning'
    },
    {
      id: 7,
      nome: 'Respirador P2 / Máscara contra Névoas',
      categoria: 'Específico / Processo',
      exigencia: 'Usinagem a seco de fundidos, grafite ou salas de retificação com névoa de óleo.',
      riscoEvitado: 'Inalação de micropartículas metálicas e névoas químicas nocivas.',
      norma: 'NR-6 / NBR 13698',
      icone: '😷',
      dicaSeguranca: 'Ajuste perfeitamente a fita nasal para garantir vedação no rosto.',
      tipoAlerta: 'warning'
    },
    {
      id: 8,
      nome: 'Roupas Ajustadas & Cabelos Presos',
      categoria: 'Obrigatório Geral',
      exigencia: 'Sem mangas soltas, cordões pendurados, anéis ou relógios. Cabelo longo preso.',
      riscoEvitado: 'Enroscamento catastrófico nas árvores de rotação e fusos.',
      norma: 'NR-12 / NR-1',
      icone: '👔',
      dicaSeguranca: 'Remova todos os adornos (anéis, correntes e relógios) antes de ligar a máquina.',
      tipoAlerta: 'danger'
    }
  ];

  get episFiltrados(): EpiItem[] {
    return this.epis.filter(item => {
      const bateCategoria = this.categoriaSelecionada === 'Todas' || item.categoria === this.categoriaSelecionada;
      const termo = this.termoBusca.toLowerCase().trim();
      const bateTexto = !termo ||
        item.nome.toLowerCase().includes(termo) ||
        item.exigencia.toLowerCase().includes(termo) ||
        item.riscoEvitado.toLowerCase().includes(termo) ||
        item.norma.toLowerCase().includes(termo);

      return bateCategoria && bateTexto;
    });
  }

  filtrarPorCategoria(cat: string): void {
    this.categoriaSelecionada = cat;
  }
}

// Exporta com o nome exato da rota
export { SegurancaeepisComponent as Segurancaeepis };