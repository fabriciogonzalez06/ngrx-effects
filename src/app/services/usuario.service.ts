import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

private url='https://reqres.in/api/';

  getUsers():Observable<any>{
    return this.http.get<Usuario[]>(`${this.url}users?per_page=6`)
    .pipe(
      map( resp=> resp['data'])
    );
  }


  getUserById(id:string):Observable<any>{
    return this.http.get(`${this.url}users/${id}`)
    .pipe(
      map( resp=> resp['data'])
    );
  }

}


