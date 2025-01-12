// deps
import { BaseRepository } from "./BaseRepository";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

// types
const Book = z.object({
  name: z.string(),
  author: z.string(),
  description: z.string(),
});
const Books = z.object({
  books: z.array(Book),
});

class RecommendRepostiory extends BaseRepository {
  constructor() {
    super();
  }

  async getRecommendations(song: string, artist: string): Promise<any> {
    const completion = await this.openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a book recommendation system. Recommend a list of ten books based on the provided song and artist.",
        },
        { role: "user", content: `Song: ${song}, Artist: ${artist}` },
      ],
      response_format: zodResponseFormat(Books, "books"),
    });
    return completion;
  }
}

export { RecommendRepostiory };
