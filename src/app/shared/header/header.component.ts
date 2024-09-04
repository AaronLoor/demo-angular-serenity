import { LoginService } from 'src/app/services/auth/login.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserRequest } from 'src/app/services/auth/userRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy{
userLoginOn: boolean = false
userData?: UserRequest;
constructor(private loginService:LoginService,
            private router:Router,
){


}

  ngOnInit(): void {
    this.loginService.currenUserLoginOn.subscribe({
      next:(userLoginOn)=>{
        this.userLoginOn = userLoginOn;
      }
    });
    this.loginService.currentUserDAta.subscribe({
      next:(userData)=>{
        this.userData=userData;
      }
    });
    if (!this.userLoginOn){
      this.router.navigateByUrl('inicio-sesion');
    }
  }

  ngOnDestroy(): void {
    this.loginService.currentUserDAta.unsubscribe();
    this.loginService.currenUserLoginOn.unsubscribe();
  }

  singOut(){

    this.loginService.logout();
    console.log('Usuario cerrado sesión');
    this.userLoginOn=false;
    this.router.navigateByUrl('inicio-sesion');
    //this.loginForm.reset();
  }
}
