import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarProduto1Page } from './alterar-produto1.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarProduto1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarProduto1PageRoutingModule {}
