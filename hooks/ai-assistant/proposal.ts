import { useState } from "react";
import { useAiAssistant } from ".";

export const useProposal = () => {

    const { OWNER, askClaude } = useAiAssistant();

    const [form, setForm] = useState({ clientName: '', projectGoal: '', industry: '' });
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        if (!form.projectGoal.trim()) return;
        setLoading(true);
        setResult('');
        const reply = await askClaude(
            `Client name: ${form.clientName || 'the client'}\nIndustry: ${form.industry}\nProject goal: ${form.projectGoal}`,
            `You are writing on behalf of ${OWNER.name}, a ${OWNER.role}.
       Write a short, professional project proposal / cover letter (250-350 words).
       Include: a personalized opening, understanding of their needs, why ${OWNER.name} is the right fit, relevant services (${OWNER.services}), and a clear call to action.
       Tone: confident, friendly, results-focused. No fluff.`
        );
        setResult(reply);
        setLoading(false);
    };

    return {
        generate,
        setForm,
        form,
        setResult,
        result,
        loading
    }
}