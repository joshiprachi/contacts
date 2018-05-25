import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import{User} from './user';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

/*
@Injectable({
  providedIn: 'root'
})
*/

@Injectable()
export class UserService {

  constructor(private http: Http) { }

 
  //login method
  login(user)
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/login',user,{headers:headers})
      //.map(res => res.json());
      .pipe(map(res => res.json()));
  } 

 
}
