import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  logar(userLogin: UserLogin){
    return this.http.post('https://blogpessoal.herokuapp.com/usuarios/logar', userLogin)
  }


  cadastrar (user: User){
    return this.http.post('https://blogpessoal.herokuapp.com/usuarios/cadastrar', user)
  }

  btnSair(){
    let ok = false
    let token = environment.token

    if(token != ''){
      ok = true
    }

    return ok

  }

  btnLogin(){
    let ok = false
    let token = environment.token

    if(token == ''){
      ok = true
    }

    return ok
  }


}
