import { useState } from "react";
import { useAiAssistant } from ".";

export const useBrief = () => {

    const { OWNER, askClaude } = useAiAssistant();

    const [form, setForm] = useState({ projectType: '', description: '', budget: '', timeline: '' });
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        if (!form.description.trim()) return;
        setLoading(true);
        setResult('');
        const reply = await askClaude(
            `Project type: ${form.projectType}\nDescription: ${form.description}\nBudget: ${form.budget}\nTimeline: ${form.timeline}`,
            `You are a professional project manager for ${OWNER.name}, a ${OWNER.role}.
       Generate a clean, structured project brief with: Project Overview, Goals, Key Features, Tech Recommendations, and Next Steps.
       Be concise, professional, and actionable. Use simple markdown (bold with **, bullet points with -).`
        );
        setResult(reply);
        setLoading(false);
    };

    return {
        generate,
        setForm,
        result,
        loading,
        form,
        setResult
    }
}