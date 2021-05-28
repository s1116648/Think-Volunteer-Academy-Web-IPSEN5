export class ProfileCardModel {
  id: string;
  myName: string;
  imgPath: string;

  constructor(id: string, myName: string, imgPath: string) {
    this.id = id;
    this.myName = myName;
    this.imgPath = imgPath;
  }
}
