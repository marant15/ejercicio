import { Component, OnInit } from '@angular/core';
import data from '../../data.json';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  users = data.users;
  constructor() {}

  ngOnInit() {
  }

}
