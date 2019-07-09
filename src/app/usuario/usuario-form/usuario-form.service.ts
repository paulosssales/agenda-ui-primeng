import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from './usuario-form.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioFormService {

  uri = 'http://localhost:8080/v1/aluno';

  constructor(private http: HttpClient) { }

  consultar(): Promise<any> {
    return this.http.get<any>(`${this.uri}s`)
    .toPromise()
    .then(resp => resp);
  }

  salvar(aluno: Aluno): Promise<Aluno> {
    return this.http.post<Aluno>(this.uri, aluno)
      .toPromise()
      .then(response => response);
  }

  consultarEmail(email): Promise<Aluno> {
    return this.http.get<Aluno>(`${this.uri}/email/${email}`)
    .toPromise()
    .then(response => response);
  }

  consultarPorId(id): Promise<Aluno> {
    return this.http.get<Aluno>(`${this.uri}/${id}`)
    .toPromise()
    .then(response => response);
  }

  atualizar(aluno: Aluno): Promise<Aluno> {
    return this.http.put<Aluno>(this.uri, aluno)
    .toPromise()
    .then(response => response);
  }

  excluir(id: number): Promise<any> {
    const uriDelete = `${this.uri}/${id}`;
    return this.http.delete(uriDelete)
      .toPromise()
      .then( () => null);
  }

}

