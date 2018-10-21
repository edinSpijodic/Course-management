import { Component, OnInit } from '@angular/core';
import {StudentsService} from './core/students.service';

@Component({
  selector: 'cm-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

   students: Array<any>;


  constructor(
    private studentsService: StudentsService
  ) {}

  ngOnInit() {
    this.students = this.studentsService.getAllStudents(
    );
  }
}
