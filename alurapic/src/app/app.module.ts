// Imports do angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
 import { HttpClientModule } from '@angular/common/http'; // Import do http para requisição de api

@NgModule({
  declarations: [
    // importa seus componentes
    AppComponent
  ],
  imports: [
    // importa os modulos no angular
    BrowserModule,
    PhotosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
