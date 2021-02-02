import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhotoAPI } from '../../photo/PhotoAPI'

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  // recebe uma lista de photos
  @Input() photos: PhotoAPI[] = [];

  // cria um array de dados em branco onde o 'photos.component.html' será baseado
  rows: any[] = [];

  constructor() { }

  // o onchanges recebe todas as mudanças das propriedades
  ngOnChanges(changes: SimpleChanges): void {

    // se houver mudança em fotos
    if (changes.photos) {

      // recebe a quantidade de grupos que serão criados a partir das fotos
      // recebidas do back-end, ou seja, colocando as fotos nas colunas
      this.rows = this.agruparColunasDeFotos(this.photos);
    }
  }

  ngOnInit() {}

  agruparColunasDeFotos(photos: PhotoAPI[]) {
    
    const newRows = [];

    // faz um for para interar as fotos de 3 em 3
    for(let index = 0; index < photos.length; index += 3){

        // .push = adiciona no array
        // .slice = "faz corte em um array", ou seja, recebe em intervalos especificos elementos de um array, 3 em 3... 2 em 2...
        // no slice, o parametro É INCLUSIVO, ou seja, este elemento irá fazer parte do "corte"
        // o segundo parametro NÃO É INCLUSIVO, ou seja, ficará de fora do "corte"
        newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }

}
