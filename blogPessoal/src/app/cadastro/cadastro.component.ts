import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  user: User = new User()
  senha: string

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit(): void {
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar() {
    if (this.senha === this.user.senha) {
      this.AuthService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso')
      })
    } else {
      this.alert.showAlertDanger('Suas senhas não conferem')
    }
  }

}