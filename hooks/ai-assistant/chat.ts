import { Message } from "@/types/ai-assistant.type";
import { useEffect, useRef, useState } from "react";
import { useAiAssistant } from ".";

export const useChat = () => {

    const { OWNER, askClaude } = useAiAssistant();

    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', text: `Hi! I'm ${OWNER.name}'s AI assistant. Ask me anything about services, pricing, or how I can help your business 🚀` },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    const send = async () => {
        const userMsg = input.trim();
        if (!userMsg || loading) return;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setLoading(true);
        const reply = await askClaude(userMsg,
            `You are a helpful assistant for ${OWNER.name}, a ${OWNER.role}. 
       Services offered: ${OWNER.services}. 
       Tech stack: ${OWNER.stack}.
       Answer visitor questions concisely and professionally. Encourage them to get in touch for custom quotes.`
        );
        setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
        setLoading(false);
    };

    useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

    return {
        send,
        messages,
        bottomRef,
        loading,
        input,
        setInput
    }
}