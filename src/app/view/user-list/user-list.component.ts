import {Component, OnInit} from '@angular/core';
import {User} from "../../controller/model/user.model";
import {UserService} from "../../controller/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteById(userId: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      console.log(userId);
      this.userService.deleteUser(userId).subscribe(
        () => {
          // Suppression réussie, recharger la liste des utilisateurs
          this.loadUsers();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  update(userId: number) {
    this.router.navigate(['/admin/user-edit', userId]);
  }
}
