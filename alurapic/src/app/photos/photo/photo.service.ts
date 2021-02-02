// arquivo de serviço ou seja, é uma classe resposável por requisitar o serviço da api

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhotoAPI } from './PhotoAPI';

const API = 'http://localhost:3000/';

// ao criar um serviço deve-se utilizar '@Injectable'
// ele diz que a classe é injetável, ou seja, pode receber parametros para serem injetados

// porem é necessario dizer se é um único objeto para aplicação inteira ou não. 
// providedIn: 'root' define que será do escopo 'raiz', ou seja, qualquer componente da aplicação 
// terá a mesma instancia deste objeto disponível para utilização
@Injectable({ providedIn: 'root' })
export class PhotoService{

    // 'public' ou 'private' no construtor da classe na propriedade http
    // faz esta propriedade ser acessada por toda a classe sem ter que criar 
    // um campo 'http' na classe. Ou seja, é um 'sugar syntax'
    constructor(private http: HttpClient){

    }

    listFromUser(userName: string){
        // trás o objeto da resposta como um array de objetos
        return this.http.get<PhotoAPI[]>(API + userName +'/photos'); 
    }

    listFromUserPaginated(userName: string, pagina: number){

        const parametros = new HttpParams().append('pagina', pagina.toString());
        return this.http.get<PhotoAPI[]>(API + userName +'/photos', { params: parametros}); 
    }
}