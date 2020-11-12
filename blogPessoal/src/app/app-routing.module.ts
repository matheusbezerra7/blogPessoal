import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';

const routes: Routes = [
  /*criando rota , arrays*/
  /**Abrir o site já na pagina home */
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  /**Rota Home */
  { path: 'home', component: HomeComponent },
  /**Rota Feed */
  {path: 'feed' , component: FeedComponent},
  /*Rota Login*/
  {path: 'login', component: LoginComponent},
  /*Rota cadastro*/
  {path: 'cadastro', component: CadastroComponent},
  /**Cadastro */
  {path: 'cadastro-tema', component: PostTemaComponent},
  /**Editar postagem */
  {path: 'editar-post/:id', component : PutPostagemComponent},
  /**Deletar postagem */
  {path: 'delete-post/:id', component: DeletePostagemComponent},
  /**Editar tema */
  {path: 'editar-tema/:id', component: PutTemaComponent},
  /**Deletar Tema */
  {path: 'delete-tema/:id', component: DeleteTemaComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
