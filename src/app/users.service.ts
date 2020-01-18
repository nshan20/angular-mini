import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';


@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');


        return users.map(u => {
          return {
            name: u.name.first + '' + u.name.last
          };
        });
  }

  users = [
    {name: 'WFM 1'},
    {name: 'WFM 2'},
    {name: 'WFM 3'},
    {name: 'WFM 4'},
    {name: 'WFM 5'},
    {name: 'WFM 6'},
    {name: 'WFM 7'}
  ];
}
