import {Component, OnInit} from '@angular/core';
import {FormulaireInscriptionService} from "../../controller/services/formulaireinscription.service";

@Component({
  selector: 'app-listes-formulaires',
  templateUrl: './listes-formulaires.component.html',
  styleUrls: ['./listes-formulaires.component.css']
})
export class ListeFormulairesComponent implements OnInit {
  constructor(private formulaireInscriptionService: FormulaireInscriptionService) {}

  ngOnInit() {}

  telechargerListeFormulaires() {
    this.formulaireInscriptionService.getListeFormulairesExcel().subscribe(
      (excelFile: Blob) => {
        // Téléchargement du fichier Excel
        const url = window.URL.createObjectURL(excelFile);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'liste-formulaires.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
      error => {
        // Gestion des erreurs lors du téléchargement du fichier Excel
      }
    );
  }
}
