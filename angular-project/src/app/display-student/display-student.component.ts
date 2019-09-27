import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
  @Input() student ;

  constructor() { }

  ngOnInit() {
    
  }
  onClicked(){
    console.log(this.student);
  }


}
