export class CategoryCardModel {

  id: string;
  name: string;
  updatedAt: string;
  createdAt: string;

  constructor(  id: string, name: string, updatedAt: string, createdAt: string) {
    this.id = id;
    this.name = name;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
  }


}
