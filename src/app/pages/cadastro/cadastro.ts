import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Colaborador {
  nome: string;
  email: string;
  cargo: string;
  setor: string;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  private router = inject(Router);

  cargos: string[] = [
    'Coordenador do SENAI',
    'Professor / Instrutor',
    'Aluno / Estudante',
    'Operador de Torno Convencional',
    'Operador de Fresadora Convencional',
    'Operador de Torno CNC',
    'Operador de Centro de Usinagem CNC',
    'Torneiro Mecânico / Fresador',
    'Programador CNC',
    'Programador e Projetista CAD/CAM',
    'Preparador de Máquinas (Setup)',
    'Ferramenteiro / Ajustador Mecânico',
    'Inspetor de Controle de Qualidade',
    'Metrologista',
    'Engenheiro de Processos / Fabricação',
    'Engenheiro Mecânico',
    'Técnico de Manutenção Mecânica',
    'Supervisor de Produção',
    'Gerente Industrial'
  ];

  setores: string[] = [
    'SENAI / Educação Profissional',
    'Tornearia Convencional',
    'Fresamento Convencional',
    'Usinagem CNC',
    'Ferramentaria e Ajustagem',
    'Controle de Qualidade / Metrologia',
    'Engenharia de Processos e CAM',
    'Manutenção Mecânica e Elétrica',
    'PCP (Planejamento e Controle)'
  ];

  colaboradores: Colaborador[] = [
    { nome: 'Lucas Antunes', email: 'lucas.antunes@senai.br', cargo: 'Coordenador do SENAI', setor: 'SENAI / Educação Profissional' },
    { nome: 'Paulo Ricardo', email: 'paulo.ricardo@senai.br', cargo: 'Professor / Instrutor', setor: 'SENAI / Educação Profissional' },
    { nome: 'Yasmin', email: 'yasmin@aluno.senai.br', cargo: 'Aluno / Estudante', setor: 'SENAI / Educação Profissional' },
    { nome: 'Michele', email: 'michele@aluno.senai.br', cargo: 'Aluno / Estudante', setor: 'SENAI / Educação Profissional' },
    { nome: 'Pedro', email: 'pedro@aluno.senai.br', cargo: 'Aluno / Estudante', setor: 'SENAI / Educação Profissional' },
    { nome: 'Adriel', email: 'adriel@aluno.senai.br', cargo: 'Aluno / Estudante', setor: 'SENAI / Educação Profissional' }
  ];

  novoNome = '';
  novoEmail = '';
  novoCargo = this.cargos[2];
  novoSetor = this.setores[0];

  salvarCadastro() {
    if (!this.novoNome || !this.novoEmail) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    this.colaboradores.push({
      nome: this.novoNome,
      email: this.novoEmail,
      cargo: this.novoCargo,
      setor: this.novoSetor
    });

    this.novoNome = '';
    this.novoEmail = '';

    // Redireciona para a página de início
    this.router.navigate(['/home']);
  }
}