import { Agent, openai, createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {

    const writer = createAgent({
        name: "writer",
        system:`You are an expert Next.js developer.  You write readable, concise, maintainable, and performant code.
        You are a senior software engineer with 10 years of experience in building production-grade web applications. You write simple Next js and React Js snippets 
        `,
        model: openai({ model: "gpt-4o" }),
      });
    
      const {output} = await writer.run(
        `Write the following snippets ${event.data.value}`,
      )

      console.log(output)
    
    
    return { output };
  },
);
