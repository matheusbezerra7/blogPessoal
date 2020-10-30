import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  /*criando rota , arrays*/
  /**Abrir o site já na pagina home */
  {path: 'vazio', redirectTo: 'home', pathMatch: 'full' },
  /**Rota Home */
  { path: 'home', component: HomeComponent },
  /**Rota Feed */
  {path: 'feed' , component: FeedComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
