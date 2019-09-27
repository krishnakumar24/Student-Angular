import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { map } from 'rxjs/Rx';
// import { map } from 'rxjs/add/operator/map';

import { Student } from '../model/Student.model';


@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  array:Object;



  constructor(private http :HttpClient) { 

  }

  ngOnInit() {
    return this.http.get('http://localhost:8080/api/students').subscribe(response=>this.print(response));
  }
  // method():Observable<Student[]>{
  //   return this.http.get('http://localhost:8080/students').map(res=>{
  //     return res.json().results.map(item=>{
  //       return new Student(
  //       item.id,
  //       item.name,
  //       item.department,
  //       item.email
  //       );
  //     });
  //   });
  // }



print(response){
  this.array=response;
}

  
}
