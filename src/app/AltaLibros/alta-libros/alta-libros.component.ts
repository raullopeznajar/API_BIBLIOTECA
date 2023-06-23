import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MiServicioService } from 'src/app/miServicio/mi-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-libros',
  templateUrl: './alta-libros.component.html',
  styleUrls: ['./alta-libros.component.css']
})
export class AltaLibrosComponent {
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
  @ViewChild("caja5")
  private refCaja5!: ElementRef;

  guardarDatos(): void {
    const titulo = this.refCaja1.nativeElement.value;
    const anioPublicacion = this.refCaja2.nativeElement.value;
    const genero = this.refCaja3.nativeElement.value;
    const status = this.refCaja4.nativeElement.value;
    const autorId = this.refCaja5.nativeElement.value;
    // Se invoca al metodo que esta en el servicio
    this.servicio.altaLibros(titulo, anioPublicacion, genero, status, autorId)
    Swal.fire({
      title: '¿Quieres guardar los cambios?',
      confirmButtonText: 'Guardar cambios',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListaLibros'])
      }
    })
  }
}
