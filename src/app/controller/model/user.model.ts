import {Role} from "./role.model";
import {Validators} from "@angular/forms";

export class User {
  public userId: number;
  public username: string;
  public password: string;
  public roleSet: Set<Role>;




}
