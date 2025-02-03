import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    return [
      {
        name: 'John Doe',
        email: 'john@example.com',
        age: 30
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        age: 25
      },
      {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        age: 35
      }
    ];
  }


}
