import { Component } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my new app';

  // cria um array de objetos
  photos: Object[] = [];
  
  // inejcao de dependencia do objeto HttpClient para consumir api
  // antes deve-se importar o modulo de httpclient do angular no 'app.module.ts'
  constructor(photoService: PhotoService){
    
    // requisita os dados utilizando a classe responsável por requisitar os dados
    // subscribe: 'se inscreve' na api para executar a operação e receber a resposta com os dados
    photoService
      .listFromUser("flavio")
      .subscribe(
          // se for bem sucedido, mostre as fotos. Se não mostre o erro
          photos => this.photos = photos,
          err => console.log(err.message)
        ); 
  }
}