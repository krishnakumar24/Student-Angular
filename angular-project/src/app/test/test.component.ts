import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  msg;
  selectedFiles;
	currentFile: File;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.currentFile = this.selectedFiles.item(0);
    this.uploadFile(this.currentFile).subscribe(response => {
		this.selectedFiles.value = '';
     if (response instanceof HttpResponse) {
		 this.msg = response.body;
        console.log(response.body);
      }	  
    });    
  }


  uploadFile(file: File){
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST','http://localhost:8080/api/upload', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }
}
