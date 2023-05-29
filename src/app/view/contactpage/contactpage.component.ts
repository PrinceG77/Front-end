import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit{

  contactFormGroup! : FormGroup;

  constructor(private fb : FormBuilder, private contactService : ContactService) {

    this.contactFormGroup = this.fb.group({
      noms : this.fb.control(null , [Validators.required]),
      email : this.fb.control(null, [Validators.required, , Validators.email]),
      objet : this.fb.control(null),
      telephone : this.fb.control(null , [Validators.required]),
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


  sendEmail(FormData : any) {

   console.log(FormData);
    this.contactService.sendEmail(FormData).subscribe(
      response => {
        location.href = 'https://mailthis.to/confirm'
        this.contactFormGroup.reset();
        //alert('Message envoyé avec succès');
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      }
    );
  }
}
