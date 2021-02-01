// Um resolver é responsável por 'resolver' os dados, duante a navegação de uma rota. 
// Ou seja, antes do componente carregar, carrega os dados necessários daquele componente, fazendo assim,
// o componente carregar por completo já com seus dados no momento que ativar a rota

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs";

import { PhotoService } from "../photo/photo.service";
import { PhotoAPI } from "../photo/PhotoAPI";

@Injectable( { providedIn: 'root' } ) 
export class PhotoListResolver implements Resolve<Observable<PhotoAPI[]>> {

    // utilizando o serviço de fotos, para buscar as fotos (os dados da aplicação)
    constructor(private service: PhotoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhotoAPI[]> {
        const userName = route.params.meuUsuario;
        return this.service.listFromUserPaginated(userName, 1); // carrega apenas x fotos por página
        // return this.service.listFromUser(userName); // carrega todas as fotos do back-end
    }
}