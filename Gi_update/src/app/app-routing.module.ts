import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependentesComponent } from './components/dependentes/dependentes.component';
import { AtualizacaoCadastralComponent } from './components/atualizacao-cadastral/atualizacao-cadastral.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
   },
  {
    path: 'main',
    component: MainComponent,
   },
   {
    path: 'atualizacao-cadastral',
    component: AtualizacaoCadastralComponent
   },
   {
    path: 'dependentes',
    component: DependentesComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
