// arquivo responsavel pelo roteamento dentro da aplicação

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'

import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";

// responsavel por fazer o de x para de rotas
const routes: Routes = [
    { path : 'user/flavio', component: PhotoListComponent},
    { path : 'p/add', component: PhotoFormComponent}
];

@NgModule({
    // importando modulo de rotas
    imports:[
        RouterModule.forRoot(routes) // recebendo a lista de rotas
    ],

    // exportando RouterModule, pois ao importar app.routing.module, recebe acesso a este módulo
    exports:[
        RouterModule
    ]
})

export class AppRougintModule{

}