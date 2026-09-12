import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentsComponent,
    StudentTableComponent,
    AddStudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }