import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarProduto1PageRoutingModule } from './alterar-produto1-routing.module';

import { AlterarProduto1Page } from './alterar-produto1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarProduto1PageRoutingModule
  ],
  declarations: [AlterarProduto1Page]
})
export class AlterarProduto1PageModule {}
