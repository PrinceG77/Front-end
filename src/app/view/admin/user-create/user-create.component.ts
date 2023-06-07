import { Component } from '@angular/core';
import {User} from "../../../controller/model/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../controller/services/user.service";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      roles: [[]]
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    const user = new User();
    user.username = this.userForm.value.username;
    user.password = this.userForm.value.password;
    user.roleSet = this.userForm.value.roles.map((role: string) => ({ name: role }));


    this.userService.addUser(user)
      .subscribe(
        response => {
          console.log(response);
          alert("utilisateur ajouté avec succès");
          this.userForm.reset();
        },
        error => {
          console.error(error);
        }
      );
  }
}
