// deps
import { BaseRepository } from "./BaseRepository";

class RecommendRepostiory extends BaseRepository {
  constructor() {
    super();
  }

  // NOTE: (alopez) Testing.
  async getRecommendations(): Promise<any> {
    const completion = await this.openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [{ role: "user", content: "write a haiku about ai" }],
    });
    console.log(completion);
    return completion;
  }
}

export { RecommendRepostiory };
