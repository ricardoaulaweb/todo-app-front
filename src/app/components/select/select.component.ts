import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomSelectComponent } from 'src/app/classes/select-component';
import { HttpService } from 'src/app/services/http.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent<T> extends CustomSelectComponent<T>
  implements OnInit, OnDestroy {
  values: T[];

  @Input()
  private readonly service: HttpService<T>;

  @Input()
  readonly displayValue: keyof T;

  @Input()
  readonly placeholder: string;

  private readonly subManager = new Subscription();

  constructor(private readonly utilService: UtilService) {
    super();
  }

  ngOnInit(): void {
    this.setupValues();
  }

  private setupValues(): void {
    this.subManager.add(
      this.service
        .findAll()
        .subscribe(this.setValues, this.utilService.mostrarErro)
    );
  }

  private readonly setValues = (values: T[]) => {
    this.values = values;
  };

  ngOnDestroy(): void {
    this.subManager.unsubscribe();
  }
}
