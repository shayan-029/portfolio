'use client'
import { useState } from "react";
import { ChatTab } from "./chat";
import { BriefTab } from "./brief";
import { PriceTab } from "./price";
import { ProposalTab } from "./proposal";
import { TABS } from "@/data/ai-assistant";
import { ACTIVE_TAB, Tab } from "@/types/ai-assistant.type";
import './style.css';

export const AIAssistant = () => {

    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<Tab>(ACTIVE_TAB.CHAT);

    return (
        <>
            {/* Floating bubble */}
            <button className={`ai-fab ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
                {open ? '✕' : '✨'}
            </button>

            {/* Panel */}
            <div className={`ai-panel ${open ? 'visible' : ''}`}>
                <div className="ai-panel-header">
                    <span>🤖 AI Assistant</span>
                    <small>Powered by Claude</small>
                </div>

                <div className="ai-tabs">
                    {TABS.map(t => (
                        <button
                            key={t.id}
                            className={`ai-tab-btn ${activeTab === t.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(t.id)}
                        >
                            {t.emoji} {t.label}
                        </button>
                    ))}
                </div>

                <div className="ai-tab-body">
                    {activeTab === ACTIVE_TAB.CHAT && <ChatTab />}
                    {activeTab === ACTIVE_TAB.BRIEF && <BriefTab />}
                    {activeTab === ACTIVE_TAB.PRICE && <PriceTab />}
                    {activeTab === ACTIVE_TAB.PROPOSAL && <ProposalTab />}
                </div>
            </div>
        </>
    );
};