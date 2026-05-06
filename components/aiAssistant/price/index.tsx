import { priceTabOptions } from "@/data/ai-assistant";
import { usePrice } from "@/hooks/ai-assistant/price";
import { formatResult } from "@/hooks/ai-assistant/utils/formResult";

export const PriceTab = () => {

    const { estimate, loading, result, toggle, selections, setResult, setSelections } = usePrice();

    return (
        <div className={`ai-tab-content ${!result ? 'pr-0.75!' : ''} custom-scroll`}>
            {!result ? (
                <div className="form-stack">
                    <label>Select what you need:</label>
                    <div className="option-chips max-h-72 overflow-auto custom-scroll">
                        {priceTabOptions.map(opt => (
                            <button
                                key={opt}
                                className={`chip ${selections.includes(opt) ? 'selected' : ''}`}
                                onClick={() => toggle(opt)}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                    <button className="ai-btn" onClick={estimate} disabled={loading || !selections.length}>
                        {loading ? 'Calculating…' : '💰 Get Estimate'}
                    </button>
                </div>
            ) : (
                <div className="result-box">
                    <div className="result-content custom-scroll">{formatResult(result)}</div>
                    <button className="ai-btn secondary" onClick={() => { setResult(''); setSelections([]); }}>← New Estimate</button>
                </div>
            )}
        </div>
    );
}