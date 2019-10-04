import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() pdfsrc :string;
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
