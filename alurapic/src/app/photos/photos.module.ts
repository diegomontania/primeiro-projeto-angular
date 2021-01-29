// Isso aqui é um 'feature module', um agrupador dos componentes de um mesmo 'escopo' serão importados aqui
// e por sua vez este modulo será importado no app.module.ts (bem parecido com o barrel em javascript)
// fazendo com que, todos os componentes aqui importados, sejam organizados em um único ponto.
// Porem, nem todos os componentes em 'declarations' são exportados. Apenas os que estão de fato em 'exports'.
// Ou seja, pode-se importar N componentes e não necessariamente todos serão exportados.

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

// declara componentes deste modulo
@NgModule({
    // componentes que fazem parte do módulo
    declarations: [ 
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent 
    ],

    // componentes que são exportados por este módulo caso seja necessario
    // exports: [ PhotoComponent ],

    // os componentes importados por este modulo
    imports: [ 
        HttpClientModule, // Import do http para requisição de api
        CommonModule // Import para trazer todas as diretivas necessarias para que o angular funcione neste modulo
    ]
         
})

export class PhotosModule {}