import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {
  // Inicio lista autores
  public ListaDeAutores: any[];
  public ListaDeLibros: any[];
  public Autor: any;
  public Libro: any;
  // public ListaAutoresByLibro: any[];

  constructor(private http: HttpClient, private router: Router) {
    this.ListaDeAutores = [];
    this.Autor = {};
    // Libros
    this.ListaDeLibros = [];
    this.Libro = {};
  }

  // Metodo que hace una peticion get y devuelve autores
  obtenerListaAutores(): void {
    this.http.get("https://localhost:44343/api/autores").subscribe((respuesta: any) => {
      console.log(respuesta);
      this.ListaDeAutores = respuesta;
    })
  }

  // atla de autores
  altaAutores(nombre: string, nacionalidad: string, fechaNacimiento: Date, genero: string): void {
    this.http.post("https://localhost:44343/api/autores", {
      "nombre": nombre,
      "nacionalidad": nacionalidad,
      "fechaNacimiento": fechaNacimiento,
      "genero": genero
    }).subscribe((respuesta: any) => {
      console.log(respuesta);
    })
  }

  ObtenerAutoresById(id: number): void {
    this.http.get("https://localhost:44343/api/autores/" + id).subscribe((respuesta: any) => {
      console.log(respuesta);
      this.Autor = respuesta;
    })
  }

  edicionAutores(id: number, nombre: string, nacionalidad: string, fechaNacimiento: Date, genero: string): void {
    this.http.put("https://localhost:44343/api/autores/" + id, {
      "id": id, "nombre": nombre, "nacionalidad": nacionalidad, "fechaNacimiento": fechaNacimiento, "genero": genero
    }).subscribe((respuesta: any) => {
      console.log(respuesta);
      Swal.fire({
        title: 'Autor actualizada correctamente',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(["/ListaAutores"]);
        }
      })
    })
  }

  // Aqui va el de eliminar
  eliminarAutor(id: number): void {
    this.http.delete("https://localhost:44343/api/autores/" + id).subscribe((respuesta: any) => {
      console.log(respuesta);
      Swal.fire({
        title: 'Autor borrado correctamente',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          this.obtenerListaAutores();
        }
      })
    })
  }


  // ************LIBROS**************
  // Metodo que hace una peticion get y devuelve autores
  obtenerListaLibros(): void {
    this.http.get("https://localhost:44343/api/libros").subscribe((respuesta: any) => {
      console.log(respuesta);
      this.ListaDeLibros = respuesta;
    })
  }

  altaLibros(titulo: string, anioPublicacion: string, genero: string, status: string, autorId: string): void {
    this.http.post("https://localhost:44343/api/libros", {
      "titulo": titulo,
      "anioPublicacion": anioPublicacion,
      "genero": genero,
      "status": status,
      "autorId": autorId
    }).subscribe((respuesta: any) => {
      console.log(respuesta);
    })
  }

  ObtenerLibrosById(id: number): void {
    this.http.get("https://localhost:44343/api/libros/" + id).subscribe((respuesta: any) => {
      console.log(respuesta);
      this.Libro = respuesta;
    })
  }

  edicionLibros(id: number, titulo: string, anioPublicacion: Date, genero: string, status: string, autorId: string): void {
    this.http.put("https://localhost:44343/api/libros/" + id, {
      "id": id, "titulo": titulo, "anioPublicacion": anioPublicacion, "genero": genero, "status": status, "autorId": autorId
    }).subscribe((respuesta: any) => {
      console.log(respuesta);
      Swal.fire({
        title: 'LIbro actualizada correctamente',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(["/ListaLibros"]);
        }
      })
    })
  }
    eliminarLibro(id: number): void {
    this.http.delete("https://localhost:44343/api/libros/" + id).subscribe((respuesta: any) => {
      console.log(respuesta);
      Swal.fire({
        title: 'Libro borrado correctamente',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          this.obtenerListaLibros();
        }
      })
    })
  }
}
