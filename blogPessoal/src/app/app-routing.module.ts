import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostTemaComponent } from './post-tema/post-tema.component';

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
  {path: 'cadastro-tema', component: PostTemaComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
