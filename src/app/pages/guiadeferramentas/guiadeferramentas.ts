import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Ferramenta {
  id: number;
  nome: string;
  codigoIso: string;
  categoria: 'Torneamento' | 'Fresamento' | 'Furação e Rosqueamento' | 'Mandrilamento e Outros';
  aplicacao: string;
  fixacao: string;
  chaveTorx: string;
  torque: string;
  dicaTecnica: string;
  icone: string;
}

@Component({
  selector: 'app-guiadeferramentas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './guiadeferramentas.html',
  styleUrls: ['./guiadeferramentas.css']
})
export class GuiadeferramentasComponent {
  termoBusca: string = '';
  categoriaSelecionada: string = 'Todas';

  categorias: string[] = [
    'Todas',
    'Torneamento',
    'Fresamento',
    'Furação e Rosqueamento',
    'Mandrilamento e Outros'
  ];

  ferramentas: Ferramenta[] = [
    {
      id: 1,
      nome: 'Suporte de Torneamento Externo',
      codigoIso: 'PCLNR 2525M12',
      categoria: 'Torneamento',
      aplicacao: 'Desbaste pesado e médio em tornos CNC para ligas metálicas.',
      fixacao: 'Grampo Superior e Parafuso M5',
      chaveTorx: 'Chave Torx T20',
      torque: '3.2 Nm',
      dicaTecnica: 'Inspecione a calça de apoio (seat) a cada troca de aresta para evitar folgas.',
      icone: '⚙️'
    },
    {
      id: 2,
      nome: 'Barra de Mandrilar Interna',
      codigoIso: 'S20R-SCLCR 09',
      categoria: 'Mandrilamento e Outros',
      aplicacao: 'Usinagem interna, acabamento e contorno de furos profundos.',
      fixacao: 'Parafuso Torx M2.5',
      chaveTorx: 'Chave Torx T08',
      torque: '1.2 Nm',
      dicaTecnica: 'Mantenha o balanço da barra abaixo de 4x o diâmetro para eliminar vibração.',
      icone: '🕳️'
    },
    {
      id: 3,
      nome: 'Cabeçote de Fresar 90° (Esquadrejar)',
      codigoIso: 'APKT 1604 / Face Mill',
      categoria: 'Fresamento',
      aplicacao: 'Esquadrejamento de cantos retos, rebaixos e canais laterais.',
      fixacao: 'Parafuso Torx M4',
      chaveTorx: 'Chave Torx T15',
      torque: '3.0 Nm',
      dicaTecnica: 'Aplique graxa anti-engripante no parafuso do inserto periodicamente.',
      icone: '🪓'
    },
    {
      id: 4,
      nome: 'Cabeçote de Facear 45°',
      codigoIso: 'SEKT 1204 / Octogonal',
      categoria: 'Fresamento',
      aplicacao: 'Faceamento de superfícies com alta taxa de remoção de cavacos.',
      fixacao: 'Parafuso Torx M4.5',
      chaveTorx: 'Chave Torx T20',
      torque: '3.5 Nm',
      dicaTecnica: 'O ângulo de 45° direciona a força para o fuso, aumentando a estabilidade.',
      icone: '📐'
    },
    {
      id: 5,
      nome: 'Suporte para Sangrar e Cortar (Bedame)',
      codigoIso: 'MGEHR 2020-3',
      categoria: 'Torneamento',
      aplicacao: 'Corte/corgamento de peças, canais de vedação e perfilamento.',
      fixacao: 'Parafuso Allen M6 de Aperto',
      chaveTorx: 'Chave Allen 5mm',
      torque: '5.0 Nm',
      dicaTecnica: 'Certifique-se de que a lâmina está perfeitamente alinhada com o centro da peça.',
      icone: '✂️'
    },
    {
      id: 6,
      nome: 'Suporte de Rosqueamento Externo',
      codigoIso: 'SER 2525 M16',
      categoria: 'Torneamento',
      aplicacao: 'Usinagem de roscas externas (Métricas, UN, NPT, BSP).',
      fixacao: 'Parafuso Torx M3.5',
      chaveTorx: 'Chave Torx T15',
      torque: '2.5 Nm',
      dicaTecnica: 'Utilize avanço incremental flanqueado para prolongar a vida do inserto.',
      icone: '🔩'
    },
    {
      id: 7,
      nome: 'Broca de Metal Duro Integral',
      codigoIso: 'DIN 6537K (3D/5D)',
      categoria: 'Furação e Rosqueamento',
      aplicacao: 'Furação contínua de alta precisão com refrigeração interna.',
      fixacao: 'Mandril Hidráulico / Porta-Pinça ER',
      chaveTorx: 'Aperto do Porta-Pinça',
      torque: '15.0 Nm',
      dicaTecnica: 'Não puncione previamente; o afiamento da ponta centraliza a furação.',
      icone: '🎯'
    },
    {
      id: 8,
      nome: 'Broca com Inserto Intercambiável (Broca U)',
      codigoIso: 'WDX / C25-3D',
      categoria: 'Furação e Rosqueamento',
      aplicacao: 'Furação rápida de grande diâmetro em materiais diversos.',
      fixacao: 'Parafuso Torx M2.5 / M3',
      chaveTorx: 'Chave Torx T08 / T10',
      torque: '2.0 Nm',
      dicaTecnica: 'Pressão alta do fluido de refrigeração é vital para ejetar os cavacos.',
      icone: '🌀'
    },
    {
      id: 9,
      nome: 'Fresa de Topo Metal Duro (4 Cortes)',
      codigoIso: 'VHM AlTiN (Z4)',
      categoria: 'Fresamento',
      aplicacao: 'Fresamento lateral, contornos 2D/3D e acabamento fino.',
      fixacao: 'Porta-Pinça ER25 / Weldon',
      chaveTorx: 'Porca de Aperto ER',
      torque: '12.0 Nm',
      dicaTecnica: 'Dê preferência ao fresamento concordante (Climb) para melhor acabamento.',
      icone: '💎'
    },
    {
      id: 10,
      nome: 'Macho de Roscar Helicoidal',
      codigoIso: 'DIN 371 / 376 HSS-E',
      categoria: 'Furação e Rosqueamento',
      aplicacao: 'Rosqueamento interno de furos cegos com saída superior de cavaco.',
      fixacao: 'Porta-Macho com Embreagem / ER-GB',
      chaveTorx: 'Regulagem na Embreagem',
      torque: 'Ajuste conforme diâmetro',
      dicaTecnica: 'Sempre utilize fluido ou pasta lubrificante específica de corte.',
      icone: '🛠️'
    },
    {
      id: 11,
      nome: 'Alargador Mão / Máquina H7',
      codigoIso: 'DIN 208 H7 Metal Duro',
      categoria: 'Mandrilamento e Outros',
      aplicacao: 'Calibração final e superacabamento de furos (tolerância H7).',
      fixacao: 'Mandril Flutuante / Porta-Pinça',
      chaveTorx: 'Fixação por Compressão',
      torque: '10.0 Nm',
      dicaTecnica: 'Trabalhe com baixa velocidade de corte (Vc) e avanço por rotação elevado.',
      icone: '📏'
    },
    {
      id: 12,
      nome: 'Fresa Copiadora (Inserto Redondo)',
      codigoIso: 'RPMT / RPMW 1204',
      categoria: 'Fresamento',
      aplicacao: 'Usinagem de moldes, matrizes e superfícies esculpidas 3D.',
      fixacao: 'Parafuso Torx M4',
      chaveTorx: 'Chave Torx T15',
      torque: '3.0 Nm',
      dicaTecnica: 'Rotacione o inserto para aproveitar todas as 8 arestas cónicas.',
      icone: '🔄'
    }
  ];

  get ferramentasFiltradas(): Ferramenta[] {
    return this.ferramentas.filter(f => {
      const bateCategoria = this.categoriaSelecionada === 'Todas' || f.categoria === this.categoriaSelecionada;
      const termo = this.termoBusca.toLowerCase().trim();
      const bateTexto = !termo ||
        f.nome.toLowerCase().includes(termo) ||
        f.codigoIso.toLowerCase().includes(termo) ||
        f.aplicacao.toLowerCase().includes(termo) ||
        f.fixacao.toLowerCase().includes(termo);

      return bateCategoria && bateTexto;
    });
  }

  filtrarPorCategoria(cat: string): void {
    this.categoriaSelecionada = cat;
  }
}

export { GuiadeferramentasComponent as Guiadeferramentas };