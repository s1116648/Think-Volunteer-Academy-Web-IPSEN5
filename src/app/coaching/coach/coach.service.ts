import { Injectable } from "@angular/core";
import { Coach } from "./coach.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Role } from "../../role/role.model";
import { HttpClient } from "@angular/common/http";
import { User } from "../../user/user.model";

@Injectable({
	providedIn: "root"
})
export class CoachService {

	constructor(private http: HttpClient) {
	}

	getCoaches(): Observable<Coach[]> {
		return this.http.get<any>("/coaches").pipe(
			map((responseData: { items: Coach[] }) => {
				return responseData.items;
			})
		);
	}

	getCoachByID(id: string): Observable<Coach> {
		return this.http.get<any>(`/coaches/${id}`).pipe(
			map((responseData: { coach: Coach }) => {
				return responseData.coach;
			})
		);
	}

	getCoachOfUser(userID: string): Observable<Coach> {
		return this.http.get<Coach>(`/users/${userID}/coach`);
	}

	getCoachByUserId(userId: string): Observable<Coach> {
		return this.http.get<any>(`/coaches/${userId}`);
	}

	create(user: User): Observable<Coach> {
		return this.http
			.post<Coach>("/coaches", {
				userId: user.id
			});
	}

	delete(coachId: string): Observable<void> {
		return this.http.delete<void>(`/coaches/${coachId}`);
	}
}
