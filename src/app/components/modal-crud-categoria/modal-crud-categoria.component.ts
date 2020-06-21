import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  templateUrl: './modal-crud-categoria.component.html',
})
export class ModalCrudCategoriaComponent {
  constructor(public readonly categoriaService: CategoriaService) {}
}
