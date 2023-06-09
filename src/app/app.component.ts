import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./controller/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Front-end';

  constructor(public authService : AuthenticationService) {
  }

  ngOnInit(): void {
    this.authService.loadAuthenticatedUserFromLocalStorage();
  }

}
