import { ResponseLogin } from './../../entities/response-login.entity';
import { Observable } from 'rxjs';
import { Login } from './../../entities/login.entity';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login(login :Login): Observable<ResponseLogin>{
    
  }
}
