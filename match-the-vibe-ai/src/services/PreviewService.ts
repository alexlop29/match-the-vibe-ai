// deps
import { PreviewRepository } from "@/repostiories/PreviewRepository";

class PreviewService {
  private previewRepository: PreviewRepository;

  constructor() {
    this.previewRepository = new PreviewRepository();
  }

  get(url: string) {
    return this.previewRepository.get(url);
  }
}

export async function getPreview(url: string) {
  const previewService = new PreviewService();
  let preview = await previewService.get(url);
  return preview;
}

export { PreviewService };
