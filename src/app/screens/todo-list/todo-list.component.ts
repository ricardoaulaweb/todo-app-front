import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import {
  ModalCrudCategoriaComponent,
  ModalCrudResponsavelComponent,
  ModalFormTarefaComponent,
} from 'src/app/components/modais';
import { Tarefa } from 'src/app/models/tarefa.model';
import { TarefaService } from 'src/app/services/tarefa.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  dataSource: Tarefa[];
  displayedColumns: string[] = [
    'descricao',
    'responsavel',
    'categoria',
    'prazo',
    'concluido',
    'actions',
  ];

  private idCategoriaFiltro: number;

  constructor(
    private readonly tarefaService: TarefaService,
    private readonly utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.setupTarefas();
  }

  private setupTarefas() {
    const request = this.idCategoriaFiltro
      ? this.tarefaService.findAllByCategoriaId(this.idCategoriaFiltro)
      : this.tarefaService.findAll();

    request.subscribe(this.setTarefas, this.utilService.mostrarErro);
  }

  private readonly setTarefas = (tarefas: Tarefa[]): void => {
    this.dataSource = this.tarefaService.ordenarPorPrazo(tarefas);
  };

  cadastrarTarefa() {
    this.abrirModalFormTarefa().subscribe(this.inserirNovaTarefa);
  }

  private abrirModalFormTarefa(tarefa = new Tarefa()) {
    const ref = this.utilService.matDialog.open(ModalFormTarefaComponent);
    ref.componentInstance.tarefa = this.utilService.copiarObjeto(tarefa);
    return ref.afterClosed().pipe(
      take(1),
      filter((value) => value)
    );
  }

  private readonly inserirNovaTarefa = (tarefa: Tarefa) => {
    const dataSource = [tarefa, ...this.dataSource];
    this.setTarefas(dataSource);
  };

  editarTarefa(tarefa: Tarefa) {
    this.abrirModalFormTarefa(tarefa).subscribe(this.atualizarTarefa);
  }

  private readonly atualizarTarefa = (tarefa: Tarefa) => {
    const index = this.dataSource.findIndex((t) => t.id === tarefa.id);
    const dataSource = [...this.dataSource];
    dataSource.splice(index, 1, tarefa);
    this.setTarefas(dataSource);
  };

  deletarTarefa(tarefa: Tarefa) {
    this.tarefaService
      .delete(tarefa.id)
      .subscribe(
        () => this.removerTarefa(tarefa),
        this.utilService.mostrarErro
      );
  }

  private removerTarefa(tarefa: Tarefa) {
    this.dataSource = this.dataSource.filter((t) => t.id !== tarefa.id);
  }

  toggleConcluido(tarefa: Tarefa) {
    this.tarefaService
      .toggleConcluido(tarefa)
      .subscribe(this.atualizarTarefa, this.utilService.mostrarErro);
  }

  cadastrarCategoria() {
    this.utilService.matDialog.open(ModalCrudCategoriaComponent);
  }
  cadastrarResponsavel() {
    this.utilService.matDialog.open(ModalCrudResponsavelComponent);
  }

  setIdCategoriaFiltro(id: number) {
    this.idCategoriaFiltro = id;
    this.setupTarefas();
  }
}
