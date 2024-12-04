import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dados-representante',
  standalone: true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './dados-representante.component.html',
  styleUrl: './dados-representante.component.css'
})
export class DadosRepresentanteComponent {
  RepresentanteForm: FormGroup;
  showAlert = false;

  constructor(private fb: FormBuilder) {
    this.RepresentanteForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Usando array para validadores
      CPF: ['', [Validators.required, Validators.minLength(11)]],  // Usando array para validadores
      nome: ['', [Validators.required, Validators.minLength(3)]]  // Usando array para validadores
    });
  }

  onSubmit(): void {
    if (this.RepresentanteForm.valid) {
      console.log('Formulário válido:', this.RepresentanteForm.value);
      this.showAlert = true;
      setTimeout(() => (this.showAlert = false), 4000);
      this.RepresentanteForm.reset();
    } else {
      console.log('Formulário inválido');
    }
  }
}



 