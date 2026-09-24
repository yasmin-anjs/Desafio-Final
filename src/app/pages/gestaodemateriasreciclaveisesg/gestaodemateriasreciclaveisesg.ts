import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Residuo {
  tipo: string;
  classe: string;
  destinacao: string;
  valorEstimadoKg: string;
}

@Component({
  selector: 'app-gestaodemateriasreciclaveisesg',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gestaodemateriasreciclaveisesg.html',
  styleUrl: './gestaodemateriasreciclaveisesg.css'
})
export class Gestaodemateriasreciclaveisesg {
  pesoAco: number = 150;
  pesoAluminio: number = 45;
  pesoOleo: number = 80;

  residuos: Residuo[] = [
    { tipo: 'Cavacos de Aço Carbono / Liga', classe: 'Classe II A - Não Inerte', destinacao: 'Reciclagem Siderúrgica', valorEstimadoKg: 'R$ 1,20 / kg' },
    { tipo: 'Cavacos de Alumínio', classe: 'Classe II A - Não Inerte', destinacao: 'Fundição e Fundição de Lingotes', valorEstimadoKg: 'R$ 6,50 / kg' },
    { tipo: 'Óleo Solúvel Usado e Refrigeração', classe: 'Classe I - Perigoso', destinacao: 'Rerrefino por empresa licenciada', valorEstimadoKg: 'Custo de Recolha' },
    { tipo: 'Pastilhas de Metal Duro Desgastadas', classe: 'Especial (Tungsténio/Cobalto)', destinacao: 'Recuperação de Metal Nobre', valorEstimadoKg: 'R$ 85,00 / kg' }
  ];

  get totalEconomiaEstimada(): number {
    return (this.pesoAco * 1.20) + (this.pesoAluminio * 6.50);
  }
}