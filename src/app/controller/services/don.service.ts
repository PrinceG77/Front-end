import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Don} from "../model/don.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DonService {

  private baseUrl = "http://localhost:8072/api/v1/dons";
  private _don : Don;
  private _dons : Array<Don>;

  constructor(private httpClient: HttpClient, private router: Router) { }


  public saveDonInfos(don: Don): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/add-donation`, don);
  }
  get don(): Don {
    if(this._don == null)
    {
      this._don = new Don();
    }

    return this._don;
  }

  set don(value: Don) {
    this._don = value;
  }

  get dons(): Array<Don> {

    if(this._dons == null)
    {
      this._dons = new Array<Don>();
    }
    return this._dons;
  }

  set dons(value: Array<Don>) {
    this._dons = value;
  }


}
