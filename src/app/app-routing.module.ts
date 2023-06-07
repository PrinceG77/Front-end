import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./view/homepage/homepage.component";
import {AboutpageComponent} from "./view/aboutpage/aboutpage.component";
import {EventspageComponent} from "./view/eventspage/eventspage.component";
import {ServicespageComponent} from "./view/servicespage/servicespage.component";
import {NewspageComponent} from "./view/newspage/newspage.component";
import {ContactpageComponent} from "./view/contactpage/contactpage.component";
import {DonspageComponent} from "./view/donspage/donspage.component";
import {EducationSpecifiqueComponent} from "./view/education-specifique/education-specifique.component";
import {SuiviParamedicalComponent} from "./view/suivi-paramedical/suivi-paramedical.component";
import {EquipePolyvalenteComponent} from "./view/equipe-polyvalente/equipe-polyvalente.component";
import {BeneficiairesComponent} from "./view/beneficiaires/beneficiaires.component";
import {
  SoutienAccompagnementPsychiqueComponent
} from "./view/soutien-accompagnement-psychique/soutien-accompagnement-psychique.component";
import {PresentationComponent} from "./view/presentation/presentation.component";
import {MissionComponent} from "./view/mission/mission.component";
import {HistoireComponent} from "./view/histoire/histoire.component";
import {PartenairesComponent} from "./view/partenaires/partenaires.component";
import {ServicesAdministratifsComponent} from "./view/services-administratifs/services-administratifs.component";
import {LoginComponent} from "./view/login/login.component";
import {AdminpageComponent} from "./view/admin/adminpage/adminpage.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {UserCreateComponent} from "./view/admin/user-create/user-create.component";
import {UserListComponent} from "./view/user-list/user-list.component";
import {UserEditComponent} from "./view/admin/user-edit/user-edit.component";
import {ListeFormulairesComponent} from "./view/listes-formulaires/listes-formulaires.component";
import {FormulaireInscriptionComponent} from "./view/formulaire-inscription/formulaire-inscription.component";
//import {FormulaireInscriptionComponent} from "./view/formulaire-inscription/formulaire-inscription.component";
//import {ListeFormulairesComponent} from "./view/listes-formulaires/listes-formulaires.component";

const routes: Routes = [
  {path : '', component : HomepageComponent},
  {path : 'accueil', component : HomepageComponent},
  {path : 'Apropos', component : AboutpageComponent},
  {path : 'presentation', component : PresentationComponent},
  {path : 'objectifs', component : MissionComponent},
  {path : 'histoire', component : HistoireComponent},
  {path : 'partenaires', component : PartenairesComponent},
  {path : 'services-administratifs', component : ServicesAdministratifsComponent},
  {path : 'evenements', component : EventspageComponent},
  {path : 'services', component : ServicespageComponent},
  {path : 'education-specifique', component : EducationSpecifiqueComponent},
  {path : 'suivi-paramedical', component : SuiviParamedicalComponent},
  {path : 'soutient-accompagnement', component : SoutienAccompagnementPsychiqueComponent},
  {path : 'equipe-polyvalente', component : EquipePolyvalenteComponent},
  {path : 'beneficiaires', component : BeneficiairesComponent},
  {path : 'actualites', component : NewspageComponent},
  {path : 'contact', component : ContactpageComponent},
  {path : 'dons', component : DonspageComponent},
  {path : 'login', component : LoginComponent},
  {path : 'inscription', component : FormulaireInscriptionComponent},
  {path : 'liste-forms', component : ListeFormulairesComponent},


  {path : 'admin', component : AdminpageComponent, canActivate : [AuthenticationGuard], children : [
      {path : 'user-list', component : UserListComponent},
      {path : 'user-create', component : UserCreateComponent},
      {path: 'user-edit/:userId', component: UserEditComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
