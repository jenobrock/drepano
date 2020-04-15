import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PublicationComponent } from './publication/publication.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { DetailPublicationComponent } from './detail-publication/detail-publication.component';
import { ContactComponent } from './contact/contact.component';
import { FaireDonComponent } from './faire-don/faire-don.component';
import { AccountComponent } from './account/account.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './acceuil/slider/slider.component';
import { CategorieComponent } from './acceuil/categorie/categorie.component';
import { CategoriePopulaireComponent } from './acceuil/categorie-populaire/categorie-populaire.component';
import { PublicationsComponent } from './acceuil/publications/publications.component';
import { PublicationsRecentesComponent } from './acceuil/publications-recentes/publications-recentes.component';
import { ClusterComponent } from './acceuil/cluster/cluster.component';
import { BannerComponent } from './banner/banner.component';
import { BodyComponent } from './publication/body/body.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SeconnecterComponent } from './seconnecter/seconnecter.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    PublicationComponent,
    OrganisationsComponent,
    DetailPublicationComponent,
    ContactComponent,
    FaireDonComponent,
    AccountComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CategorieComponent,
    CategoriePopulaireComponent,
    PublicationsComponent,
    PublicationsRecentesComponent,
    ClusterComponent,
    BannerComponent,
    BodyComponent,
    SeconnecterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
