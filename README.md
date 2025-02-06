# match-the-vibe-ai

Contains a full stack web application, leveraging OpenAI, built to recommend a series of books to users based on their song selection

### 🏄 Getting Started

```
npm run dev
```

### 🔧 Core libraries

- [Node.js 23.5.0](https://nodejs.org/en)
- [React](https://reactjs.org/)
- [Open AI](https://platform.openai.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Web APIs - DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)
- [Shadcn](https://ui.shadcn.com/)
- [Ludice](https://lucide.dev/)
- [Zod](https://zod.dev/)

### 📝 Developer Notes

> Structured Outputs is a feature that ensures the model will always generate responses that adhere to your supplied JSON Schema, so you don't need to worry about the model omitting a required key, or hallucinating an invalid enum value.

> Some benefits of Structured Outputs include:
> Reliable type-safety: No need to validate or retry incorrectly formatted responses
> Explicit refusals: Safety-based model refusals are now programmatically detectable
> Simpler prompting: No need for strongly worded prompts to achieve consistent formatting

```
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

const openai = new OpenAI();

const CalendarEvent = z.object({
  name: z.string(),
  date: z.string(),
  participants: z.array(z.string()),
});

const completion = await openai.beta.chat.completions.parse({
  model: "gpt-4o-2024-08-06",
  messages: [
    { role: "system", content: "Extract the event information." },
    { role: "user", content: "Alice and Bob are going to a science fair on Friday." },
  ],
  response_format: zodResponseFormat(CalendarEvent, "event"),
});

const event = completion.choices[0].message.parsed;
```

> Structured Outputs via response_format are more suitable when you want to indicate a structured schema for use when the model responds to the user, rather than when the model calls a tool.

### Monetization Notes

In-App Monetization and SDKs in Ad Tech:
- [What Sets SDK Integration Apart in Ad Tech](https://pubmatic.com/blog/sdk-integration/)
- [What Is In-App Advertising? How Does In-App Advertising Work?](https://www.publift.com/blog/in-app-advertising-for-publishers)

Google AdSense:
- [Google AdSense - Success Stories](https://adsense.google.com/start/success-stories/)
- [Interested in AdSense](https://support.google.com/adsense/topic/1319753?hl=en&ref_topic=3373519&sjid=3863464865878674686-NA)
