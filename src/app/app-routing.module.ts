import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PublicationComponent } from './publication/publication.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { ContactComponent } from './contact/contact.component';
import { DetailPublicationComponent } from './detail-publication/detail-publication.component';


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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
