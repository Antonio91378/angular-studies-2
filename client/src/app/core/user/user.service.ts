import { Injectable } from '@angular/core';
import { LocalStorageService } from './../localStorage/local-storage.service';
import { Subject } from 'rxjs';
import { User } from './user';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new Subject<User>();

  constructor(private localStorageService: LocalStorageService) {}

  setToken(token: string) {
    this.localStorageService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {}

  private decodeAndNotify() {
    const token = this.localStorageService.getToken();
    const user = jwt_decode(token!) as User;
  }
}
