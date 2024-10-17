import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroProduto1PageRoutingModule } from './cadastro-produto1-routing.module';

import { CadastroProduto1Page } from './cadastro-produto1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroProduto1PageRoutingModule
  ],
  declarations: [CadastroProduto1Page]
})
export class CadastroProduto1PageModule {}
