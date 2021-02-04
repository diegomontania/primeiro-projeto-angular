import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Event, NavigationError } from '@angular/router';

@Component({
  selector: 'ap-form-home',
  templateUrl: './form-home.component.html',
  styleUrls: ['./form-home.component.css']
})
export class FormHomeComponent implements OnInit {

  // verifica se a informação foi enviada do html para o component
  submitted: boolean = false;

  meuFormularioReativo: FormGroup;

  // recebe no construtor os objetos:
  // Router, para navegar pelas páginas
  // FormBuilder, para construção de um formulário
  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.criaFormulario();
  }

  ngOnInit() {}

  // cria o formulario e define os campos que serão alimentados no html
  criaFormulario() {
    this.meuFormularioReativo = this.formBuilder.group({
      nome: ['', Validators.required],
      idade: ['', Validators.required]
    });
  }

  // metodo chamado no template
  proximaPagina(inputDoUsuario: string){
    
    // navega para a página do usuário
    this.router.navigate(['user/' + inputDoUsuario]);

    // se inscreve no evento de navegação e checa se foi mal sucedida a navegação
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationError) {
        this.router.navigate(['404']);
      }
    });
  }
}
