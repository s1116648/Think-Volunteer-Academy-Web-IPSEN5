import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {UpdateAnswerDTO} from "./dto/update-answer.dto";

@Injectable({
    providedIn: "root",
})
export class AnswerService{
    newAnswersChanged = new Subject<UpdateAnswerDTO[]>();
    newAnswers: UpdateAnswerDTO[] = [];

    addNewAnswerToArray(newAnswerDTO: UpdateAnswerDTO): void {
        this.newAnswers.push(newAnswerDTO);
        this.newAnswersChanged.next(this.newAnswers);
    }

    getAllNewAnswers(): UpdateAnswerDTO[] {
        return this.newAnswers.slice();
    }
}

