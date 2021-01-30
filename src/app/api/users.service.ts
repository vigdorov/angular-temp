import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {mapEntry} from '@angular/compiler/src/output/map_util';
import {map} from 'rxjs/operators';

const ENDPOINT = 'https://reqres.in/api';

type UserListResponse = {
  data: Array<{
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }>;
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) {
  }

  request(page: number = 1): Observable<UserListResponse['data']> {
    return this.http.get<UserListResponse>(`${ENDPOINT}/users?page=${page}`).pipe(
      map(val => val.data)
    );
  }
}
