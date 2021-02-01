// arquivo responsavel pelo roteamento dentro da aplicação

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'


import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";

// responsavel por fazer o de x para de rotas
const routes: Routes = [
    // 'meuUsuario' : é um valor dinamico que é modificado para cada nova rota da url
    // o segmento da rota atual, ou seja, URL/user/:xxxx
    { path : 'user/:meuUsuario', component: PhotoListComponent, resolve: { carregarFotos: PhotoListResolver} }, 
    { path : 'p/add', component: PhotoFormComponent},
    { path : '**', component: NotFoundComponent}
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