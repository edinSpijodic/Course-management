import { Component, OnInit } from '@angular/core';
import {TeachersService} from './core/teachers.service';


@Component({
  selector: 'cm-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: Array<any>;

  constructor(
    private teachersService: TeachersService
  ) { }

  ngOnInit() {
    this.teachers = this.teachersService.getAllTeachers();
  }

}
