import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

// importa os componentes para este modulo
import { HomeComponent } from './home.component';
import { ButtonLoadPageComponent } from '../button-load-page/button-load-page.component'

// declara componentes deste modulo
@NgModule({

    //componentes que fazem parte do modulo
    declarations: [
        HomeComponent,
        ButtonLoadPageComponent
    ],

    //exportando componentes que fazem parte do modulo, para que fique visivel no resto da aplicação
    exports:[
        HomeComponent,
        ButtonLoadPageComponent
    ],

    // os componentes importados por este modulo
    imports: [ 
        CommonModule // Import para trazer todas as diretivas necessarias para que o angular funcione neste modulo
    ]

})

export class HomeModule{}