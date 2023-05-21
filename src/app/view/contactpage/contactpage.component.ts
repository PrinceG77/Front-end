import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit{

  contactFormGroup! : FormGroup;

  constructor(private fb : FormBuilder) {

    this.contactFormGroup = this.fb.group({
      noms : this.fb.control(null , [Validators.required]),
      email : this.fb.control(null, [Validators.required, , Validators.email]),
      objet : this.fb.control(null),
      telephone : this.fb.control(null),
      message : this.fb.control(null, [Validators.required]),

    });
  }
  ngOnInit(): void {
  }

  public getErrorMessage(name: string, errors: ValidationErrors) : any{
    if(errors['required']){
      return "Veuillez remplir ce champ svp !";
    }
    else if(errors['email']){
      return "Veuillez entrer une adresse email correct svp !";
    }

    else return "";
  }
  sendMessage() {
    this.contactFormGroup.reset();
  }
}
