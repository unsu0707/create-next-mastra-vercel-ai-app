"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Cloud, Workflow, Zap } from "lucide-react";

export default function Home() {
  // Chat functionality using Vercel AI SDK
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Next.js + Mastra + Vercel AI SDK
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive boilerplate with intelligent agent routing powered by Mastra AgentNetwork. 
            Ask about weather, general questions, or anything else - the AI will route to the right specialist!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <MessageCircle className="w-8 h-8 mx-auto text-blue-600" />
              <CardTitle className="text-lg">Intelligent Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                AI-powered chat with automatic routing to specialized agents based on your questions
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Cloud className="w-8 h-8 mx-auto text-green-600" />
              <CardTitle className="text-lg">Weather Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Seamlessly ask weather questions and get detailed forecasts through natural conversation
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Workflow className="w-8 h-8 mx-auto text-purple-600" />
              <CardTitle className="text-lg">Agent Networks</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Intelligent routing between specialized agents using Mastra's AgentNetwork
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="w-8 h-8 mx-auto text-yellow-600" />
              <CardTitle className="text-lg">Type Safe</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Full TypeScript support with Zod validation and type inference
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Main Content - Centered Chat */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Intelligent AI Assistant
              </CardTitle>
              <CardDescription>
                Ask me anything! I can help with general questions, provide weather information, 
                or assist with various topics. The AI will automatically route your query to the right specialist.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Messages */}
                <div className="h-96 overflow-y-auto border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
                  {messages.length === 0 ? (
                    <div className="text-center text-gray-500 mt-8">
                      <div className="space-y-4">
                        <p>👋 Hello! I'm your intelligent assistant.</p>
                        <div className="text-sm space-y-2">
                          <p><strong>Try asking me:</strong></p>
                          <div className="space-y-1 text-gray-400">
                            <p>• "What's the weather like in Tokyo?"</p>
                            <p>• "Explain quantum computing"</p>
                            <p>• "Help me plan a trip to Paris"</p>
                            <p>• "What's the forecast for this weekend?"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    messages.map((message) => (
                      <div
                        key={message.id}
                        className={`mb-4 ${
                          message.role === "user" ? "text-right" : "text-left"
                        }`}
                      >
                        <div
                          className={`inline-block p-3 rounded-lg max-w-[80%] ${
                            message.role === "user"
                              ? "bg-blue-600 text-white"
                              : "bg-white dark:bg-gray-700 border"
                          }`}
                        >
                          <p className="text-sm font-medium mb-1">
                            {message.role === "user" ? "You" : "Assistant"}
                          </p>
                          <div className="whitespace-pre-wrap">{message.content}</div>
                        </div>
                      </div>
                    ))
                  )}
                  {isLoading && (
                    <div className="text-left">
                      <div className="inline-block p-3 rounded-lg bg-white dark:bg-gray-700 border">
                        <p className="text-sm font-medium mb-1">Assistant</p>
                        <p className="text-gray-500">Thinking...</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me anything - weather, general questions, or get help with topics..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isLoading || !input.trim()}>
                    Send
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Details */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>🧠 Intelligent Agent Routing</CardTitle>
            <CardDescription>
              This application demonstrates Mastra's AgentNetwork feature for intelligent request routing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">🤖 Mastra AgentNetwork</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Intelligent request routing</li>
                  <li>• Specialized agent coordination</li>
                  <li>• Context-aware responses</li>
                  <li>• Seamless agent handoffs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">⚡ Vercel AI SDK</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Real-time streaming responses</li>
                  <li>• React hooks integration</li>
                  <li>• Multiple AI provider support</li>
                  <li>• Optimistic UI updates</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🚀 Next.js 15</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• App Router with API routes</li>
                  <li>• Server and client components</li>
                  <li>• TypeScript support</li>
                  <li>• Tailwind CSS styling</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>🚀 Getting Started</CardTitle>
            <CardDescription>
              Follow these steps to set up your own AI-powered application with intelligent agent routing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">1. Environment Setup</h3>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
                    <p>OPENAI_API_KEY=your_key_here</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. Install Dependencies</h3>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
                    <p>pnpm install</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. Run Development</h3>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
                    <p>pnpm dev</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">4. Run Mastra Server</h3>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
                    <p>pnpm mastra:dev</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
