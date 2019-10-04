import { ApiFetchService } from './../service/api-fetch.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
// import (ResponseContentType) from '@angular/'
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
  @ViewChild('pdfpreview',{static: false}) public pdfpreview;

  array:Object;
  studentId:string;
  studentName:string;
  fileUrl="";
  pdfsrc='http://localhost:8080/api/file_download/6';
  isResumePresent=false;
  isUploaded=false;
  togglePreview=false;
  // studentIdSelected;


  constructor(private fetch:ApiFetchService,
              private http:HttpClient) { }

              // constructor(private http: HttpClient) {
              //   let url = "api/document/getmypdf";
              //   this.downloadFile(url).subscribe(
              //       (res) => {
              //           this.pdfViewer.pdfSrc = res; // pdfSrc can be Blob or Uint8Array
              //           this.pdfViewer.refresh(); // Ask pdf viewer to load/refresh pdf
              //       }
              //   );
              // }



  ngOnInit() {
    return this.fetch.showAll().subscribe(response=>{this.array=response});
  }
//code for uploading files
msg;
selectedFiles;
currentFile: File;

selectFile(event) {
  this.selectedFiles = event.target.files;
  // this.studentId=this.studentIdSelected;
  console.log(this.studentId)
}

  upload() {
    this.currentFile = this.selectedFiles.item(0);
    // console.log("checking file type"+this.renameFilename(this.currentFile.type))
    if (this.renameFilename(this.currentFile.type) === 'pdf') {
      this.currentFile = new File([this.currentFile], this.studentId + "." + this.renameFilename(this.currentFile.type), { type: this.currentFile.type });
      this.uploadFile(this.currentFile).subscribe(response => {
        this.selectedFiles.value = '';
        if (response instanceof HttpResponse) {
          this.msg = response.body;
          console.log(response.body);
          if (this.msg === this.studentId + ".pdf") {
            // for displaying success message 
            this.isUploaded = true;
            this.isResumePresent=true;
          }
        }
      });
    }else{
      alert("Not supported file format,please check ")
    }


  }


uploadFile(file: File){
  const formdata: FormData = new FormData();
  formdata.append('file', file,);
  const req = new HttpRequest('POST','http://localhost:8080/api/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
  });

  return this.http.request(req);
 }


 // to get the file extension from file type which is in the for image/png
 renameFilename(file){
  // return file.renameFilename ="YourNewfileName." + file.split('/').pop();
  file = file.substr((file.lastIndexOf('/') + 1));
  return file;
}
onStudentClicked(studentIdSelected:string,studentNameSelected:string){
  // this.isUploaded=false;
  this.togglePreview=true;
  this.studentId=studentIdSelected;
  this.studentName=studentNameSelected;
  // const element: HTMLElement = document.getElementById('preview') as HTMLElement
// element.innerHTML = "<iframe src = '../ViewerJS/#http://localhost:8080/api/file_download/3' width='520' height='350' allowfullscreen webkitallowfullscreen></iframe>"
     this.fileUrl="http://localhost:8080/api/file_download/"+this.studentId;
    // this.pdfsrc=this.fileUrl;
    this.helper();

    //some on refresh so purposely extra refresh methods called
    // this.pdfpreview.refresh();
    // this.pdfpreview.refresh();
    // this.pdfpreview.refresh();

}
//conversion pdf to blob
// helper(url){
//   this.http.get(url, { responseType: ResponseContent.Blob }).map(
//     (res) => {
//       return new Blob([res.blob()], { type: fileType });
//     });
// }
helper (){
    this.downloadFile(this.fileUrl).subscribe(
        (res) => {  
          console.log(res)
          if(res.size===0){ 
            this.isResumePresent=false;
          }else if(res.type==="application/pdf"){
            this.isResumePresent=true;
            this.togglePreview=false;
            this.pdfpreview.pdfSrc = res; // pdfSrc can be Blob or Uint8Array
            this.pdfpreview.refresh(); // Ask pdf viewer to load/refresh pdf
          }else{
            alert("unsuppported file found")
          }
        }
    );
}
downloadFile(url: string): any {
  return this.http.get(url, { responseType: 'blob' });
}
      // .pipe(
      //     map((result: any) => {
      //         return result;
      //     })
      // );

    download(){
      console.log(this.fileUrl)
      // this.http.get(this.fileUrl);
      window.location.href = this.fileUrl;
    }
    delete(){
      if(confirm("Are you sure you want to delete " + this.studentName+" resume")){
        return this.http.get("http://localhost:8080/api/delete_file/"+this.studentId).subscribe(response =>{
          if(response){
            this.pdfpreview.refresh();
          }else{
            alert("checking")
          }
        });
      }
      
    }
}







