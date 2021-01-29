// Imports do angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { AppRougintModule } from './app.routing.module';

@NgModule({
  declarations: [
    // importa seus componentes
    AppComponent
  ],
  imports: [
    // importa os modulos no angular
    BrowserModule,
    PhotosModule,
    AppRougintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
