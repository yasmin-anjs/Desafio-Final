import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TabelaMaterial {
  material: string;
  categoria: string;
  codigoIso: string;
  vcDureza: string;
  avancoRecomendado: string;
  corTag: string;
}

@Component({
  selector: 'app-tabelasdeconsulta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tabelasdeconsulta.html',
  styleUrl: './tabelasdeconsulta.css'
})
export class Tabelasdeconsulta {
  filtro: string = '';
  categoriaFiltro: string = 'todas';

  materiais: TabelaMaterial[] = [
    { material: 'Aço ABNT 1020', categoria: 'Aço Carbono', codigoIso: 'P', vcDureza: '220 - 280 m/min', avancoRecomendado: '0.15 - 0.35 mm/v', corTag: '#ef4444' },
    { material: 'Aço ABNT 1045', categoria: 'Aço Carbono', codigoIso: 'P', vcDureza: '180 - 240 m/min', avancoRecomendado: '0.12 - 0.30 mm/v', corTag: '#ef4444' },
    { material: 'Aço Liga 4140 (Beneficiado)', categoria: 'Aço Liga', codigoIso: 'P', vcDureza: '140 - 200 m/min', avancoRecomendado: '0.10 - 0.25 mm/v', corTag: '#ef4444' },
    { material: 'Aço Inox AISI 304', categoria: 'Inoxidável Austenítico', codigoIso: 'M', vcDureza: '120 - 180 m/min', avancoRecomendado: '0.10 - 0.22 mm/v', corTag: '#f59e0b' },
    { material: 'Aço Inox AISI 316L', categoria: 'Inoxidável Austenítico', codigoIso: 'M', vcDureza: '110 - 160 m/min', avancoRecomendado: '0.08 - 0.20 mm/v', corTag: '#f59e0b' },
    { material: 'Ferro Fundido GG25 (Cinzento)', categoria: 'Ferro Fundido', codigoIso: 'K', vcDureza: '150 - 220 m/min', avancoRecomendado: '0.15 - 0.40 mm/v', corTag: '#ef4444' },
    { material: 'Ferro Fundido GGG40 (Nodular)', categoria: 'Ferro Fundido', codigoIso: 'K', vcDureza: '130 - 190 m/min', avancoRecomendado: '0.12 - 0.35 mm/v', corTag: '#ef4444' },
    { material: 'Alumínio 6061-T6', categoria: 'Não-Ferroso', codigoIso: 'N', vcDureza: '500 - 1200 m/min', avancoRecomendado: '0.10 - 0.50 mm/d', corTag: '#10b981' },
    { material: 'Latão CLA 360', categoria: 'Não-Ferroso', codigoIso: 'N', vcDureza: '300 - 600 m/min', avancoRecomendado: '0.15 - 0.40 mm/v', corTag: '#10b981' },
    { material: 'Inconel 718', categoria: 'Superliga Resistente', codigoIso: 'S', vcDureza: '30 - 60 m/min', avancoRecomendado: '0.08 - 0.15 mm/d', corTag: '#8b5cf6' },
    { material: 'Titanio Grado 5 (Ti6Al4V)', categoria: 'Liga de Titânio', codigoIso: 'S', vcDureza: '40 - 80 m/min', avancoRecomendado: '0.08 - 0.18 mm/v', corTag: '#8b5cf6' },
    { material: 'Aço Temperado (55-60 HRC)', categoria: 'Aço Duro', codigoIso: 'H', vcDureza: '60 - 100 m/min', avancoRecomendado: '0.05 - 0.12 mm/v', corTag: '#64748b' }
  ];

  get materiaisFiltrados(): TabelaMaterial[] {
    return this.materiais.filter(m => {
      const bateTexto = m.material.toLowerCase().includes(this.filtro.toLowerCase()) ||
                        m.categoria.toLowerCase().includes(this.filtro.toLowerCase()) ||
                        m.codigoIso.toLowerCase().includes(this.filtro.toLowerCase());
      
      const bateCategoria = this.categoriaFiltro === 'todas' || m.codigoIso === this.categoriaFiltro;
      
      return bateTexto && bateCategoria;
    });
  }
}