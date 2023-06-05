import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../controller/services/authentication.service";
import {throwError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  searchFormGroup!: FormGroup;
  errorMessage!: string;

  constructor(private fb: FormBuilder, private authService: AuthenticationService,
              private router: Router) {
    this.searchFormGroup = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control(""),
    })
  }

  ngOnInit(): void {
  }


  handleLogin2() {
    let username = this.searchFormGroup.value.username;
    let password = this.searchFormGroup.value.password;

    this.authService.login(username, password).subscribe(
      response => {
        const token = response.token;
        const username = response.username;
        const roles = response.roles;
        localStorage.setItem('token', token);

        if(roles.includes("ADMIN")){
          this.router.navigateByUrl("/admin")
        }
        else {
          this.router.navigateByUrl("/")
        }


        // ... Faites ce que vous voulez avec les données ...
      },
      error=>{
        this.errorMessage = error

      }
    );
  }

  public handleLogin() {

    let username = this.searchFormGroup.value.username;
    let password = this.searchFormGroup.value.password;


    this.authService.login(username, password).subscribe({
      next : (data)=>{

        const token = data.token;
        const username = data.username;
        const roles = data.roles;
        this.authService.authenticatedUser = {username : username, roles : roles};
        localStorage.setItem('token', token);
        this.authService.authenticateUser(data).subscribe({
          next : (data)=>{
            if(this.authService.authenticatedUser.roles.includes("ADMIN")){
              this.router.navigateByUrl("/admin")
            }
            else{
              this.router.navigateByUrl("/");
            }

          },
          error : (err)=>{
            this.errorMessage = "Nom d'utilisateur ou mot de passe incorrect";
          }
        })
      },
      error : (err)=>{
        this.errorMessage = "Nom d'utilisateur ou mot de passe incorrect";
      }
    })
  }
}
