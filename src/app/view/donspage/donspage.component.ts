import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {DonService} from "../../controller/services/don.service";
import {Don} from "../../controller/model/don.model";
import {format, parse} from "date-fns";
import {ApiResponse} from "../../controller/model/apiresponse.model";
import {PaypalService} from "../../controller/services/paypal.service";

@Component({
  selector: 'app-donspage',
  templateUrl: './donspage.component.html',
  styleUrls: ['./donspage.component.css']
})
export class DonspageComponent implements OnInit{
  donFormGroup! : FormGroup;
  constructor(private fb : FormBuilder, private donService: DonService, private  paypalService : PaypalService) {

    this.donFormGroup = this.fb.group({
      noms : this.fb.control(null , [Validators.required]),
      email : this.fb.control(null, [Validators.required, , Validators.email]),
      adresse : this.fb.control(null , [Validators.required]),
      telephone : this.fb.control(null , [Validators.required]),
      ville : this.fb.control(null , [Validators.required]),
      codePostal : this.fb.control(""),
      pays : this.fb.control(null , [Validators.required]),
      montantDon : this.fb.control(null, [Validators.required]),

    });
  }
  ngOnInit(): void {
  }

  sendDonationForm() {
    if (this.donFormGroup.invalid) {
      return;
    }

    const formValues = this.donFormGroup.value;
    const don: Don = {
      id: null,
      nomDonateur: formValues.noms,
      email: formValues.email,
      adresse: formValues.adresse,
      telephone: formValues.telephone,
      codePostal: formValues.codePostal,
      montant: formValues.montantDon,
      villeDonateur: formValues.ville,
      paysDonateur: formValues.pays,
      date: format(new Date(), 'dd/MM/yyyy')
    };

    const dateSoumission = new Date();
    don.date = format(dateSoumission, 'dd/MM/yyyy HH:mm:ss');

    this.donService.saveDonInfos(don).subscribe(
      (response : ApiResponse) => {
        // Gère la réponse du backend si nécessaire
        alert('Don enregistré avec succès');
      },
      (error) => {
        // Gère les erreurs de l'appel au backend
        console.error('Erreur lors de l\'enregistrement du don:', error);
      }
    );

    this.donFormGroup.reset();

    const montantDon = this.donFormGroup.value.montantDon;

    // ...

    this.paypalService.requestPayment(montantDon).subscribe(
      (response) => {
        // Traitez la réponse de la demande de paiement
        console.log(response);
        // Redirigez l'utilisateur vers la page de paiement PayPal
        window.location.href = response.redirectUrl;
      },
      (error) => {
        // Gérez les erreurs de la demande de paiement
        console.error(error);
      }
    );
  }



  public getErrorMessage( errors: ValidationErrors) : any{
    if(errors['required']){
      return "Veuillez renseigner ce champ svp !";
    }
    else if(errors['email']){
      return "Veuillez entrer une adresse email correct svp !";
    }

    else return "";
  }

}
