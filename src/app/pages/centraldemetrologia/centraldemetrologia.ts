import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-centraldemetrologia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './centraldemetrologia.html',
  styleUrl: './centraldemetrologia.css'
})
export class Centraldemetrologia {
  // --- PARÂMETROS DO PAQUÍMETRO DIGITAL ---
  paq_valor: number = 25.40;
  paq_unidade: 'mm' | 'in' = 'mm';

  // --- PARÂMETROS DE TOLERÂNCIA DIMENSIONAL (ISO 286) ---
  private _iso_nominal: number = 50;
  private _iso_classe: string = 'H7';

  get iso_nominal(): number {
    return this._iso_nominal;
  }
  set iso_nominal(val: number) {
    this._iso_nominal = val;
    this.calcularTolerancia();
  }

  get iso_classe(): string {
    return this._iso_classe;
  }
  set iso_classe(val: string) {
    this._iso_classe = val;
    this.calcularTolerancia();
  }

  iso_afast_sup: number = 0.025; // Afastamento superior em mm
  iso_afast_inf: number = 0.000; // Afastamento inferior em mm

  constructor() {
    this.calcularTolerancia();
  }

  /**
   * Recalcula os afastamentos (em mm) com base na dimensão nominal e na classe ISO selecionada.
   */
  calcularTolerancia(): void {
    const d = this._iso_nominal;
    if (!d || d <= 0) {
      this.iso_afast_sup = 0;
      this.iso_afast_inf = 0;
      return;
    }

    // Determina a tolerância fundamental (IT) em mm conforme a faixa de diâmetro
    let it = 0.025;
    if (this._iso_classe.includes('6')) {
      it = d <= 3 ? 0.006 : d <= 6 ? 0.008 : d <= 10 ? 0.009 : d <= 18 ? 0.011 : d <= 30 ? 0.013 : d <= 50 ? 0.016 : d <= 80 ? 0.019 : d <= 120 ? 0.022 : 0.025;
    } else if (this._iso_classe.includes('7')) {
      it = d <= 3 ? 0.010 : d <= 6 ? 0.012 : d <= 10 ? 0.015 : d <= 18 ? 0.018 : d <= 30 ? 0.021 : d <= 50 ? 0.025 : d <= 80 ? 0.030 : d <= 120 ? 0.035 : 0.040;
    } else if (this._iso_classe.includes('8')) {
      it = d <= 3 ? 0.014 : d <= 6 ? 0.018 : d <= 10 ? 0.022 : d <= 18 ? 0.027 : d <= 30 ? 0.033 : d <= 50 ? 0.039 : d <= 80 ? 0.046 : d <= 120 ? 0.054 : 0.063;
    }

    // Aplica a posição do campo de tolerância
    switch (this._iso_classe) {
      case 'H7':
      case 'H8':
        this.iso_afast_sup = it;
        this.iso_afast_inf = 0;
        break;
      case 'F8':
        const f_offset = d <= 10 ? 0.013 : d <= 18 ? 0.016 : d <= 30 ? 0.020 : d <= 50 ? 0.025 : d <= 80 ? 0.030 : 0.036;
        this.iso_afast_inf = f_offset;
        this.iso_afast_sup = f_offset + it;
        break;
      case 'JS7':
        this.iso_afast_sup = +(it / 2);
        this.iso_afast_inf = -(it / 2);
        break;
      case 'h6':
        this.iso_afast_sup = 0;
        this.iso_afast_inf = -it;
        break;
      case 'g6':
        const g_offset = d <= 10 ? -0.005 : d <= 18 ? -0.006 : d <= 30 ? -0.007 : d <= 50 ? -0.009 : d <= 80 ? -0.010 : -0.012;
        this.iso_afast_sup = g_offset;
        this.iso_afast_inf = g_offset - it;
        break;
      case 'k6':
        const k_offset = d <= 10 ? 0.001 : d <= 18 ? 0.001 : d <= 30 ? 0.002 : d <= 50 ? 0.002 : d <= 80 ? 0.003 : 0.003;
        this.iso_afast_inf = k_offset;
        this.iso_afast_sup = k_offset + it;
        break;
      case 'p6':
        const p_offset = d <= 10 ? 0.015 : d <= 18 ? 0.018 : d <= 30 ? 0.022 : d <= 50 ? 0.026 : d <= 80 ? 0.032 : 0.039;
        this.iso_afast_inf = p_offset;
        this.iso_afast_sup = p_offset + it;
        break;
      default:
        this.iso_afast_sup = it;
        this.iso_afast_inf = 0;
    }

    this.iso_afast_sup = Number(this.iso_afast_sup.toFixed(3));
    this.iso_afast_inf = Number(this.iso_afast_inf.toFixed(3));
  }
}

// Alias de exportação para suportar qualquer tipo de importação no projeto
export { Centraldemetrologia as CentraldemetrologiaComponent };