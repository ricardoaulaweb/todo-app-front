import { Categoria } from './categoria.model';
import { Entity } from './entity.model';
import { Responsavel } from './responsavel.model';

export class Tarefa extends Entity {
  descricao: string;
  concluido: boolean;
  categoria: Categoria;
  responsavel: Responsavel;
  prazo: Date | string;
}
