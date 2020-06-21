import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responsavel } from '../models/responsavel.model';
import { HttpService } from './http.service';

@Injectable()
export class ResponsavelService extends HttpService<Responsavel> {
  protected readonly recurso = 'responsavel';
  constructor(protected readonly httpClient: HttpClient) {
    super();
  }
}
