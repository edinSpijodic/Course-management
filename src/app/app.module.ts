import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/core/course.service';
import { TeachersComponent } from './teachers/teachers.component';
import {TeachersService} from './teachers/core/teachers.service';
import { StudentsComponent } from './students/students.component';
import {StudentsService} from './students/core/students.service';
import { from } from 'rxjs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLayoutComponent,
    CourseComponent,
    TeachersComponent,
    StudentsComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatTableModule,
    HttpClientModule

  ],
  providers: [CourseService, StudentsService, TeachersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
