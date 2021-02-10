import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

// importa os componentes para este modulo
import { HomeComponent } from './home.component';
import { FormHomeComponent } from './form-home/form-home.component'
import { SignInComponent } from "./signin/signin.component";

// declara componentes deste modulo
@NgModule({
    //componentes que fazem parte do modulo
    declarations: [
        HomeComponent,
        FormHomeComponent,
        SignInComponent
    ],

    //exportando componentes que fazem parte do modulo, para que fique visivel no resto da aplicação
    exports:[
        HomeComponent,
        FormHomeComponent
    ],

    // os componentes importados por este modulo
    imports: [ 
        CommonModule, //Import para trazer todas as diretivas necessarias para que o angular funcione neste modulo
        ReactiveFormsModule //Import do modulo de forms do angular
    ]
})

export class HomeModule{}