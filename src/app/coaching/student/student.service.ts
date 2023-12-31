import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { filter, map } from "rxjs/operators";
import { Student } from "./student.model";
import { HttpClient } from "@angular/common/http";
import { User } from "../../user/user.model";

@Injectable({
  providedIn: "root"
})
export class StudentService {
    addedStudentsToCoach: Subject<Student[]> = new Subject<Student[]>();

  constructor(
      private http: HttpClient,
  ) { }

  getUnassignedStudents(): Observable<User[]>{
      return this.http.get<any>(`/users/coachless`).pipe(
          map((responseData: { items: User[] }) => {
              return responseData.items;
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

  removeStudentFromCoach(coachId: string, userId: string): Observable<null>{
      console.log("yeet");
      return this.http.delete<null>(`/coaches/${coachId}/students/${userId}`);
  }
}
