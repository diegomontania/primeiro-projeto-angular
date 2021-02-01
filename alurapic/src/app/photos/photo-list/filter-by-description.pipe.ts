// este arquivo é um 'pipe', utilizado para fazer filtros e outras transoformações no front-end
// https://imasters.com.br/desenvolvimento/angular-criacao-de-pipes
// https://www.devmedia.com.br/angular-filter-e-pipes/40798

// FilterByDescription deve ser declarado em 'photos.module'

import { Pipe, PipeTransform } from "@angular/core";
import { PhotoAPI } from "../photo/PhotoAPI";

@Pipe({name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform{

    // primeiro parametro : quem você quer aplicar uma transformação
    transform(photos: PhotoAPI[], filtroDigitadoPeloUsuario: string) {
        
        // removendo espaços e deixando tudo minusculo
        filtroDigitadoPeloUsuario = filtroDigitadoPeloUsuario.trim().toLowerCase();

        // se o usuário filtrou por algo
        if (filtroDigitadoPeloUsuario) {
            return photos.filter(photos => photos.description.toLowerCase().includes(filtroDigitadoPeloUsuario)); 
        } 
        else {
            // se não houver descricao, devolve lista sem filtro
            return photos;
        }
    }

}