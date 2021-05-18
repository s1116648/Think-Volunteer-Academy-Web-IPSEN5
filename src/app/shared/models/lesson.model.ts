export class Lesson{
  id: number;
  name: string;
  image: string;
  content: string;
  description: string;
  updatedAt: string; // Change to Date
  createdAt: string; // Change to Date

  constructor(id: number, name: string, image: string, content: string, description: string, updatedAt: string, createdAt: string ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.content = content;
    this.description = description;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
  }
}
