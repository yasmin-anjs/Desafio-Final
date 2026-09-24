import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-guiadousuario',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './guiadousuario.html',
  styleUrls: ['./guiadousuario.css']
})
export class GuiadousuarioComponent {}

export { GuiadousuarioComponent as Guiadousuario };