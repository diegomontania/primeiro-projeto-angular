import { Component, Input, OnInit } from '@angular/core';

@Component({
    // diz o nome do componente que será utilizado em outro trecho do programa
    // nome : '[empresa]-component'
    selector: 'ap-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    
    title: string = 'Bem vindo a página inicial :)';

    constructor() {}
    
    ngOnInit(): void {}

}