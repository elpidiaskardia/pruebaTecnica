import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  getData(origin : string, destination: string): Observable<any> {
    return this.httpClient.get(`/api/getJourney/${origin}/${destination}`);
  }
}
