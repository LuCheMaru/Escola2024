import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptografarPageRoutingModule } from './descriptografar-routing.module';

import { DescriptografarPage } from './descriptografar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptografarPageRoutingModule
  ],
  declarations: [DescriptografarPage]
})
export class DescriptografarPageModule {}
