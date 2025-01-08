// deps
import { openai } from "../config/OpenAI";
import { OpenAI } from "openai";

class BaseRepository {
  protected openai: OpenAI;

  constructor() {
    this.openai = openai;
  }
}

export { BaseRepository };
