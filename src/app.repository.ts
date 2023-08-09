import { Injectable } from '@nestjs/common';

type Board = {
  title: string;
  content: string;
};

@Injectable()
export class AppRepository {
  private save: Map<string, Board> = new Map<string, Board>();

  private readonly id: number;
  private readonly title: string;
  private readonly content: string;

  constructor(params: { id: number; title: string; content: string }) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
  }

  public create() {
    this.save.set(`board${this.id}`, {
      title: this.title,
      content: this.content,
    });
  }
}
