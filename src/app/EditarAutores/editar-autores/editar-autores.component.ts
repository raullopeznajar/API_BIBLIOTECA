import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiServicioService } from 'src/app/miServicio/mi-servicio.service';

@Component({
  selector: 'app-editar-autores',
  templateUrl: './editar-autores.component.html',
  styleUrls: ['./editar-autores.component.css']
})
export class EditarAutoresComponent {
  @ViewChild("caja1")
  private refCaja1!:ElementRef

  @ViewChild("caja2")
  private refCaja2!:ElementRef

  @ViewChild("caja3")
  private refCaja3!:ElementRef

  @ViewChild("caja4")
  private refCaja4!:ElementRef

  private sub:any;
  private id: number = 0;

  /**
   *
   */
  constructor(private route: ActivatedRoute, private servicio: MiServicioService) {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      this.servicio.ObtenerAutoresById(this.id);
    })
  }
  get datosAutor(){
    return this.servicio.Autor;
  }
  GuardarDatos(): void{
    const nombre = this.refCaja1.nativeElement.value;
    const nacionalidad = this.refCaja2.nativeElement.value;
    const fechaNacimiento = this.refCaja3.nativeElement.value;
    const genero = this.refCaja4.nativeElement.value;

    console.log(nombre);
    console.log(nacionalidad);
    console.log(fechaNacimiento);
    console.log(genero);

    this.servicio.edicionAutores(this.id, nombre, nacionalidad, fechaNacimiento, genero);
  }
}
