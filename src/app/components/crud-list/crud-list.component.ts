import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entity } from 'src/app/models/entity.model';
import { HttpService } from 'src/app/services/http.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
})
export class CrudListComponent<T extends Entity> implements OnInit {
  @Input()
  private readonly service: HttpService<T>;

  @Input()
  readonly displayValue: keyof T;

  @Input()
  readonly titulo: string;

  value: any = {};

  values: T[];

  private readonly subManager = new Subscription();

  constructor(private readonly utilService: UtilService) {}

  ngOnInit(): void {
    this.subManager.add(
      this.service
        .findAll()
        .subscribe(this.setValues, this.utilService.mostrarErro)
    );
  }

  private setValues = (values: T[]): void => {
    this.values = values;
  };

  cadastrar(): void {
    this.subManager.add(
      this.service
        .save(this.value)
        .subscribe(this.atualizarOuInserirNaLista, this.utilService.mostrarErro)
    );
  }

  private atualizarOuInserirNaLista = (value: T) => {
    this.value = {};
    const index = this.values.findIndex((c) => c.id === value.id);
    if (index >= 0) {
      this.values.splice(index, 1, value);
    } else {
      this.values = [value, ...this.values];
    }
  };

  editar(value: T) {
    this.value = this.utilService.copiarObjeto(value);
  }

  deletar(value: T) {
    this.subManager.add(
      this.service
        .delete(value.id)
        .subscribe(
          () => this.removeDaLista(value),
          this.utilService.mostrarErro
        )
    );
  }

  private removeDaLista(value: T) {
    this.values = this.values.filter((c) => c.id !== value.id);
  }
}
