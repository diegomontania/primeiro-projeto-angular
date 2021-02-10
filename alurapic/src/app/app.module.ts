// app.module, é um modo que precisa ficar o mais "simples possível"
// importando apenas os módulos que a aplicação irá utilizar

// Imports do angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// meus imports
import { PhotosModule } from './photos/photos.module';
import { AppRougintModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    // importa seus componentes
    AppComponent
  ],
  imports: [
    // importa os modulos no angular
    BrowserModule,
    PhotosModule,
    AppRougintModule,
    ErrorsModule,
    HomeModule, 
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
