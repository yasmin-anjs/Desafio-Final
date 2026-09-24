import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Modulo {
  titulo: string;
  descricao: string;
  icone: string;
  rota: string;
  corTag: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  modulos: Modulo[] = [
    {
      titulo: 'Calculadora de Parâmetros',
      descricao: 'Calcule RPM, velocidade de corte (Vc), avanço por dente e tempo de usinagem.',
      icone: '🧮',
      rota: '/calculadoradeparametrosdecorte',
      corTag: '#0284c7'
    },
    {
      titulo: 'Central de Metrologia',
      descricao: 'Validação de tolerâncias ISO, ajustes h7/H7 e conversores de medida.',
      icone: '📐',
      rota: '/centraldemetrologia',
      corTag: '#0d9488'
    },
    {
      titulo: 'Criador de Roteiros',
      descricao: 'Gere planos de processo, sequências operacionais e fichas técnicas.',
      icone: '📋',
      rota: '/criadorderoteiro',
      corTag: '#6366f1'
    },
    {
      titulo: 'Diagnóstico de Desgaste (IA)',
      descricao: 'Identifique causas de desgastes em pastilhas e soluções recomendadas.',
      icone: '🤖',
      rota: '/diagnosticosdedesgaste',
      corTag: '#8b5cf6'
    },
    {
      titulo: 'Decodificador ISO & PDF',
      descricao: 'Interprete códigos de pastilhas/suportes ISO e exporte relatórios.',
      icone: '📄',
      rota: '/decodificadorisoerelatoriopdf',
      corTag: '#ec4899'
    },
    {
      titulo: 'Guia de Ferramentas & Torques',
      descricao: 'Consulte torques de aperto em Nm e sistemas de fixação por ferramenta.',
      icone: '🔧',
      rota: '/guiadeferramentas',
      corTag: '#eab308'
    },
    {
      titulo: 'Tabelas de Consulta',
      descricao: 'Aceda rapidamente a parâmetros típicos por grupo de material ISO (P, M, K, N, S, H).',
      icone: '📊',
      rota: '/tabelasdeconsulta',
      corTag: '#3b82f6'
    },
    {
      titulo: 'Segurança & EPIs',
      descricao: 'Normas de segurança, equipamentos obrigatórios e prevenção de riscos.',
      icone: '🛡️',
      rota: '/segurancaeepis',
      corTag: '#ef4444'
    },
    {
      titulo: 'Gestão ESG & Reciclagem',
      descricao: 'Calculadora de retorno económico de cavacos e descarte sustentável.',
      icone: '🌱',
      rota: '/gestaodemateriasreciclaveisesg',
      corTag: '#10b981'
    }
  ];
}