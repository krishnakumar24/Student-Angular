import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  deleteId = '';
  url: string;
  check: boolean;
  msg = ''
  //toggling for ng-if
  toggleMsg = false;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  onDeleteClicked() {
    this.url = '';
    this.toggleMsg = false;
    this.url = 'http://localhost:8080/api/student-delete/' + this.deleteId;

    console.log(this.url);
    console.log(this.deleteId);

    //checks whether the given id is null or not
    if(this.deleteId.length>0){
      //promtps to confirm to delete the selected id
      if (confirm("Are you sure you want to delete " + this.deleteId)) {
        this.deleteId = '';
        return this.http.get(this.url).subscribe(response => this.helper(response));
      } else {
        this.deleteId = '';
      }
    }
    

  }
  helper(response) {
    this.check = response;
    console.log("printing check boolean:" + this.check)
    if (this.check) {
      console.log("successfully deleted")
      this.msg = 'successfully deleted'
      this.toggleMsg = true;
    } else {
      console.log("there is no such id exists")
      this.msg = 'there is no such id exists'
      this.toggleMsg = true;
    }

  }
}
