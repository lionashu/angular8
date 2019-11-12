import { from } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }
  apiData() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
  }
}
