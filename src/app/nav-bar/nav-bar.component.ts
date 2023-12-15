import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {

  
 isAdult:boolean = true;

 constructor( private router: Router) {}

changed(isAdult:boolean ) {
     this.router.navigate(['/home', isAdult])
}



 

  
onClick() {
 this.router.navigate(['/home']);

}





  
}
