import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'age-form',
    loadChildren: () => import('./pages/age-form/age-form.module')
      .then(m => m.AgeFormPageModule)
  },
  { path: '', redirectTo: 'age-form', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
