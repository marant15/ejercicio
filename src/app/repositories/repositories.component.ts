import { Component, OnInit, ElementRef } from '@angular/core';
import data from '../../data.json';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  users = data.users;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#69652B';
 }

}
