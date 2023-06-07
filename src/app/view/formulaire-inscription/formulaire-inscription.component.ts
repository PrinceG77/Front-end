import {Component, OnInit} from '@angular/core';
import {FormulaireInscriptionService} from "../../controller/services/formulaireinscription.service";
import {FormulaireInscription} from "../../controller/model/formulaire-inscription.model";
import {format, isValid, parse, parseISO, set} from 'date-fns';

@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.component.html',
  styleUrls: ['./formulaire-inscription.component.css']
})
export class FormulaireInscriptionComponent implements OnInit {
  public formInscription: FormulaireInscription = {
    id: null,
    nom: '',
    dateNaissance: null,
    adresse: '',
    contact: '',
    typeHandicap: '',
    besoins: '',
    dateSoumission: null,
    isProcessed: false,
    isValidated: false
  };

  constructor(private formulaireInscriptionService: FormulaireInscriptionService) {}

  ngOnInit() {}

  soumettreFormulaire() {


    const dateNaissance = parse(this.formInscription.dateNaissance, 'yyyy-MM-dd', new Date());
    this.formInscription.dateNaissance = format(dateNaissance, 'dd/MM/yyyy');


    // Convertir la date de soumission en objet Date
    const dateSoumission = new Date();
    this.formInscription.dateSoumission = format(dateSoumission, 'dd/MM/yyyy HH:mm:ss');



    console.log(this.formInscription.dateNaissance);
    console.log(this.formInscription.dateNaissance);
    this.formulaireInscriptionService.soumettreFormulaire(this.formInscription).subscribe(
      (response: string) => {
        alert(response); // Afficher le message de succès

        // Réinitialiser le formulaire après soumission
        this.formInscription = {
          id: null,
          nom: '',
          dateNaissance: null,
          adresse: '',
          contact: '',
          typeHandicap: '',
          besoins: '',
          dateSoumission: null,
          isProcessed: false,
          isValidated: false
        };
      },
      (error) => {
        console.log(error); // Afficher les détails de l'erreur dans la console
        alert("Impossible de soumettre le formulaire");
      }
    );
  }
}
