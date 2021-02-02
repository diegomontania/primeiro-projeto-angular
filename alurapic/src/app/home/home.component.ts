import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    // diz o nome do componente que será utilizado em outro trecho do programa
    // nome : '[empresa]-component'
    selector: 'ap-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    
    title: string = 'Bem vindo a página inicial :)';

    // recebe no construtor o objeto Router, para navegar pelas páginas
    constructor(private router: Router) {}
    
    ngOnInit(): void {}

    // metodo chamado no template
    proximaPagina(inputDoUsuario: string): void{
        this.router.navigate(['user/' + inputDoUsuario]);
    }
}