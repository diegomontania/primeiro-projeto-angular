import { Component, OnInit } from '@angular/core';

@Component({
    // diz o nome do componente que será utilizado em outro trecho do programa
    // nome : '[empresa]-component'
    selector: 'ap-sinin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SignInComponent implements OnInit{

    constructor() {}
    
    ngOnInit(): void {}

}