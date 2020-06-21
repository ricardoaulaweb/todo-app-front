import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { HttpService } from './http.service';

@Injectable()
export class CategoriaService extends HttpService<Categoria> {
  protected readonly recurso = 'categoria';
  constructor(protected readonly httpClient: HttpClient) {
    super();
  }
}
