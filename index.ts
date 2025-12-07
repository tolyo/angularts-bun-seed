import { serve } from "bun";
import homepage from "./index.html";
import HomePage from "./test.tsx";

const server = serve({
  routes: {
    "/": homepage,
    "/test": () => {
      const html = HomePage();   
      return new Response(html, {
        headers: { "Content-Type": "text/html" }
      });
    }
  },

  // Enable development mode for:
  // - Detailed error messages
  // - Hot reloading (Bun v1.2.3+ required)
  development: true,
});

console.log(`Listening on ${server.url}`);