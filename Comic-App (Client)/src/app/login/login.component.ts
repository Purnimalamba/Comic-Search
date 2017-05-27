import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public MyService:MyServiceService,public router:Router) { }
  Name;
  Password;
  form;
  
onsubmit(form){
  this.MyService.PostMongo(form.value).subscribe(res=>{
    
    if(res.body.Role=="superadmin"){

      this.router.navigate(['superadmin']);

    }else if(res.body.Role=="admin"){
      this.router.navigate(['admin']);
    } else if(res.body.Role=="user"){

      this.router.navigate(['user']);
      

    }
  })

}
  ngOnInit() {
  }

}
