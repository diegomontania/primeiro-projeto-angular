import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    // cria um array de objetos fotos
    photos: Object[] = [];
  
    // inejcao de dependencia do objeto HttpClient para consumir api
    // antes deve-se importar o modulo de HttpClient do angular no 'photos.module.ts'
    constructor(private photoService: PhotoService){
      
    }
  
    // onInit ocorre depois da instanciacao, todo serviço será implementado aqui
    // o construtor será apenas para injeção de dependencia
    ngOnInit(): void {
      
        // requisita os dados utilizando a classe responsável por requisitar os dados
        // subscribe: 'se inscreve' na api para executar a operação e receber a resposta com os dados
        this.photoService
          .listFromUser("flavio")
          .subscribe(
              // se for bem sucedido, mostre as fotos. Se não mostre o erro
              photos => this.photos = photos,
              err => console.log(err.message)
            ); 
    }

}
