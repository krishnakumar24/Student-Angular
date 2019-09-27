import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  // @Output()sideNavClicked = new EventEmitter<string>();

  constructor(private router:Router) { }
  ngOnInit() { }

  onShowAllClicked() {
    // this.sideNavClicked.emit('showAll');
    this.router.navigate(['/show-all']);
    
  }
  onFindStudentClicked() {
    // this.sideNavClicked.emit('search');
    this.router.navigate(['/search']);
  }
  onDeleteStudentClicked() {
    // this.sideNavClicked.emit('delete');
    this.router.navigate(['/delete']);

  }
  onAddStudentClicked() {
    // this.sideNavClicked.emit('add');
    this.router.navigate(['/add-student']);

  }

}
