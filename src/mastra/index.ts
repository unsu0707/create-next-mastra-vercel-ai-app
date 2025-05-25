import { Mastra } from "@mastra/core";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";

// Import agents
import { weatherAgent } from "./agents/weather-agent";
import { chatAgent } from "./agents/chat-agent";
import { chatNetwork } from "./network";

// Import workflows
import { weatherWorkflow } from "./workflows/weather-workflow";

export const mastra = new Mastra({
  agents: { 
    weatherAgent,
    chatAgent,
  },
  networks: {
    chatNetwork,
  },
  workflows: { 
    weatherWorkflow 
  },
  storage: new LibSQLStore({
    // For development, use memory storage
    // For production, use file storage: file:./mastra.db
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
}); 