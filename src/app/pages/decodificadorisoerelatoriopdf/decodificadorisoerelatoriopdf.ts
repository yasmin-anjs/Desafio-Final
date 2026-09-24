import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface DecodificacaoInserto {
  formato: { letra: string; desc: string };
  folga: { letra: string; desc: string };
  tolerancia: { letra: string; desc: string };
  fixacao: { letra: string; desc: string };
  aresta: { num: string; desc: string };
  espessura: { num: string; desc: string };
  raio: { num: string; desc: string };
}

@Component({
  selector: 'app-decodificadorisoerelatoriopdf',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './decodificadorisoerelatoriopdf.html',
  styleUrl: './decodificadorisoerelatoriopdf.css'
})
export class DecodificadorisoerelatoriopdfComponent implements OnInit {
  codigoISO: string = 'CNMG 120408';
  operacaoDestino: string = 'Torneamento Externo Geral / Desbaste';
  fabricanteClasse: string = 'Classe Metal Duro P25 com Cobertura TiAlN';
  responsavel: string = 'Eng. de Usinagem';
  dataEmissao: string = new Date().toLocaleDateString('pt-BR');

  resultado: DecodificacaoInserto | null = null;

  ngOnInit(): void {
    this.decodificarISO();
  }

  selecionarPreset(codigo: string): void {
    this.codigoISO = codigo;
    this.decodificarISO();
  }

  decodificarISO(): void {
    const raw = this.codigoISO.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

    if (raw.length < 7) {
      return;
    }

    const cFormato = raw.charAt(0);
    const cFolga = raw.charAt(1);
    const cTolerancia = raw.charAt(2);
    const cFixacao = raw.charAt(3);
    const nAresta = raw.substring(4, 6);
    const nEspessura = raw.substring(6, 8);
    const nRaio = raw.length >= 10 ? raw.substring(8, 10) : raw.substring(8);

    // Mapeamento Formato (1ª Letra)
    const formatosMap: { [key: string]: string } = {
      C: 'Rómbico 80° (Alta Resistência)',
      D: 'Rómbico 55° (Cópia / Perfilamento)',
      S: 'Quadrado 90° (Desbaste Pesado)',
      T: 'Triangular 60° (3 Arestas)',
      W: 'Trigonal / Vértice 80° (6 Arestas)',
      V: 'Rómbico 35° (Cópia Profunda)',
      R: 'Redondo (Superfícies Complexas)',
      K: 'Paralelogramo 55°'
    };

    // Mapeamento Folga (2ª Letra)
    const folgasMap: { [key: string]: string } = {
      N: '0° (Negativo - Dupla Face)',
      C: '7° (Positivo)',
      P: '11° (Positivo)',
      B: '5° (Positivo)',
      D: '15° (Positivo)',
      E: '20° (Positivo)'
    };

    // Mapeamento Tolerância (3ª Letra)
    const toleranciasMap: { [key: string]: string } = {
      M: 'Classe M (Uso Geral / Precisão Média)',
      G: 'Classe G (Retificado / Alta Precisão)',
      E: 'Classe E (Muitíssimo Preciso)',
      U: 'Classe U (Bruto para Forjados)'
    };

    // Mapeamento Fixação (4ª Letra)
    const fixacaoMap: { [key: string]: string } = {
      G: 'Furo Cilindrico + Quebra-Cavaco Duplo',
      M: 'Furo com Escareado + Quebra-Cavaco',
      A: 'Furo Cilíndrico sem Quebra-Cavaco',
      W: 'Furo Escareado sem Quebra-Cavaco',
      N: 'Sem Furo / Sem Quebra-Cavaco'
    };

    // Mapeamento Espessura (6ª e 7ª posição)
    const espessurasMap: { [key: string]: string } = {
      '02': '2.38 mm',
      '03': '3.18 mm',
      '04': '4.76 mm',
      '05': '5.56 mm',
      '06': '6.35 mm',
      '09': '9.52 mm'
    };

    // Mapeamento Raio (8ª e 9ª posição)
    const raiosMap: { [key: string]: string } = {
      '02': '0.2 mm (Acabamento Fino)',
      '04': '0.4 mm (Acabamento / Geral)',
      '08': '0.8 mm (Desbaste Médio)',
      '12': '1.2 mm (Desbaste Pesado)',
      '16': '1.6 mm (Super Desbaste)',
      '00': '0.0 mm (Ponta Viva)'
    };

    this.resultado = {
      formato: { letra: cFormato, desc: formatosMap[cFormato] || 'Geometria Especial' },
      folga: { letra: cFolga, desc: folgasMap[cFolga] || 'Ângulo Específico' },
      tolerancia: { letra: cTolerancia, desc: toleranciasMap[cTolerancia] || 'Tolerância Padrão' },
      fixacao: { letra: cFixacao, desc: fixacaoMap[cFixacao] || 'Sistema do Fabricante' },
      aresta: { num: nAresta, desc: `Aresta de ${parseInt(nAresta, 10)} mm` },
      espessura: { num: nEspessura, desc: espessurasMap[nEspessura] || `${nEspessura} mm` },
      raio: { num: nRaio, desc: raiosMap[nRaio] || `${nRaio} mm` }
    };
  }

  imprimirRelatorio(): void {
    window.print();
  }
}

// Exportação secundária para garantir compatibilidade com o app.routes.ts
export { DecodificadorisoerelatoriopdfComponent as Decodificadorisoerelatoriopdf };