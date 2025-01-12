"use server";

// deps
import { RecommendRepostiory } from "../repostiories/RecommendRepository";
import { BaseService } from "./BaseService";

class RecommendService extends BaseService {
  private recommendRepository: RecommendRepostiory;

  constructor() {
    super();
    this.recommendRepository = new RecommendRepostiory();
  }

  get(song: string, artist: string) {
    return this.recommendRepository.getRecommendations(song, artist);
  }
}

export async function getRecommendations(song: string, artist: string) {
  const recommendService = new RecommendService();
  let recommendation = await recommendService.get(song, artist);
  return recommendation;
}

export { RecommendService };
