import { ControlValueAccessor } from '@angular/forms';
import { Entity } from '../models/entity.model';

export class CustomSelectComponent<T> implements ControlValueAccessor {
  selected: T;
  onChange: (value: T) => void;

  compareSelectValues(itemA: T & Entity, itemB: T & Entity): boolean {
    return (itemA && itemA.id) === (itemB && itemB.id);
  }

  writeValue(value: T): void {
    this.selected = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}
}
