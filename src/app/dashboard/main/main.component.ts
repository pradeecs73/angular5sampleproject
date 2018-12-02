import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user:any=[{"name":"pradeep"},{"name":"prasad"},{"name":"suresh"},{"name":"ramesh"}];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem("loggedIn","0");
    this.router.navigate(['/login']);
  }

}
