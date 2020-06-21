import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UtilService {
  constructor(
    public readonly matDialog: MatDialog,
    private readonly matSnackBar: MatSnackBar
  ) {}

  readonly mostrarErro = ({ error, message }: HttpErrorResponse): void => {
    this.matSnackBar.open(error.message || message, 'OK');
  };

  copiarObjeto<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }
}
