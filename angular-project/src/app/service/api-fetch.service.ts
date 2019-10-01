import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFetchService {

  constructor(private http:HttpClient) { }

  showAll(){
    return this.http.get('http://localhost:8080/api/students');
  }
  search(searchId){
    return this.http.get('http://localhost:8080/api/students/'+searchId);
  }
  // addStudent(){
  //   return this.http.get('http://localhost:8080/api/students');
  // }
  // delete(){
  //   return this.http.get('http://localhost:8080/api/students');
  // }

  
}
