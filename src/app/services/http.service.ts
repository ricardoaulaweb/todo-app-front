import { HttpClient } from '@angular/common/http';
import { Entity } from '../models/entity.model';

export abstract class HttpService<T> {
  private readonly api = 'http://localhost:8080/api/v1/';
  protected abstract readonly recurso: string;
  protected abstract readonly httpClient: HttpClient;

  findAll(params?: { [param: string]: any }) {
    return this.httpClient.get<T[]>(`${this.api}${this.recurso}`, { params });
  }

  getById(id: number) {
    return this.httpClient.get<T>(`${this.api}${this.recurso}/${id}`);
  }

  update(item: T & Entity) {
    return this.httpClient.put<T>(
      `${this.api}${this.recurso}/${item.id}`,
      item
    );
  }

  create(item: T) {
    return this.httpClient.post<T>(`${this.api}${this.recurso}`, item);
  }

  delete(id: number) {
    return this.httpClient.delete<boolean>(`${this.api}${this.recurso}/${id}`);
  }

  save(item: T & Entity) {
    return item.id ? this.update(item) : this.create(item);
  }
}
