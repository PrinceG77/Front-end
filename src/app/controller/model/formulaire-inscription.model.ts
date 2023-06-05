export class FormulaireInscription {
  public id : number;
  public name : string;
  public dateNaissance : Date;
  public adresse : string;
  public contact : string;
  public typeHandicap : string;
  public besoins : string;
  public dateSoumission : Date;

  public isProcessed : boolean;
  public isValidated : boolean;
}
