import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';

@Injectable()
export class MyServiceService {

  constructor(public GitHttp : Http) { }
PostMongo(form){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
   
    
    return this.GitHttp.post("http://localhost:2000/api/u1/verify", form, headers).map((res: Response) => res.json());
  
}

PostUser(form){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
 
    
    return this.GitHttp.post("http://localhost:2000/api//u1/addUser", form, headers).map((res: Response) => res.json());
  
}
getUsers(){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  
    
    return this.GitHttp.get("http://localhost:2000/api//u1/addUser").map((res: Response) => res.json());
  
}

DeleteUsers(id){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  console.log(id);
    
    return this.GitHttp.post("http://localhost:2000/api/u1/deleteUser",id,headers).map((res: Response) => res.json());
  
}


}

