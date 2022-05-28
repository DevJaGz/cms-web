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
import { LayoutContentComponent } from './shared/components/layout/layout-content/layout-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CmsComponent,
    BeneficiosVentajasComponent,
    CmsPopularesComponent,
    NavbarComponent,
    FooterComponent,
    LayoutContentComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
