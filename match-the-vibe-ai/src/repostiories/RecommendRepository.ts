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

/*
Result of the test:
{id: 'chatcmpl-AorTFYI7iIUUOiaAqAhQjGBwK4scL', object: 'chat.completion', created: 1736685305, model: 'gpt-4o-mini-2024-07-18', choices: Array(1), …}
choices
: 
Array(1)
0
: 
finish_reason
: 
"stop"
index
: 
0
logprobs
: 
null
message
: 
content
: 
"Silent circuits hum,  \nWisdom born from coded dreams,  \nFuture’s mind awakes."
refusal
: 
null
role
: 
"assistant"
[[Prototype]]
: 
Object
[[Prototype]]
: 
Object
length
: 
1
[[Prototype]]
: 
Array(0)
created
: 
1736685305
id
: 
"chatcmpl-AorTFYI7iIUUOiaAqAhQjGBwK4scL"
model
: 
"gpt-4o-mini-2024-07-18"
object
: 
"chat.completion"
service_tier
: 
"default"
system_fingerprint
: 
"fp_72ed7ab54c"
usage
: 
{prompt_tokens: 13, completion_tokens: 20, total_tokens: 33, prompt_tokens_details: {…}, completion_tokens_details: {…}}
[[Prototype]]
: 
Object
*/

export { RecommendRepostiory };
