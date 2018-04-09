import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-ejercicio-reactive-form',
  templateUrl: './ejercicio-reactive-form.component.html',
  styleUrls: ['./ejercicio-reactive-form.component.css']
})
export class EjercicioReactiveFormComponent implements OnInit {

  title: string;
  description: string;
  areas: Array<string>;
  servicios: Array<string>;
  prioridades: Array<string>;
  persona: Persona;
  personaForm: FormGroup;

  constructor() {
    this.title = "Ejercicio: Crear formulario reactivo";
    this.description = "Crear un formulario reactivo con las siguientes características.";
    this.areas = ['Dpto. Comercial', 'Dpto. RRHH', 'Dpto. Finanzas', 'Dpto. Compras', 'Dirección'];
    this.servicios = ['Alta usuario', 'Baja usuario', 'Actualización de datos'];
    this.prioridades = ['Alta', 'Baja', 'Media'];
    this.persona = new Persona('', '', '', '', '', '', false, '');
  }

  ngOnInit() {
    // Instancia un nuevo formulario
    this.personaForm = new FormGroup({

      // Crea los elementos del formulario (form controls)
      nombre: new FormControl('',
        [Validators.required
          , Validators.minLength(3)
          , Validators.maxLength(255)]),
      apellidos: new FormControl('',
        [Validators.required
          , Validators.minLength(3)
          , Validators.maxLength(255)]),
      email: new FormControl('', [Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
      this.forbiddenEmailValidator
      ]),
      age: new FormControl('', [Validators.pattern('[0-9]+')]),
      area: new FormControl('', [Validators.required]),
      servicio: new FormControl('', [Validators.required]),
      prioridad: new FormControl('', [Validators.required]),
      acuseDeRecibo: new FormControl(),
      descripcion: new FormControl()
    });

    // Actualiza el modelo cuando se producen cambios en el formulario.
    // Con this.personaForm.controls['nombre_form_control'] podemos
    // suscribirnos a los cambios de algún campo específico
    this.personaForm.valueChanges.subscribe(value => {

      // Si los datos del formulario son válidos
      if (!this.personaForm.valid) {
        return;
      }

      console.log(value);
      this.persona = new Persona(
        value.nombre,
        value.apellidos,
        value.email,
        value.area,
        value.servicio,
        value.prioridad,
        value.acuseDeRecibo,
        value.descripcion
      );
    }
  );
  }

  // Validación personalizada para el email
  forbiddenEmailValidator(email: FormControl): { [s: string]: boolean } | null {

    // Si se ha introducido un email prohibido
    if (email.value.endsWith('@gmail.com')) {
      return {
        'invalid': true
      }
    }
    // En caso contrario
    return null;
  }

}
