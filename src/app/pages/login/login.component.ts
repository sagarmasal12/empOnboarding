import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginModel} from '../../core/models/user.model';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:LoginModel= new LoginModel();
   

  router = inject(Router);

  onLogin(){
    debugger
    if(this.loginObj.email == "admin@gmail.com" && this.loginObj.mobile=="1234"){
      this.router.navigateByUrl("/dashboard");
    }else{
      alert('Wrong Credential')
    }
  }
  
}
// class LoginModel {
//   email:string;
//   password:string;

//   constructor() {
//     this.email='';
//     this.password='';
//   }
// }
