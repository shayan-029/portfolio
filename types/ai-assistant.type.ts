type Tab = 'chat' | 'brief' | 'price' | 'proposal';

type TAB = { id: Tab; label: string; emoji: string };

type Message = { role: 'user' | 'assistant'; text: string };

export enum ACTIVE_TAB {
    CHAT = 'chat',
    BRIEF = 'brief',
    PRICE = 'price',
    PROPOSAL = 'proposal'
}


export type { Tab, TAB, Message }