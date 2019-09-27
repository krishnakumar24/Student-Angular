import { ApiFetchService } from './../service/api-fetch.service';
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

  constructor(private fetch:ApiFetchService) { }

  ngOnInit() {
    return this.fetch.showAll().subscribe(response=>{this.array=response});
  }
}
