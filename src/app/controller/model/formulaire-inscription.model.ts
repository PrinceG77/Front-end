export class FormulaireInscription {
  id: number;
  nom: string;
  dateNaissance: string; // Utiliser le type 'string' au lieu de 'Date'
  adresse: string;
  contact: string;
  typeHandicap: string;
  besoins: string;
  dateSoumission: string; // Utiliser le type 'string' au lieu de 'Date'
  isProcessed: boolean;
  isValidated: boolean;
}
