import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MiServicioService } from 'src/app/miServicio/mi-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-autores',
  templateUrl: './alta-autores.component.html',
  styleUrls: ['./alta-autores.component.css']
})
export class AltaAutoresComponent {
  /**
   *
   */
  constructor(private servicio: MiServicioService, private router: Router) {

  }

  @ViewChild("caja1")
  private refCaja1!: ElementRef;
  @ViewChild("caja2")
  private refCaja2!: ElementRef;
  @ViewChild("caja3")
  private refCaja3!: ElementRef;
  @ViewChild("caja4")
  private refCaja4!: ElementRef;

  guardarDatos(): void {
    const nombre = this.refCaja1.nativeElement.value;
    const nacionalidad = this.refCaja2.nativeElement.value;
    const fechaNacimiento = this.refCaja3.nativeElement.value;
    const genero = this.refCaja4.nativeElement.value;
    // Se invoca al metodo que esta en el servicio
    this.servicio.altaAutores(nombre, nacionalidad, fechaNacimiento, genero)
    Swal.fire({
      title: '¿Quieres guardar los cambios?',
      confirmButtonText: 'Guardar cambios',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListaAutores'])
      }
    })
  }
}
