import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-donspage',
  templateUrl: './donspage.component.html',
  styleUrls: ['./donspage.component.css']
})
export class DonspageComponent implements OnInit{
  donFormGroup! : FormGroup;
  constructor(private fb : FormBuilder) {

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
    this.donFormGroup.reset();
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
