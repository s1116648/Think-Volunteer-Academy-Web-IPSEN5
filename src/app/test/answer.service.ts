import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {UpdateAnswerDTO} from "./dto/update-answer.dto";

@Injectable({
    providedIn: "root",
})
export class AnswerService{
    newAnswersChanged = new Subject<UpdateAnswerDTO[]>();
    newAnswers: UpdateAnswerDTO[] = [];

    updateGlobalAnswersArray(answers: UpdateAnswerDTO[]): void {
        this.newAnswers = answers;
        this.newAnswersChanged.next(this.newAnswers);
    }

    getGlobalAnswersArray(): UpdateAnswerDTO[] {
        return this.newAnswers.slice();
    }
}

