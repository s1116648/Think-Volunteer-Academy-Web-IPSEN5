import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Coach } from "../coach/coach.model";
import { map } from "rxjs/operators";
import { Student } from "./student.model";
import { HttpClient } from "@angular/common/http";
import { Role } from "../../role/role.model";

@Injectable({
  providedIn: "root"
})
export class StudentService {

  constructor(private http: HttpClient) { }

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

  removeStudentFromCoach(coachId: string, studentId: string): Observable<void>{
      return this.http.delete<void>(`/coaches/${coachId}/students/${studentId}`);
  }
}
