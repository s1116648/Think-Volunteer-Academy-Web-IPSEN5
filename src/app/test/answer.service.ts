import {Injectable} from "@angular/core";
import {CreateAnswerDTO} from "./dto/create-answer.dto";
import {Subject} from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AnswerService{
    newAnswersChanged = new Subject<CreateAnswerDTO[]>();
    newAnswers: CreateAnswerDTO[] = [];

    addNewLessonToArray(newAnswerDTO: CreateAnswerDTO): void {
        this.newAnswers.push(newAnswerDTO);
        this.newAnswersChanged.next(this.newAnswers);
    }

    getAllNewAnswers(): CreateAnswerDTO[] {
        return this.newAnswers.slice();
    }
}

