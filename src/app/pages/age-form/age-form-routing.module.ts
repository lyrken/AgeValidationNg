import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgeFormPage } from './age-form.page';

const routes: Routes = [
  {
    path: '',
    component: AgeFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgeFormPageRoutingModule {}
