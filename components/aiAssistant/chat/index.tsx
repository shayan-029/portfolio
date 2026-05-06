import { useChat } from '@/hooks/ai-assistant/chat';

export const ChatTab = () => {

    const { bottomRef, messages, send, loading, input, setInput } = useChat();

    return (
        <div className="ai-tab-content chat-tab">
            <div className="chat-messages custom-scroll">
                {messages.map((m, i) => (
                    <div key={i} className={`chat-bubble ${m.role}`}>
                        {m.role === 'assistant' && <span className="bubble-avatar">🤖</span>}
                        <p>{m.text}</p>
                    </div>
                ))}
                {loading && (
                    <div className="chat-bubble assistant">
                        <span className="bubble-avatar">🤖</span>
                        <p className="typing-dots"><span /><span /><span /></p>
                    </div>
                )}
                <div ref={bottomRef} />
            </div>
            <div className="chat-input-row">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && send()}
                    placeholder="Ask anything…"
                />
                <button onClick={send} disabled={loading}>↑</button>
            </div>
        </div>
    );
}