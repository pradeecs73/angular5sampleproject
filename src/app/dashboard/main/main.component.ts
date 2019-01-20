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

  /*saveUsers(){
    this.prospectsservice.saveUsersList({}) 
    .subscribe((response)=>{console.log(response)},
    (error)=>{console.log(error)}
    );
  }*/

  /*this.prospectsservice.getAllUsers() 
    .subscribe((alluserlist:any)=>
    {
       this.alluserlist=alluserlist;
    },
    (error)=>{console.log(error)}
    );*/

    /*this.prospectsservice.deletedocument({}) 
    .subscribe((response)=>{console.log(response)},
    (error)=>{console.log(error)}
    );*/

  logout(){
    localStorage.setItem("loggedIn","0");
    this.router.navigate(['/login']);
  }

}
