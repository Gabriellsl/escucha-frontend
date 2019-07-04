import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cost } from '../models/Interfaces';
import { HttpClient } from '@angular/common/http';
import defaultToken from '../defaultToken';

@Injectable({
  providedIn: 'root'
})
export class CostService {

  constructor(private http: HttpClient) { }



  getTotalCost():Observable<any>{

    const options = {
      headers: {
        authorization:defaultToken
      }
    }

     return this.http.get<Cost>('http://192.168.137.1:3000/mycost', options);
  }

}
