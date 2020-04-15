import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PublicationComponent } from './publication/publication.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { ContactComponent } from './contact/contact.component';
import { DetailPublicationComponent } from './detail-publication/detail-publication.component';
import { AccountComponent } from './account/account.component';
import { SeconnecterComponent } from './seconnecter/seconnecter.component';


const routes: Routes = [
{
  path:'',component:AcceuilComponent
},

{
  path:'organisations',component:OrganisationsComponent
}
,
{
  path:'contact',component:ContactComponent
},
{
  path:'publications/detail',component:DetailPublicationComponent
},{
  path:'publications',component:PublicationComponent
},
{
  path:'authentification', component:AccountComponent
},
{
  path:'seconnecter', component:SeconnecterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
