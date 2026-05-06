import { TAB } from "@/types/ai-assistant.type";

export const TABS: TAB[] = [
    { id: 'chat', label: 'Ask Me', emoji: '💬' },
    { id: 'brief', label: 'Brief', emoji: '📋' },
    { id: 'price', label: 'Estimate', emoji: '💰' },
    { id: 'proposal', label: 'Proposal', emoji: '✍️' },
];

export const projectType = [
    { id: '1', value: 'Website' },
    { id: '2', value: 'Web App' },
    { id: '3', value: 'E-Commerce Store' },
    { id: '4', value: 'Full Stack System' },
    { id: '5', value: 'SEO Campaign' },
    { id: '6', value: 'Google My Business Setup' },
    { id: '7', value: 'UI/UX Design' },
    { id: '8', value: 'AI Chatbot' },
    { id: '9', value: 'Automation & Workflow' },
    { id: '10', value: 'Website Maintenance' },
]

export const budget = [
    { id: '1', value: 'Under $500' },
    { id: '2', value: '$500 - $1,500' },
    { id: '3', value: '$1,500 - $5,000' },
    { id: '4', value: '$5,000 +' },
]

export const timeline = [
    { id: '1', value: 'ASAP' },
    { id: '2', value: '1-2 weeks' },
    { id: '3', value: '1 month' },
    { id: '4', value: '2-3 months' },
    { id: '5', value: '3-6 months' },
]

export const priceTabOptions = [
    '🌐 Static Website (5 pages)',
    '🛒 E-Commerce Store',
    '📱 Web App / Dashboard',
    '⚙️ Full Stack System',
    '🔌 REST API / Database',
    '🔍 SEO Setup & Optimization',
    '📍 Google My Business Setup',
    '🎨 UI/UX Design (Figma)',
    '📢 Google Ads Campaign',
    '📘 Meta Ads Campaign',
    '🤖 AI Chatbot Integration',
    '🔄 Automation & Workflow (n8n / Zapier)',
    '🐍 Python Scripting',
    '🔧 Ongoing Maintenance',
    '🚀 Performance Optimization',
];