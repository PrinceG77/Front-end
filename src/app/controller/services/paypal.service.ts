import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  private apiUrl = 'https://api.paypal.com'; // ou l'URL de l'API PayPal correspondante

  constructor(private http: HttpClient) { }

  // Méthode pour effectuer une demande de paiement à l'API PayPal
  requestPayment(amount: number) {
    const requestPayload = {
      amount: amount,
      // Autres paramètres de la demande de paiement
    };

    return this.http.post<any>(`${this.apiUrl}/payments`, requestPayload);
  }

  // Méthode pour exécuter le paiement une fois que l'utilisateur a accepté
  executePayment(paymentId: string, payerId: string) {
    const executePayload = {
      paymentId: paymentId,
      payerId: payerId
    };

    return this.http.post<any>(`${this.apiUrl}/payments/execute`, executePayload);
  }
}
