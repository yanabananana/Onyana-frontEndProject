import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Response } from '../component/users/interface/response.interface';
import { User } from '../component/users/interface/user.interface';


@Injectable({providedIn: 'root'})
export class UserService {
  private readonly apiUrl: string = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getUsers(size: number = 10): Observable<any> {
    return this.http.get<any>(`$(this.apiUrl}/?results=${size}`).pipe(
      map(response => this.processResponse(response)) 
    ); 
  }

  getUser(uuid: number = 1): Observable<any> {
    return this.http.get<any>(`$(this.apiUrl}/?uuid=${uuid}`);
  }

  private processResponse(response: Response): Response { 
    return {
      info: {...response.info },
      results: response.results.map((user: any) => (<User>{
        uuid: user.login.uuid,
        firstName:user.first.name,
        lastName: user.last.name,
        email: user.email,
        username: user.login.username,
        gender: user.gender,
        address: `${user.location.street.number},${user.location.city},${user.location.country}`,
        dateofBirth: user.dob.date,
        phone: user.phone,
        imageUrl: user.picture.medium,
        coordinate: {latitude:+user.location.coordinates.latitude, longitude: +user.location.coordinates.longitude }    
      }))
    };
  }
} 