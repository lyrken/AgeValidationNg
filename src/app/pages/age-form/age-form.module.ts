import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AgeFormPageRoutingModule } from './age-form-routing.module';
import { AgeFormPage } from './age-form.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgeFormPageRoutingModule
  ],
  declarations: [AgeFormPage],
})
export class AgeFormPageModule {}
