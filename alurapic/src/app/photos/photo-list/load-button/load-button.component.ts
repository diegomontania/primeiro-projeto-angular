import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  // checa se existe mais dados para exibir
  // @Input para receber essa informação externamente
  @Input() temMaisImagensParaExibir: boolean = false;

  constructor() {}

  ngOnInit() {}

}
