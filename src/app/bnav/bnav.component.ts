import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-bnav',
  templateUrl: './bnav.component.html',
  styleUrls: ['./bnav.component.css']
})
export class BnavComponent implements OnInit {
  isLogged = false;


  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else{
     this.isLogged = false; 
    }
  }
   
  onLogOut():void {
    this.tokenService.logOut();
      window.location.reload();
  }

  login() {
    this.router.navigate(['/login'])
  }
}
