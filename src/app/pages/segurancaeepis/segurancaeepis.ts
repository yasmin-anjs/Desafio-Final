import { Component } from '@angular/core';

interface Epi {
  nome: string;
  obrigatorio: string;
  riscoEvitado: string;
  norma: string;
}

@Component({
  selector: 'app-segurancaeepis',
  standalone: true,
  imports: [],
  templateUrl: './segurancaeepis.html',
  styleUrl: './segurancaeepis.css'
})
export class Segurancaeepis {
  epis: Epi[] = [
    { nome: 'Óculos de Proteção com Proteção Lateral', obrigatorio: '100% do tempo na oficina', riscoEvitado: 'Projeção de cavacos, cavacos quentes e respingos de fluido', norma: 'NR-6 / ANSI Z87.1' },
    { nome: 'Protetor Auditivo (Concha / Plug)', obrigatorio: 'Áreas operacionais', riscoEvitado: 'Perda auditiva induzida por ruído contínuo de corte', norma: 'NR-6 / NR-15' },
    { nome: 'Calçado de Segurança com Biqueira', obrigatorio: 'Uso obrigatório', riscoEvitado: 'Queda de peças pesadas, ferramentas ou perfuração por cavacos', norma: 'NR-6 / ISO 20345' },
    { nome: 'Creme Protetor de Pele', obrigatorio: 'Antes de manusear óleos', riscoEvitado: 'Dermatite por contacto frequente com óleos solúveis', norma: 'NR-6' }
  ];
}