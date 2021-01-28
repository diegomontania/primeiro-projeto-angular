// Isso aqui é um 'feature module', um agrupador dos componentes de um mesmo 'escopo' serão importados aqui
// e por sua vez este modulo será importado no app.module.ts (bem parecido com o barrel em javascript)
// fazendo com que, todos os componentes aqui importados, sejam organizados em um único ponto.
// Porem, nem todos os componentes em 'declarations' são exportados. Apenas os que estão de fato em 'exports'.
// Ou seja, pode-se importar N componentes e não necessariamente todos serão exportados.

import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

// declara componentes deste modulo
@NgModule({
    // componentes que fazem parte do módulo
    declarations: [ PhotoComponent ],

    // componentes que são exportados por este módulo
    exports: [ PhotoComponent ]
})

export class PhotosModule {}