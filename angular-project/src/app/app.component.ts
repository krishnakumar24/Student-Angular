import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showAll=false;
  search=false;
  delete=false;
  add=false;


  onSideNavClicked(option: string) {
    if (option === 'showAll') {
      this.showAll=true;
      this.search=false;
      this.delete=false;
      this.add=false;

    }
    if (option === 'search') {
      this.showAll=false;
      this.search=true;
      this.delete=false;
      this.add=false;
    }
    if (option === 'delete') {
      this.showAll=false;
      this.search=false;
      this.delete=true;
      this.add=false;
    }
    if (option === 'add') {
      this.showAll=false;
      this.search=false;
      this.delete=false;
      this.add=true;
    }
  }
}
