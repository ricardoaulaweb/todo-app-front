import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-button-filtro-categoria',
  templateUrl: './button-filtro-categoria.component.html',
})
export class ButtonFiltroCategoriaComponent implements OnInit, OnDestroy {
  @Output()
  readonly filtroChange = new EventEmitter<number>();
  filtroAtual: Categoria = { id: undefined, descricao: 'Sem filtro' };
  filtrando = false;

  categorias: Categoria[];

  private readonly subManager = new Subscription();

  constructor(private readonly categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.subManager.add(
      this.categoriaService.findAll().subscribe(this.setCategorias)
    );
  }

  private readonly setCategorias = (categorias: Categoria[]) => {
    this.categorias = [this.filtroAtual, ...categorias];
  };

  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }

  filtrar(categoria: Categoria) {
    this.filtroAtual = categoria;
    this.filtrando = this.categorias[0].id !== categoria.id;
    this.filtroChange.next(categoria.id);
  }
}
