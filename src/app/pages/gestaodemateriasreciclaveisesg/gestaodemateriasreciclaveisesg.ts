import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface PontoColeta {
  id: number;
  empresa: string;
  regiao: string;
  telefone: string;
  whatsapp: string;
  residuosAceitos: string[];
  licencaAmbiental: string;
  endereco: string;
  destaque: boolean;
}

@Component({
  selector: 'app-gestaodemateriasreciclaveisesg',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestaodemateriasreciclaveisesg.html',
  styleUrls: ['./gestaodemateriasreciclaveisesg.css']
})
export class GestaodemateriasreciclaveisesgComponent {
  // Calculadora
  kgAco: number = 150;
  kgAluminio: number = 45;
  valorAcoKg: number = 1.20;
  valorAluminioKg: number = 6.50;

  // Pesquisa e Filtros
  termoBusca: string = '';
  filtroResiduo: string = 'Todos';

  tiposResiduosFiltro: string[] = [
    'Todos',
    'Aço / Ferrosos',
    'Alumínio / Ligas Leves',
    'Óleo & Líquidos (Classe I)',
    'Metal Duro / Metal Nobre'
  ];

  pontosColeta: PontoColeta[] = [
    {
      id: 1,
      empresa: 'EcoMetal Siderurgia & Reciclagem',
      regiao: 'Grande São Paulo / ABC',
      telefone: '(11) 4003-8921',
      whatsapp: '+55 11 98765-4321',
      residuosAceitos: ['Aço / Ferrosos', 'Alumínio / Ligas Leves'],
      licencaAmbiental: 'CADRI 2026-8891 / IBAMA',
      endereco: 'Av. Industrial, 1200 - Santo André / SP',
      destaque: true
    },
    {
      id: 2,
      empresa: 'Rerreflam - Soluções em Óleos e Solúveis',
      regiao: 'Região Metropolitana & Interior',
      telefone: '(11) 3301-5000',
      whatsapp: '+55 11 91234-5678',
      residuosAceitos: ['Óleo & Líquidos (Classe I)'],
      licencaAmbiental: 'CETESB / ANP 4022',
      endereco: 'Rod. dos Bandeirantes, Km 48 - Jundiaí / SP',
      destaque: true
    },
    {
      id: 3,
      empresa: 'TungstenCo Recovery & Ligas Nobres',
      regiao: 'Atendimento Nacional (Coleta com Frete)',
      telefone: '0800 770 9988',
      whatsapp: '+55 19 99887-1122',
      residuosAceitos: ['Metal Duro / Metal Nobre'],
      licencaAmbiental: 'IBAMA 782/2025',
      endereco: 'Rua do Metalúrgico, 450 - Campinas / SP',
      destaque: true
    },
    {
      id: 4,
      empresa: 'ReciclaAço & Ligas Leves Regional',
      regiao: 'Interior / Vale do Paraíba',
      telefone: '(12) 3944-1020',
      whatsapp: '+55 12 98112-3344',
      residuosAceitos: ['Aço / Ferrosos', 'Alumínio / Ligas Leves'],
      licencaAmbiental: 'Licença Municipal & Estadual',
      endereco: 'Distrito Industrial II - São José dos Campos / SP',
      destaque: false
    },
    {
      id: 5,
      empresa: 'BioQuímica Ambiental - Descarte Classe I',
      regiao: 'Atendimento Sudeste e Sul',
      telefone: '(41) 3220-9900',
      whatsapp: '+55 41 99110-8877',
      residuosAceitos: ['Óleo & Líquidos (Classe I)'],
      licencaAmbiental: 'IAP / IBAMA 1029',
      endereco: 'Rua das Indústrias, 80 - Curitiba / PR',
      destaque: false
    }
  ];

  get receitaEstimada(): number {
    return (this.kgAco * this.valorAcoKg) + (this.kgAluminio * this.valorAluminioKg);
  }

  get pontosFiltrados(): PontoColeta[] {
    return this.pontosColeta.filter(ponto => {
      const termo = this.termoBusca.toLowerCase().trim();
      const bateTexto = !termo ||
        ponto.empresa.toLowerCase().includes(termo) ||
        ponto.regiao.toLowerCase().includes(termo) ||
        ponto.endereco.toLowerCase().includes(termo) ||
        ponto.licencaAmbiental.toLowerCase().includes(termo);

      const bateFiltro = this.filtroResiduo === 'Todos' ||
        ponto.residuosAceitos.includes(this.filtroResiduo);

      return bateTexto && bateFiltro;
    });
  }

  filtrarPorResiduo(tipo: string): void {
    this.filtroResiduo = tipo;
  }

  getWhatsAppLink(num: string): string {
    if (!num) return '#';
    const cleanNum = num.replace(/\D/g, '');
    return `https://wa.me/${cleanNum}`;
  }
}

export { GestaodemateriasreciclaveisesgComponent as Gestaodemateriasreciclaveisesg };