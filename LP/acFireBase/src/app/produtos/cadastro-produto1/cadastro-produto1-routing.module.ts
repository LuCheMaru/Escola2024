import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroProduto1Page } from './cadastro-produto1.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroProduto1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroProduto1PageRoutingModule {}
