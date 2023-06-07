import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../controller/services/user.service";
import {User} from "../../../controller/model/user.model";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: number;
  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      roles: [[]]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.getUserById();
    });
  }

  getUserById() {
    this.userService.getUserById(this.userId).subscribe(
      (user: User) => {
        this.userForm.patchValue({
          username: user.username,
          password: user.password,
          roles: Array.from(user.roleSet)
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onUpdate() {
    if (this.userForm.invalid) {
      return;
    }

    /*console.log(this.userId)
    console.log(this.userForm.value.username)
    console.log(this.userForm.value.password)
    console.log(new Set(this.userForm.value.roles))*/

    const user = new User();
    //user.userId = this.userId;
    user.username = this.userForm.value.username;
    user.password = this.userForm.value.password;
    user.roleSet = new Set(this.userForm.value.roles);

    this.userService.updateUser(user,this.userId ).subscribe(
      (updatedUser: User) => {
        console.log(updatedUser);
        this.userForm.reset()
        // Effectuez les actions nécessaires après la mise à jour réussie
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
