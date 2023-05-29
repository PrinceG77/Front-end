import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './view/menu/menu.component';
import { FooterComponent } from './view/footer/footer.component';
import { HomepageComponent } from './view/homepage/homepage.component';
import { AboutpageComponent } from './view/aboutpage/aboutpage.component';
import { ServicespageComponent } from './view/servicespage/servicespage.component';
import { NewspageComponent } from './view/newspage/newspage.component';
import { EventspageComponent } from './view/eventspage/eventspage.component';
import { ContactpageComponent } from './view/contactpage/contactpage.component';
import { DonspageComponent } from './view/donspage/donspage.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EducationSpecifiqueComponent } from './view/education-specifique/education-specifique.component';
import { SuiviParamedicalComponent } from './view/suivi-paramedical/suivi-paramedical.component';
import { SoutienAccompagnementPsychiqueComponent } from './view/soutien-accompagnement-psychique/soutien-accompagnement-psychique.component';
import { BeneficiairesComponent } from './view/beneficiaires/beneficiaires.component';
import { EquipePolyvalenteComponent } from './view/equipe-polyvalente/equipe-polyvalente.component';
import { PresentationComponent } from './view/presentation/presentation.component';
import { MissionComponent } from './view/mission/mission.component';
import { HistoireComponent } from './view/histoire/histoire.component';
import { PartenairesComponent } from './view/partenaires/partenaires.component';
import { ServicesAdministratifsComponent } from './view/services-administratifs/services-administratifs.component';
import { FooterPageComponent } from './view/footer-page/footer-page.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomepageComponent,
    AboutpageComponent,
    ServicespageComponent,
    NewspageComponent,
    EventspageComponent,
    ContactpageComponent,
    DonspageComponent,
    EducationSpecifiqueComponent,
    SuiviParamedicalComponent,
    SoutienAccompagnementPsychiqueComponent,
    BeneficiairesComponent,
    EquipePolyvalenteComponent,
    PresentationComponent,
    MissionComponent,
    HistoireComponent,
    PartenairesComponent,
    ServicesAdministratifsComponent,
    FooterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
