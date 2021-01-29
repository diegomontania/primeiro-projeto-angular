import { Component, Input } from '@angular/core';

@Component({
    // diz o nome do componente que será utilizado em outro trecho do programa
    // nome : '[empresa]-component'
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})

export class PhotoComponent {

    // define as propriedades (dados) deste componente
    // @Input() : é uma propriedade 'Inbound' que recebe valores externos
    @Input() 
    description = '';
    
    @Input() 
    url = '';
}