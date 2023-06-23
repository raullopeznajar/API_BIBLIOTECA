import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MiServicioService } from 'src/app/miServicio/mi-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.css']
})
export class ListaAutoresComponent {
  get resultados(){
    return this.servicio.ListaDeAutores;
  }
  /**
   *
   */
  constructor(private servicio:MiServicioService, private router:Router) {
    this.servicio.obtenerListaAutores();
  }
  altaRegistro(): void{
    this.router.navigate(['AltaAutores'])
  }
  eliminar(id: number):void{
    Swal.fire({
      title: 'Está segurp que desea eliminar?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.servicio.eliminarAutor(id);
      }else if(result.isDenied){

      }
    })
  }

}
