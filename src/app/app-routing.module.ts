import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiosVentajasComponent } from './web/components/beneficios-ventajas/beneficios-ventajas.component';
import { CmsPopularesComponent } from './web/components/cms-populares/cms-populares.component';
import { CmsComponent } from './web/components/cms/cms.component';

const routes: Routes = [
  { path: '', redirectTo: 'cms', pathMatch: 'full' },
  { path: 'cms', component: CmsComponent },
  { path: 'beneficios-ventajas', component: BeneficiosVentajasComponent },
  { path: 'cms-populares', component: CmsPopularesComponent },
  { path: '**', redirectTo: 'cms', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
