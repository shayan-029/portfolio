import { useState } from "react";
import { useAiAssistant } from ".";

export const usePrice = () => {

    const { OWNER, askClaude } = useAiAssistant();

    const [selections, setSelections] = useState<string[]>([]);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const toggle = (opt: string) =>
        setSelections(prev => prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]);

    const estimate = async () => {
        if (!selections.length) return;
        setLoading(true);
        setResult('');
        const reply = await askClaude(
            `Client selected services: ${selections.join(', ')}`,
            `You are a pricing consultant for ${OWNER.name}, a ${OWNER.role} based in Pakistan offering services globally.
       Give a realistic price estimate in USD for the selected services.
       Format: show each service with a price range, then a total range.
       Be concise. Add a note about what factors could affect the final price.
       Use simple formatting with ** for bold and - for bullets.`
        );
        setResult(reply);
        setLoading(false);
    };

    return {
        estimate,
        result,
        loading,
        toggle,
        selections,
        setResult,
        setSelections
    }
}