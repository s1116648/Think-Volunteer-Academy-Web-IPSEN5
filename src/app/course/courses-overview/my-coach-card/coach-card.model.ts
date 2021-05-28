export class CoachCardModel {
  id: string;
  coachName: string;
  imgPath: string;

  constructor(id: string, coachName: string, imgPath: string) {
    this.id = id;
    this.coachName = coachName;
    this.imgPath = imgPath;
  }
}
