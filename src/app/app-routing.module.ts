import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, ChildrenOutletContexts} from '@angular/router';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';
import { CourseComponent } from './course/course.component';
import {StudentsComponent} from './students/students.component';
import {TeachersComponent} from './teachers/teachers.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [

    {
        path: '',
        component: NavLayoutComponent,
        children: [
            {
                path: 'course',
                component: CourseComponent
            },
            {
                path: 'students',
                component: StudentsComponent
            },
            {
                path: 'teachers',
                component: TeachersComponent
            }
        ]
    },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    RouterModule
    ]
})

export class AppRoutingModule {}
