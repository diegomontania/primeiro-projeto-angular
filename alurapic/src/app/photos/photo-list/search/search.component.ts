import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
    selector: 'ap-search',
    templateUrl : './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit, OnDestroy {

    // propriedade que irá receber o valor do evento inserido no html
    @Output() meuEventoQueSeraDisparado: EventEmitter<string> = new EventEmitter<string>();

    @Input() textoBusca: string = '';

    // armazena 'milisegundos'
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        // chama um debouce e observable(subscribe) para aguardar x milisegundos 
        // para executar o evento recebido do html, que por sua vez aplica o filtro
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.meuEventoQueSeraDisparado.emit(filter));
    }

      // onDestroy ocorre após mudança de página destruindo um serviço
    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
}