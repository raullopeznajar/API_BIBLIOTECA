import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiServicioService } from 'src/app/miServicio/mi-servicio.service';

@Component({
  selector: 'app-detaller-libro',
  templateUrl: './detaller-libro.component.html',
  styleUrls: ['./detaller-libro.component.css']
})
export class DetallerLibroComponent {
  private sub: any;
  private id: number = 0;

  /**
   *
   */
  constructor(private route: ActivatedRoute, private servicio: MiServicioService) {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];  //(+) convierte string 'id' a un numero
      console.log(this.id);
      //En la app real muestra la acción de abrir los detalles aqui
      //invocamos el método del servicio:
      this.servicio.ObtenerLibrosById(this.id);
    });
  }
  get datosLibro(){
    return this.servicio.Libro;
  }
}
