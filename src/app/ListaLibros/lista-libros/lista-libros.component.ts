import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MiServicioService } from 'src/app/miServicio/mi-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent {
  get resultados(){
    return this.servicio.ListaDeLibros;
  }
/**
 *
 */
constructor(private servicio:MiServicioService, private router:Router) {
  this.servicio.obtenerListaLibros();
}
altaRegistro(): void{
  this.router.navigate(['AltaLibros'])
}
eliminar(id: number):void{
  Swal.fire({
    title: 'Está segurp que desea eliminar?',
    showCancelButton: true,
    confirmButtonText: 'Si',
    denyButtonText: 'Cancelar'
  }).then((result)=>{
    if(result.isConfirmed){
      this.servicio.eliminarLibro(id);
    }else if(result.isDenied){

    }
  })
}
}
