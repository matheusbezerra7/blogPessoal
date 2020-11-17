import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';


@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }


  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens() {

    return this.http.get('https://blogpessoal.herokuapp.com/postagem',this.token)
  }

  getByIdPostagens(id: number){
    return this.http.get(`https://blogpessoal.herokuapp.com/postagem/${id}`,this.token)
  }



  postPostagem(postagem : Postagem) {
    return  this.http.post('https://blogpessoal.herokuapp.com/postagem',postagem, this.token)
  }

  putPostagem(postagem: Postagem) {
    return  this.http.put('https://blogpessoal.herokuapp.com/postagem',postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://blogpessoal.herokuapp.com/postagem/${id}`,this.token)

  }

  getByTituloPostagem(titulo: string) {
    return this.http.get(`https://blogpessoal.herokuapp.com/postagem/titulo/${titulo}`, this.token)
  }



}
