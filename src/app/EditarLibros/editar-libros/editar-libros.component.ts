import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiServicioService } from 'src/app/miServicio/mi-servicio.service';

@Component({
  selector: 'app-editar-libros',
  templateUrl: './editar-libros.component.html',
  styleUrls: ['./editar-libros.component.css']
})
export class EditarLibrosComponent {
  @ViewChild("caja1")
  private refCaja1!:ElementRef

  @ViewChild("caja2")
  private refCaja2!:ElementRef

  @ViewChild("caja3")
  private refCaja3!:ElementRef

  @ViewChild("caja4")
  private refCaja4!:ElementRef
  
  @ViewChild("caja5")
  private refCaja5!:ElementRef

  private sub:any;
  private id: number = 0;
  constructor(private route: ActivatedRoute, private servicio: MiServicioService) {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      this.servicio.ObtenerLibrosById(this.id);
    })
  }
  get datosLibro(){
    return this.servicio.Libro;
  }
  GuardarDatos(): void{
    const titulo = this.refCaja1.nativeElement.value;
    const anioPublicacion = this.refCaja2.nativeElement.value;
    const genero = this.refCaja3.nativeElement.value;
    const status = this.refCaja4.nativeElement.value;
    const autorId = this.refCaja5.nativeElement.value;

    console.log(titulo);
    console.log(anioPublicacion);
    console.log(genero);
    console.log(status);
    console.log(autorId);

    this.servicio.edicionLibros(this.id, titulo, anioPublicacion,genero, status, autorId);
  }
}
