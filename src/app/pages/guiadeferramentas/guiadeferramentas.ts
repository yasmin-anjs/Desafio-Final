import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Ferramenta {
  tipo: string;
  aplicacao: string;
  fixacao: string;
  torqueRecomendado: string;
}

@Component({
  selector: 'app-guiadeferramentas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guiadeferramentas.html',
  styleUrl: './guiadeferramentas.css'
})
export class Guiadeferramentas {
  categoriaSelecionada: string = 'todas';

  ferramentas: Ferramenta[] = [
    { tipo: 'Suporte de Torneamento (PCLNR)', aplicacao: 'Desbaste e acabamento externo em tornos CNC', fixacao: 'Grampo / Parafuso Torx M4', torqueRecomendado: '3.2 Nm' },
    { tipo: 'Barra de Mandrilar (S20R-SCLCR)', aplicacao: 'Usinagem e acabamento interno de furos', fixacao: 'Parafuso Torx T15', torqueRecomendado: '2.1 Nm' },
    { tipo: 'Cabeçote de Fresar 90° (APKT 1604)', aplicacao: 'Esquadrejamento e faceamento de superfícies', fixacao: 'Parafuso Torx M3.5', torqueRecomendado: '3.0 Nm' },
    { tipo: 'Broca de Metal Duro Integral', aplicacao: 'Furação de alta precisão (até 8xD)', fixacao: 'Mandril Hidráulico / Haste Weldon', torqueRecomendado: '15.0 Nm' }
  ];

  get ferramentasFiltradas(): Ferramenta[] {
    if (this.categoriaSelecionada === 'todas') {
      return this.ferramentas;
    }
    return this.ferramentas.filter(f => f.tipo.toLowerCase().includes(this.categoriaSelecionada.toLowerCase()));
  }
}