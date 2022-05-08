import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankingService {

  constructor(private http: HttpClient) { }

  getClientCardInformation(numCard){
    let params:HttpParams = new HttpParams().append("num_carte",numCard)
    return this.http.get('https://api-legacy.lacaisse.ma/getSoldeEkaFestival.php',{params})
  }
 
  getOrderId(numCard, montant){
    let params:HttpParams = new HttpParams().append("num_carte",numCard)
                                            .append("montant", montant)
    return this.http.get('https://ekafestival.lalivraison.ma/addRecharge.php',{params})                                        
  }

  
  
}
