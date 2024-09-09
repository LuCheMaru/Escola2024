import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptografarPage } from './descriptografar.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptografarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptografarPageRoutingModule {}
