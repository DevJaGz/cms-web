import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmsComponent } from './web/components/cms/cms.component';
import { BeneficiosVentajasComponent } from './web/components/beneficios-ventajas/beneficios-ventajas.component';
import { CmsPopularesComponent } from './web/components/cms-populares/cms-populares.component';
import { NavbarComponent } from './shared/components/layout/navbar/navbar.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CmsComponent,
    BeneficiosVentajasComponent,
    CmsPopularesComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
