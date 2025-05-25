import { mastra } from '@/src/mastra';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Get the chat network that can route between different agents
    const chatNetwork = mastra.getNetwork('chatNetwork');
    
    if (!chatNetwork) {
      throw new Error('Chat network not found');
    }

    // Use the chat network to handle the conversation
    const result = await chatNetwork.stream(messages, {
      maxSteps: 10, // Allow enough steps for agent routing and tool usage
    });

    // Return the streaming response in the expected format
    return result.toDataStreamResponse();

  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
} 