# Next.js + Mastra + Vercel AI SDK Boilerplate

A comprehensive, production-ready boilerplate for building AI-powered applications with Next.js 15, Mastra framework, and Vercel AI SDK. This template demonstrates modern AI application patterns including intelligent agents, complex workflows, tool calling, and real-time streaming responses.

## 🚀 Features

### Core Technologies
- **Next.js 15** with App Router and React 19
- **Mastra Framework** for AI agents and workflows
- **Vercel AI SDK** for streaming AI responses
- **TypeScript** for type safety
- **Tailwind CSS** for modern styling
- **LibSQL** for local development storage

### AI Capabilities
- 🤖 **Intelligent Agents** - Chat and weather-specialized agents
- 🔧 **Tool Calling** - Weather data fetching with Open-Meteo API
- 🌊 **Streaming Responses** - Real-time AI interactions
- 🔄 **Complex Workflows** - Multi-step AI processes with branching logic
- 💾 **Memory & Storage** - Persistent conversation and workflow state
- 📊 **Observability** - Built-in logging and monitoring

### UI Components
- Modern, responsive design with Tailwind CSS
- Reusable UI components (Button, Card, Input)
- Real-time chat interface with loading states
- Weather query interface
- Feature showcase and documentation

## 📦 Project Structure

```
├── app/
│   ├── api/
│   │   ├── chat/          # Streaming chat endpoint
│   │   └── weather/       # Weather agent endpoint
│   ├── page.tsx           # Main demo application
│   └── layout.tsx         # Root layout
├── mastra/
│   ├── index.ts           # Mastra configuration
│   ├── agents/
│   │   ├── chat-agent.ts  # General purpose chat agent
│   │   └── weather-agent.ts # Weather-specialized agent
│   ├── tools/
│   │   └── weather-tool.ts # Weather data fetching tool
│   └── workflows/
│       └── weather-workflow.ts # Complex weather workflow
├── components/
│   └── ui/                # Reusable UI components
├── lib/
│   └── utils.ts           # Utility functions
└── package.json
```

## 🛠 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- OpenAI API key

### Installation

1. **Clone or use this template**
   ```bash
   git clone <your-repo-url>
   cd create-next-mastra-vercel-ai-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Mastra Setup
The main Mastra configuration is in `/mastra/index.ts`:

```typescript
import { Mastra } from '@mastra/core';
import { LibSQLStorage } from '@mastra/libsql';
import { Logger } from '@mastra/loggers';

export const mastra = new Mastra({
  agents: [chatAgent, weatherAgent],
  workflows: [weatherWorkflow],
  storage: new LibSQLStorage({ url: 'file:local.db' }),
  logger: new Logger({ type: 'CONSOLE', level: 'INFO' }),
});
```

### Environment Variables
Required environment variables:
- `OPENAI_API_KEY` - Your OpenAI API key for AI model access

## 🤖 Agents & Tools

### Chat Agent
General purpose conversational agent with OpenAI GPT-4 integration.

### Weather Agent
Specialized agent for weather queries with tool calling capabilities:
- Fetches real-time weather data from Open-Meteo API
- Provides detailed weather conditions and forecasts
- Handles location-based queries

### Weather Tool
Comprehensive weather data fetching with:
- Current conditions and forecasts
- Temperature, humidity, wind speed
- Weather condition mapping (clear, cloudy, rainy, etc.)
- Error handling for invalid locations

## 🔄 Workflows

### Weather Workflow
Complex multi-step workflow demonstrating:
- Weather data fetching
- AI-powered activity planning based on conditions
- Branching logic for different weather scenarios
- Structured output with recommendations

## 🎨 UI Components

Built with modern design principles:
- **Button** - Multiple variants (default, destructive, outline, etc.)
- **Card** - Flexible card components for content organization
- **Input** - Styled form inputs with proper focus states
- **Utility Functions** - `cn()` for className merging

## 📡 API Endpoints

### `/api/chat`
Streaming chat endpoint using Mastra chat agent:
```typescript
POST /api/chat
Content-Type: application/json

{
  "messages": [
    { "role": "user", "content": "Hello!" }
  ]
}
```

### `/api/weather`
Weather-specific endpoint using weather agent:
```typescript
POST /api/weather
Content-Type: application/json

{
  "messages": [
    { "role": "user", "content": "What's the weather in San Francisco?" }
  ]
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
This app can be deployed to any platform supporting Node.js:
- Netlify
- Railway
- Render
- AWS
- Google Cloud

## 🔧 Development Scripts

```bash
# Start development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Start Mastra development mode
pnpm mastra:dev

# Build Mastra for production
pnpm mastra:build
```

## 🧪 Customization

### Adding New Agents
1. Create agent file in `/mastra/agents/`
2. Define agent with tools and instructions
3. Register in `/mastra/index.ts`

### Adding New Tools
1. Create tool file in `/mastra/tools/`
2. Define tool schema and execution logic
3. Attach to relevant agents

### Adding New Workflows
1. Create workflow file in `/mastra/workflows/`
2. Define steps and branching logic
3. Register in `/mastra/index.ts`

### Styling
- Modify `app/globals.css` for global styles
- Update Tailwind configuration in `tailwind.config.js`
- Customize components in `/components/ui/`

## 📚 Learn More

### Mastra Framework
- [Mastra Documentation](https://docs.mastra.ai)
- [Mastra Examples](https://github.com/mastra-ai/mastra/tree/main/examples)
- [Mastra GitHub](https://github.com/mastra-ai/mastra)

### Vercel AI SDK
- [AI SDK Documentation](https://sdk.vercel.ai)
- [AI SDK Examples](https://github.com/vercel/ai/tree/main/examples)

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🙏 Acknowledgments

- [Mastra Team](https://mastra.ai) for the excellent AI framework
- [Vercel Team](https://vercel.com) for Next.js and AI SDK
- [OpenAI](https://openai.com) for GPT models
- [Open-Meteo](https://open-meteo.com) for weather data API

---

**Ready to build amazing AI applications?** Start with this boilerplate and customize it for your specific needs!
