export class FormulaireInscription {
  id: number;
  nom: string;
  dateNaissance: string; // Utiliser le type 'string' pour correspondre au modèle du backend
  adresse: string;
  contact: string;
  typeHandicap: string;
  besoins: string;
  dateSoumission: string; // Utiliser le type 'string' pour correspondre au modèle du backend
  isProcessed: boolean;
  isValidated: boolean;
}

