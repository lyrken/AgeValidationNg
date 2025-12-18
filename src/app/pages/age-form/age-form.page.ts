import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-age-form',
  templateUrl: './age-form.page.html',
  styleUrls: ['./age-form.page.scss'],
  standalone: false
})
export class AgeFormPage {

  usuario = {
    nombre: '',
    apellido: '',
    fechaNacimiento: ''
  };

  edad: number | null = null;

  calcularEdad() {
    if (!this.usuario.fechaNacimiento) {
      this.edad = null;
      return;
    }

    const fn = new Date(this.usuario.fechaNacimiento);
    const hoy = new Date();

    let e = hoy.getFullYear() - fn.getFullYear();
    const m = hoy.getMonth() - fn.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < fn.getDate())) {
      e--;
    }

    this.edad = e;
  }

  onSubmit(formulario: NgForm) {
    if (formulario.invalid || (this.edad ?? 0) < 18) {
      console.log('Formulario inválido');
      return;
    }

    console.log('✅ FORMULARIO REGISTRADO');
    console.log('Nombre:', this.usuario.nombre);
    console.log('Apellido:', this.usuario.apellido);
    console.log('Fecha de nacimiento:', this.usuario.fechaNacimiento);
    console.log('Edad:', this.edad);
  }
}
