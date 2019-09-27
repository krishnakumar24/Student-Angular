import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output()sideNavClicked = new EventEmitter<string>();

  constructor() { }
  ngOnInit() { }

  onShowAllClicked() {
    this.sideNavClicked.emit('showAll');
  }
  onFindStudentClicked() {
    this.sideNavClicked.emit('search');
  }
  onDeleteStudentClicked() {
    this.sideNavClicked.emit('delete');
  }
  onAddStudentClicked() {
    this.sideNavClicked.emit('add');
  }

}
