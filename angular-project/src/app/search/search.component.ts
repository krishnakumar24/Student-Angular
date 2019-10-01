import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../service/api-fetch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchId = '';
  url: string;
  responseData: any = [];
  showAlert=false;
  //to show or not using structural directives
  toggleClass = false;
  show=false;
  constructor(private http: HttpClient,
              private apiFetchServise:ApiFetchService) { }

  ngOnInit() {
  }
  onSearchClicked() {
    if(this.searchId!==''){
    return this.apiFetchServise.search(this.searchId).subscribe(response => this.dataEntry(response));
    // return this.http.get(this.url).subscribe(response => this.dataEntry(response));
    }
  }

  dataEntry(response) {
    // if(response!==null){
    //   this.toggleClass=true;
    // this.responseData = response;
    // console.log(this.responseData);
    // this.showAlert=false;
    // }
    // else{
    //   this.toggleClass=false;
    //   this.showAlert=true;
      
    // }
    this.responseData=response;
    if(this.responseData.length!==0){
      this.toggleClass=true;
      this.showAlert=false;
    }
    else{
      this.toggleClass=false;
      this.showAlert=true;
    }

    // this.searchId='';
  }


}
