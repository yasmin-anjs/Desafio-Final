import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cadastro } from './pages/cadastro/cadastro';
import { Calculadoradeparametrosdecorte } from './pages/calculadoradeparametrosdecorte/calculadoradeparametrosdecorte';
import { Centraldemetrologia } from './pages/centraldemetrologia/centraldemetrologia';
import { Criadorderoteiro } from './pages/criadorderoteiro/criadorderoteiro';
import { Decodificadorisoerelatoriopdf } from './pages/decodificadorisoerelatoriopdf/decodificadorisoerelatoriopdf';
import { Diagnosticosdedesgaste } from './pages/diagnosticosdedesgaste/diagnosticosdedesgaste';
import { Gestaodemateriasreciclaveisesg } from './pages/gestaodemateriasreciclaveisesg/gestaodemateriasreciclaveisesg';
import { Guiadeferramentas } from './pages/guiadeferramentas/guiadeferramentas';
import { Segurancaeepis } from './pages/segurancaeepis/segurancaeepis';
import { Tabelasdeconsulta } from './pages/tabelasdeconsulta/tabelasdeconsulta';
import { Desenhotecnico } from './pages/desenhotecnico/desenhotecnico';
import { Guiadousuario } from './pages/guiadousuario/guiadousuario';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'cadastro', component: Cadastro },
  { path: 'calculadoradeparametrosdecorte', component: Calculadoradeparametrosdecorte },
  { path: 'centraldemetrologia', component: Centraldemetrologia },
  { path: 'criadorderoteiro', component: Criadorderoteiro },
  { path: 'decodificadorisoerelatoriopdf', component: Decodificadorisoerelatoriopdf },
  { path: 'diagnosticosdedesgaste', component: Diagnosticosdedesgaste },
  { path: 'gestaodemateriasreciclaveisesg', component: Gestaodemateriasreciclaveisesg },
  { path: 'guiadeferramentas', component: Guiadeferramentas },
  { path: 'segurancaeepis', component: Segurancaeepis },
  { path: 'tabelasdeconsulta', component: Tabelasdeconsulta },
  { path: 'desenhotecnico', component: Desenhotecnico },
  { path: 'guiadousuario', component: Guiadousuario }
];