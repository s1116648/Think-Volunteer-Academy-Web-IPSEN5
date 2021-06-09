import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { Student } from "./student.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StudentService {

  constructor(
      private http: HttpClient,
  ) { }

  getUnassignedStudents(): Observable<Student[]>{
      return this.http.get<any>(`/students`).pipe(
          map((responseData: { items: Student[] }) => {
              return responseData.items.filter(student => student.coach == null);
          })
      );
  }

  getStudentsByCoach(coachId: string): Observable<Student[]>{
    return this.http.get<any>(`/coaches/${coachId}/students`).pipe(
        map((responseData: { items: Student[] }) => {
          return responseData.items;
        })
    );
  }

  addStudentToCoach(coachId: string, studentUserId: string): Observable<Student>{
      return this.http
          .post<Student>(`/coaches/${coachId}/students`, {
              userId: studentUserId,
          });
  }
}
