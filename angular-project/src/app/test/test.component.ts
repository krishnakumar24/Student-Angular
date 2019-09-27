import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name;
  constructor() { }

  ngOnInit() {
  }
  method(){
    if(confirm("helooo")){
      this.name='tested ok';
    }
    else{
      this.name='not sure';
    }

  }

}
