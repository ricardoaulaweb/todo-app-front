import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Tarefa } from 'src/app/models/tarefa.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ResponsavelService } from 'src/app/services/responsavel.service';
import { TarefaService } from 'src/app/services/tarefa.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  templateUrl: './modal-form-tarefa.component.html',
})
export class ModalFormTarefaComponent implements OnDestroy {
  tarefa: Tarefa;
  readonly agora = new Date();

  private readonly subManger = new Subscription();

  constructor(
    private readonly dialogRef: MatDialogRef<ModalFormTarefaComponent>,
    private readonly tarefaService: TarefaService,
    private readonly utilService: UtilService,
    public readonly categoriaService: CategoriaService,
    public readonly responsavelService: ResponsavelService
  ) {}

  ngOnDestroy() {
    this.subManger.unsubscribe();
  }

  salvar() {
    this.subManger.add(
      this.tarefaService
        .save(this.tarefa)
        .subscribe(this.fecharModal, this.utilService.mostrarErro)
    );
  }

  private readonly fecharModal = (tarefaSalva: Tarefa) => {
    this.dialogRef.close(tarefaSalva);
  };
}
