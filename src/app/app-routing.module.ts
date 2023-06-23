import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAutoresComponent } from './listaAutores/lista-autores/lista-autores.component';
import { AltaAutoresComponent } from './AltaAutores/alta-autores/alta-autores.component';
import { EditarAutoresComponent } from './EditarAutores/editar-autores/editar-autores.component';
import { DetallerAutorComponent } from './DetalleAutor/detaller-autor/detaller-autor.component';
// Libros***********
import { ListaLibrosComponent } from './ListaLibros/lista-libros/lista-libros.component';
import { AltaLibrosComponent } from './AltaLibros/alta-libros/alta-libros.component';
import { DetallerLibroComponent } from './DetalleLibro/detaller-libro/detaller-libro.component';
import { EditarLibrosComponent } from './EditarLibros/editar-libros/editar-libros.component';

const routes: Routes = [
  { path: 'ListaAutores', component:ListaAutoresComponent },
  { path: 'AltaAutores', component:AltaAutoresComponent },
  { path: 'EditarAutores/:id', component:EditarAutoresComponent },
  { path: 'DetallerAutores/:id', component:DetallerAutorComponent },
  {path: 'ListaLibros', component:ListaLibrosComponent},
  {path: 'AltaLibros', component:AltaLibrosComponent},
  {path: 'DetallerLibros/:id', component:DetallerLibroComponent},
  {path: 'EditarLibros/:id', component:EditarLibrosComponent},
  // { path: '', redirectTo: "ListaAutores", pathMatch: "full" },
  { path: '', redirectTo: "ListaLibros", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
