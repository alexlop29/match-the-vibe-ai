class PreviewRepository {
  constructor() {}

  async get(url: string) {
    console.log("Fetching link preview...");
    // NOTE: (alopez) Convert to a service/repo pattern.
    const response = await fetch(`${url}`);
    const data = await response.text();

    console.log("Starting DOM parsing...");
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const title = doc.querySelector("title")?.textContent;
    const description = doc
      .querySelector("meta[name='description']")
      ?.getAttribute("content");
    const image = doc
      .querySelector("meta[property='og:image']")
      ?.getAttribute("content");

    console.log("Link preview fetched!");
    return {
      title,
      description,
      image,
    };
  }
}

export { PreviewRepository };
