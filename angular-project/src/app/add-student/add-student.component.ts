import { Student } from './../model/Student.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  name='';
  department='';
  email='';
  body;
  responseData={};
  // toggling the class in add student component
  toggleClass=false;
  
  url='http://localhost:8080/api/student-add';
  
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    const obj = {
      name: this.name,
      department: this.department,
      email: this.email
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    if(obj.name!=='' && obj.department!=='' && obj.email!==''){
      this.http.post(this.url, obj, httpOptions)
      .subscribe(res => this.helper(res));
      this.name = '';
      this.department = '';
      this.email = '';
    }else{
      alert("Please enter all the fields")
    }




  }

helper(res){
  this.responseData =res;
  this.toggleClass=true;
}



// addStudent(student : Student){
//   return this.http.post<Student>(this.heroesUrl, hero, httpOptions)
// .pipe(
//   catchError(this.handleError('addHero', hero))
// );
// }

}
