import { Agent, openai, createAgent } from "@inngest/agent-kit";
import {Sandbox} from "@e2b/code-interpreter"
import { inngest } from "./client";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {

    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("zync-nextjs-test-2");
      return sandbox.sandboxId;
    });
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

      const sandboxUrl = await step.run("get-sandbox-url", async () => {
        const sandbox = await getSandbox(sandboxId)
        const host = sandbox.getHost(3000);
        return `https://${host}`;
      })

      console.log(output)
    
    
    return { output ,sandboxUrl};
  },
);
