import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
 
import { PhotoService } from '../photo/photo.service';
import { PhotoAPI } from '../photo/PhotoAPI';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  // cria um array de objetos fotos da api
  minhasPhotosVindasDaAPI: PhotoAPI[] = [];

  // recebe o que o usuário digitou para filtrar as fotos
  filtroDeFotos: string = '';

  // armazena 'milisegundos'
  debounce: Subject<string> = new Subject<string>();

  // checa se existe mais imagens para carregar no back-end 
  // e por sua vez recebe o valor do component do botão 'load-button.component'
  temMaisImagensParaExibir: boolean = true;

  // armazena a página atual para saber quais imagens carregar
  paginaAtual: number = 1;

  usuario: string = '';

  // activatedRoute : rota ativada naquele momento ou seja, torna a rota dinamica de acordo com a url
  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute){
    
  }
  
  // onInit ocorre depois da instanciacao, todo serviço será implementado aqui
  // o construtor será apenas para injeção de dependencia
  ngOnInit(): void {

    // recebe o usuario atual
      this.usuario = this.activatedRoute.snapshot.params.meuUsuario;

      // a busca dos dados está sendo feita no resolver, que por sua vez, 
      // irá carregar o componente apenas quando os dados estiverem disponiveis
      this.minhasPhotosVindasDaAPI = this.activatedRoute.snapshot.data.carregarFotos;

      // chamada um debouce e observable(subscribe) para aguardar x milisegundos para executar o filtro
      this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filtroDeFotos = filter);

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

  // onDestroy ocorre após mudança de página destruindo um serviço
  ngOnDestroy(): void {

    // removendo unsuscribe do componente que faz uso do debounce
    this.debounce.unsubscribe();
  }

  carregarMaisImagens(){
    this.photoService
    .listFromUserPaginated(this.usuario, ++this.paginaAtual)
    // se existir mais dados, adicione nas minhas fotos atual
    .subscribe(photos => {
      this.minhasPhotosVindasDaAPI = this.minhasPhotosVindasDaAPI.concat(photos);

      // se nao houver mais fotos
      if(!photos.length){
        this.temMaisImagensParaExibir = false;
      }
    });
  }
}