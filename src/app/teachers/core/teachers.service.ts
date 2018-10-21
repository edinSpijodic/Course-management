import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  teachers = [
    {
      id: 1,
      name: 'Alex Smith',
      country: 'Canada'
    },
    {
      id: 2,
      name: 'Peter Young',
      country: 'USA'

    },
    {
      id: 3,
      name: 'Ben Simmons',
      country: 'Denmark'
    },
    {
      id: 4,
      name: 'Ashley Trump',
      country: 'Italy'
    }
  ];
  constructor() { }

   getAllTeachers() {
    return this.teachers;
  }
}
