import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchId = '';
  url: string;
  responseData: any = [];
  //to show or not using structural directives
  toggleClass = false;
  show=false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onSearchClicked() {
    if(this.searchId!==''){
    //for next iteration it should be reset
    this.url = '';
    this.url = 'http://localhost:8080/api/students/' + this.searchId;
    this.searchId = '';
    console.log(this.url);
    console.log(this.searchId);
    return this.http.get(this.url).subscribe(response => this.dataEntry(response));
    }
  }

  dataEntry(response) {
    if(response!==null){
      this.toggleClass=true;
    this.responseData = response;
    console.log(this.responseData);
    }else{
      this.toggleClass=false;
      alert("No record found")

    }



    // let jsonObject = response.json() as Object;
    // let fooInstance = plainToClass(Models.Foo, jsonObject);
    // return fooInstance;
  }


}
