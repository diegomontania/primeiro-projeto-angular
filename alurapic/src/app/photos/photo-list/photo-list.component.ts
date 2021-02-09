import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
import { PhotoService } from '../photo/photo.service';
import { PhotoAPI } from '../photo/PhotoAPI';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  // cria um array de objetos fotos da api
  minhasPhotosVindasDaAPI: PhotoAPI[] = [];

  // recebe o que o usuário digitou para filtrar as fotos
  filtroDeFotos: string = '';

  // checa se existe mais imagens para carregar no back-end 
  // e por sua vez recebe o valor do component do botão 'load-button.component'
  temMaisImagensParaExibir: boolean = true;

  // armazena a página atual para saber quais imagens carregar
  paginaAtual: number = 1;

  usuario: string = '';

  // activatedRoute : rota ativada naquele momento ou seja, torna a rota dinamica de acordo com a url
  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute){}
  
  // onInit ocorre depois da instanciacao, todo serviço será implementado aqui
  // o construtor será apenas para injeção de dependencia
  ngOnInit(): void {

    // recebe o usuario atual
      this.usuario = this.activatedRoute.snapshot.params.meuUsuario;

      // a busca dos dados está sendo feita no resolver, que por sua vez, 
      // irá carregar o componente apenas quando os dados estiverem disponiveis
      this.minhasPhotosVindasDaAPI = this.activatedRoute.snapshot.data.carregarFotos

      //#region antiga requição de rotas de foto
      // recebe o segmento da rota atual, ou seja, URL/user/:xxxx
      // const userName = this.activatedRoute.snapshot.params.meuUsuario;

      // requisita os dados utilizando uma classe de serviço 'photo.service'
      // subscribe: 'se inscreve' na api para executar a operação e receber a resposta com os dados
      // this.photoService
      //   .listFromUser(userName)
      //   .subscribe(
      //       // se for bem sucedido, mostre as fotos. Se não mostre o erro
      //       photos => this.minhasPhotosVindasDaAPI = photos,
      //       err => console.log(err.message)
      //     ); 
      //#endregion
  }

carregarMaisImagens(){
    this.photoService
      .listFromUserPaginated(this.usuario, ++this.paginaAtual)
      
      // se existir mais dados, adicione nas minhas fotos atual
      .subscribe(photos => {
        this.filtroDeFotos = ''; // limpa o filtro

        this.minhasPhotosVindasDaAPI = this.minhasPhotosVindasDaAPI.concat(photos);

      // se nao houver mais fotos
      if(!photos.length) this.temMaisImagensParaExibir = false;
    });
  }
}