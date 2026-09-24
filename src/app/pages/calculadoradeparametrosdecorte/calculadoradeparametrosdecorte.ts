import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadoradeparametrosdecorte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadoradeparametrosdecorte.html',
  styleUrl: './calculadoradeparametrosdecorte.css'
})
export class Calculadoradeparametrosdecorte {
  abaAtiva: 'fresamento' | 'torneamento' | 'furacao' | 'rugosidade' | 'potencia' | 'tempo' = 'fresamento';

  // 1. Fresamento
  fres_vc = 180;
  fres_d = 50;
  fres_fz = 0.12;
  fres_z = 4;
  fres_ap = 2.0;
  fres_ae = 25.0;

  // 2. Torneamento
  torn_vc = 220;
  torn_d = 60;
  torn_fn = 0.20;
  torn_ap = 1.5;

  // 3. Furação
  fur_vc = 35;
  fur_d = 12;
  fur_fn = 0.15;
  fur_angulo = 118;

  // 4. Rugosidade
  rug_fn = 0.15;
  rug_r = 0.8;

  // 5. Potência e Força
  pot_materialSelect = 0;
  pot_materiais = [
    { nome: 'Aço Carbono Baixo (1020 / 1030)', kc: 1800 },
    { nome: 'Aço Carbono Médio/Alto (1045 / 4140)', kc: 2100 },
    { nome: 'Aço Inoxidável (304 / 316)', kc: 2400 },
    { nome: 'Ferro Fundido Cinzento', kc: 1300 },
    { nome: 'Alumínio e Ligas Leves', kc: 700 },
    { nome: 'Latão / Bronze', kc: 900 },
    { nome: 'Ligas de Titânio', kc: 2800 }
  ];
  pot_ap = 2.0;
  pot_fn = 0.20;
  pot_vc = 180;
  pot_rendimento = 85;

  // 6. Tempo de Usinagem
  tempo_comprimento = 150;
  tempo_extra = 5;
  tempo_vf = 300;
  tempo_passes = 1;

  // Presets Rápidos por Material
  presetsUsinagem = [
    { nome: 'Aço Carbono (1020/1045)', vc: 160, fz: 0.12, fn: 0.20 },
    { nome: 'Alumínio / Ligas Leves', vc: 380, fz: 0.18, fn: 0.30 },
    { nome: 'Aço Inoxidável (304/316)', vc: 90, fz: 0.08, fn: 0.12 },
    { nome: 'Ferro Fundido', vc: 130, fz: 0.14, fn: 0.22 },
    { nome: 'Titânio / Ligas Duras', vc: 50, fz: 0.06, fn: 0.08 }
  ];

  aplicarPreset(preset: { vc: number; fz: number; fn: number }) {
    if (this.abaAtiva === 'fresamento') {
      this.fres_vc = preset.vc;
      this.fres_fz = preset.fz;
    } else if (this.abaAtiva === 'torneamento') {
      this.torn_vc = preset.vc;
      this.torn_fn = preset.fn;
    } else if (this.abaAtiva === 'furacao') {
      this.fur_vc = Math.round(preset.vc * 0.35);
      this.fur_fn = Number((preset.fn * 0.7).toFixed(2));
    }
  }

  // --- CÁLCULOS FRESAMENTO ---
  get fres_rpm(): number {
    if (!this.fres_vc || !this.fres_d) return 0;
    return Math.round((this.fres_vc * 1000) / (Math.PI * this.fres_d));
  }

  get fres_vf(): number {
    return Math.round(this.fres_rpm * (this.fres_fz || 0) * (this.fres_z || 1));
  }

  get fres_fn(): number {
    return Number(((this.fres_fz || 0) * (this.fres_z || 1)).toFixed(2));
  }

  get fres_q(): number {
    return Number(((this.fres_ap * this.fres_ae * this.fres_vf) / 1000).toFixed(1));
  }

  // --- CÁLCULOS TORNEAMENTO ---
  get torn_rpm(): number {
    if (!this.torn_vc || !this.torn_d) return 0;
    return Math.round((this.torn_vc * 1000) / (Math.PI * this.torn_d));
  }

  get torn_vf(): number {
    return Math.round(this.torn_rpm * (this.torn_fn || 0));
  }

  get torn_q(): number {
    return Number((this.torn_vc * this.torn_ap * (this.torn_fn || 0)).toFixed(1));
  }

  // --- CÁLCULOS FURAÇÃO ---
  get fur_rpm(): number {
    if (!this.fur_vc || !this.fur_d) return 0;
    return Math.round((this.fur_vc * 1000) / (Math.PI * this.fur_d));
  }

  get fur_vf(): number {
    return Math.round(this.fur_rpm * (this.fur_fn || 0));
  }

  get fur_h(): number {
    if (!this.fur_d || !this.fur_angulo) return 0;
    const rad = (this.fur_angulo / 2) * (Math.PI / 180);
    return Number(((this.fur_d / 2) / Math.tan(rad)).toFixed(2));
  }

  get fur_q(): number {
    if (!this.fur_d || !this.fur_vf) return 0;
    const area = (Math.PI * Math.pow(this.fur_d, 2)) / 4;
    return Number(((area * this.fur_vf) / 1000).toFixed(1));
  }

  // --- CÁLCULOS RUGOSIDADE ---
  get rug_rt(): number {
    if (!this.rug_fn || !this.rug_r) return 0;
    return Number(((Math.pow(this.rug_fn, 2) / (8 * this.rug_r)) * 1000).toFixed(2));
  }

  get rug_ra(): number {
    if (!this.rug_fn || !this.rug_r) return 0;
    return Number(((Math.pow(this.rug_fn, 2) / (32 * this.rug_r)) * 1000).toFixed(2));
  }

  // --- CÁLCULOS POTÊNCIA & FORÇA ---
  get pot_kc(): number {
    return this.pot_materiais[this.pot_materialSelect]?.kc || 2000;
  }

  get pot_fc(): number {
    return Math.round(this.pot_ap * this.pot_fn * this.pot_kc);
  }

  get pot_fc_kgf(): number {
    return Math.round(this.pot_fc / 9.80665);
  }

  get pot_pc_kw(): number {
    return Number(((this.pot_fc * this.pot_vc) / 60000).toFixed(2));
  }

  get pot_pm_cv(): number {
    const eta = (this.pot_rendimento || 85) / 100;
    const kw_motor = this.pot_pc_kw / eta;
    return Number((kw_motor * 1.35962).toFixed(2));
  }

  // --- CÁLCULOS TEMPO DE USINAGEM ---
  get tempo_tc_min(): number {
    if (!this.tempo_vf || this.tempo_vf <= 0) return 0;
    const distTotal = (this.tempo_comprimento + (this.tempo_extra * 2)) * (this.tempo_passes || 1);
    return Number((distTotal / this.tempo_vf).toFixed(2));
  }

  get tempo_formatado(): string {
    const totalSeg = Math.round(this.tempo_tc_min * 60);
    const min = Math.floor(totalSeg / 60);
    const seg = totalSeg % 60;
    return `${min}m ${seg}s`;
  }
}