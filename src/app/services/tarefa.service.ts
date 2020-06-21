import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { HttpService } from './http.service';

@Injectable()
export class TarefaService extends HttpService<Tarefa> {
  protected readonly recurso = 'tarefa';
  constructor(protected readonly httpClient: HttpClient) {
    super();
  }

  ordenarPorPrazo(tarefas: Tarefa[]): Tarefa[] {
    return tarefas.sort((tarefaA, tarefaB) => {
      return (
        new Date(tarefaA.prazo).getTime() - new Date(tarefaB.prazo).getTime()
      );
    });
  }

  findAllByCategoriaId(idCategoria: number) {
    return this.findAll({ idCategoria });
  }

  toggleConcluido(tarefa: Tarefa) {
    const tarefaAtualizada: Tarefa = {
      ...tarefa,
      concluido: !tarefa.concluido,
    };

    return this.update(tarefaAtualizada);
  }
}
