import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students = [
    {
      id: 1,
      name: 'John Doe',
      country: 'Canada',
      email: 'Lucio_Hettinger@annie.ca',
      phoneNumber: '23505-1337'
    },
    {
      id: 2,
      name: 'Alice Smith',
      country: 'UK',
      email: 'Julianne.OConner@kory.org',
      phoneNumber: '53919-4257'
    },
    {
      id: 3,
      name: 'Kendrick Lamar',
      country: 'Jamaica',
      email: 'Telly.Hoeger@billy.biz',
      phoneNumber: '58804-1099'
    },
    {
      id: 4,
      name: 'Kobe Bryant',
      country: 'USA',
      email: 'Nathan@yesenia.net',
      phoneNumber: '59590-4157'
    },
    {
      id: 5,
      name: 'Leanne Graham',
      country: 'USA',
      email: 'Sincere@april.biz',
      phoneNumber: '92998-3874'
    },
    {
      id: 6,
      name: 'Ervin Howell',
      country: 'USA',
      email: 'Shanna@melissa.tv',
      phoneNumber: '90566-7771'
    }
  ];
  constructor() { }

   getAllStudents() {
    return this.students;
  }
}
