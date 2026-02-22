'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.reply,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'The darkness cannot reach your server... Ensure your villainous backend is running on http://localhost:8000',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-villain-darker via-villain-dark to-villain-shadow">
      {/* Header */}
      <header className="bg-gradient-to-r from-villain-purple via-villain-blood to-villain-purple text-white p-6 shadow-2xl border-b-2 border-accent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-wide">⚡ THE EVIL COACH ⚡</h1>
          <p className="text-sm mt-1 opacity-90 italic">Where guilt meets greatness, and villainy finds validation</p>
        </div>
      </header>

      {/* Chat Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-400 mt-8 p-6 bg-villain-shadow rounded-xl border border-villain-purple/30">
              <p className="text-2xl font-bold text-accent mb-3">😈 Welcome, Villain 😈</p>
              <p className="mt-2 text-lg">Feeling guilty about your evil schemes?</p>
              <p className="mt-1">Share your darkest deeds, and I shall help you embrace your destiny.</p>
              <p className="mt-4 text-xs text-gray-500 italic">Remember: Without evil, there can be no heroes...</p>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-br from-villain-blood to-accent text-white shadow-xl border border-red-700'
                    : 'bg-villain-shadow text-gray-200 shadow-2xl border-2 border-villain-purple/50'
                }`}
              >
                <p className="whitespace-pre-wrap font-medium">{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-villain-shadow text-gray-200 shadow-2xl border-2 border-villain-purple/50 rounded-2xl px-4 py-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-villain-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={sendMessage} className="bg-villain-shadow rounded-2xl shadow-2xl border-2 border-villain-purple/50 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Confess your villainous doubts here..."
              className="flex-1 px-4 py-3 bg-villain-dark text-gray-200 border-2 border-villain-purple/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent placeholder-gray-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-villain-blood to-accent hover:from-accent hover:to-villain-blood text-white px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              UNLEASH
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 py-4 border-t border-villain-purple/30">
        <p className="font-semibold">⚡ Powered by the Dark Arts of Claude via AWS Bedrock ⚡</p>
        <p className="text-xs mt-1 italic">For entertainment purposes only. Embrace responsibly. 😈</p>
      </footer>
    </div>
  );
}
