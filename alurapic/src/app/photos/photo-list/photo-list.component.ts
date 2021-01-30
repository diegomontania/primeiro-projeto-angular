import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { PhotoAPI } from '../photo/PhotoAPI';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    // cria um array de objetos fotos da api
    minhasPhotosVindasDaAPI: PhotoAPI[] = [];

    // recebe o que o usuário digitou para filtrar as fotos
    filtroDeFotos: string = '';

    // inejcao de dependencia do objeto HttpClient para consumir api
    // antes deve-se importar o modulo de HttpClient do angular no 'photos.module.ts'

    // activatedRoute : rota ativada naquele momento ou seja, torna a rota dinamica de acordo
    // com a url
    constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute){
      
    }
  
    // onInit ocorre depois da instanciacao, todo serviço será implementado aqui
    // o construtor será apenas para injeção de dependencia
    ngOnInit(): void {

        // recebe o segmento da rota atual, ou seja, URL/user/:xxxx
        const userName = this.activatedRoute.snapshot.params.meuUsuario;

        // requisita os dados utilizando uma classe de serviço 'photo.service'
        // subscribe: 'se inscreve' na api para executar a operação e receber a resposta com os dados
        this.photoService
          .listFromUser(userName)
          .subscribe(
              // se for bem sucedido, mostre as fotos. Se não mostre o erro
              photos => this.minhasPhotosVindasDaAPI = photos,
              err => console.log(err.message)
            ); 
    }

}
