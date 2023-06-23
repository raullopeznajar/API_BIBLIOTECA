import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// api
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListaAutoresComponent } from './listaAutores/lista-autores/lista-autores.component';
import { AltaAutoresComponent } from './AltaAutores/alta-autores/alta-autores.component';
import { EditarAutoresComponent } from './EditarAutores/editar-autores/editar-autores.component';
import { DetallerAutorComponent } from './DetalleAutor/detaller-autor/detaller-autor.component';
// Siguen loa imports de libros
import { ListaLibrosComponent } from './ListaLibros/lista-libros/lista-libros.component';
import { AltaLibrosComponent } from './AltaLibros/alta-libros/alta-libros.component';
import { DetallerLibroComponent } from './DetalleLibro/detaller-libro/detaller-libro.component';
import { EditarLibrosComponent } from './EditarLibros/editar-libros/editar-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutoresComponent,
    AltaAutoresComponent,
    EditarAutoresComponent,
    DetallerAutorComponent,
    // Siguen loa imports de libros
    ListaLibrosComponent,
    AltaLibrosComponent,
    DetallerLibroComponent,
    EditarLibrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
