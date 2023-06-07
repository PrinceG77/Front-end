import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormulaireInscription} from "../model/formulaire-inscription.model";

@Injectable({
  providedIn: 'root'
})
export class FormulaireInscriptionService {
  private baseUrl = "http://localhost:8072/api/v1/inscription-forms";

  constructor(private http: HttpClient) {}

  soumettreFormulaire(formulaire: FormulaireInscription): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, formulaire);
  }

  getListeFormulairesExcel(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/export-excel`, { responseType: 'blob' });
  }
}
