import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }
  
  
  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }


  getAllTemas() {
    return this.http.get('https://blogpessoal.herokuapp.com/tema',this.token)
  }


  getByIdTema(id : number) {
    return this.http.get(`https://blogpessoal.herokuapp.com/tema/${id}`,this.token)

  }

  postTema(tema: Tema) {
    return this.http.post('https://blogpessoal.herokuapp.com/tema', tema , this.token)
  }
  
  putTema(tema: Tema){
    return  this.http.put('https://blogpessoal.herokuapp.com/tema',tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`https://blogpessoal.herokuapp.com/tema/${id}`,this.token)

  }
  
  getByNomeTema(nome: string) {
    return this.http.get(`https://blogpessoal.herokuapp.com/tema/nome/${nome}`, this.token)
  }
}