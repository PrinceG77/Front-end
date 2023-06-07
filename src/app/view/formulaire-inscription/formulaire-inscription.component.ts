import {Component, OnInit} from '@angular/core';
import {FormulaireInscriptionService} from "../../controller/services/formulaireinscription.service";
import {FormulaireInscription} from "../../controller/model/formulaire-inscription.model";

@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.component.html',
  styleUrls: ['./formulaire-inscription.component.css']
})
export class FormulaireInscriptionComponent implements OnInit {
  public formInscription : FormulaireInscription = {
    id: null,
    nom: '',
    dateNaissance: null,
    adresse: '',
    contact: '',
    typeHandicap: '',
    besoins: '',
    dateSoumission : null,
    isProcessed: false,
    isValidated: false
  };

  constructor(private formulaireInscriptionService: FormulaireInscriptionService) {}

  ngOnInit() {}

  soumettreFormulaire() {



    this.formulaireInscriptionService.soumettreFormulaire(this.formInscription).subscribe(
      () => {
        alert("Formulaire soumis avec succès !!");
      },
      error => {
        alert("Impossible de soumettre le formulaire");
      }
    );
  }
}
