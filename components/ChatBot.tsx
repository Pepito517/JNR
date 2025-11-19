import React, { useState, useRef, useEffect } from 'react';
import { ChatIcon, CloseIcon, SendIcon } from './Icons';
import { ChatMessage, ChatState } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hola. Soy el asistente virtual de Josep. ¿En qué puedo ayudarte? Puedes preguntarme sobre su experiencia, servicios o enfoque estratégico.',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [chatState, setChatState] = useState<ChatState>(ChatState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || chatState === ChatState.THINKING) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setChatState(ChatState.THINKING);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMsg]);
      setChatState(ChatState.IDLE);
    } catch (error) {
      setChatState(ChatState.ERROR);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Lo siento, hubo un error procesando tu consulta.",
        timestamp: Date.now()
      }]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-brand-600 hover:bg-brand-700'
        } text-white`}
        aria-label="Abrir chat con asistente"
      >
        {isOpen ? <CloseIcon className="w-6 h-6" /> : <ChatIcon className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 transform transition-all duration-300 origin-bottom-right z-50 overflow-hidden flex flex-col ${
        isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
      }`} style={{ maxHeight: '600px', height: '70vh' }}>
        
        {/* Header */}
        <div className="bg-brand-900 p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div>
              <h3 className="font-semibold text-sm">Asistente virtual</h3>
              <p className="text-xs text-brand-200">Potenciado por Gemini AI</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-brand-600 text-white rounded-br-none'
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {chatState === ChatState.THINKING && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Pregunta sobre mi experiencia..."
              className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-sm text-slate-700"
              disabled={chatState === ChatState.THINKING}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || chatState === ChatState.THINKING}
              className="p-2 bg-brand-600 text-white rounded-full hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};