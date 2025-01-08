// deps
import { RecommendRepostiory } from "../repostiories/RecommendRepository";
import { BaseService } from "./BaseService";

class RecommendService extends BaseService {
  private recommendRepository: RecommendRepostiory;

  constructor() {
    super();
    this.recommendRepository = new RecommendRepostiory();
  }

  get() {
    return this.recommendRepository.getRecommendations();
  }
}

export { RecommendService };
