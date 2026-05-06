import { budget, projectType, timeline } from "@/data/ai-assistant";
import { useBrief } from "@/hooks/ai-assistant/brief";
import { formatResult } from "@/hooks/ai-assistant/utils/formResult";

export const BriefTab = () => {

    const { generate, loading, result, setForm, form, setResult } = useBrief();

    return (
        <div className={`ai-tab-content custom-scroll`}>
            {!result ? (
                <div className="form-stack">
                    <label>Project Type</label>
                    <select value={form.projectType} onChange={e => setForm({ ...form, projectType: e.target.value })}>
                        <option value="">Select…</option>
                        {projectType.map((option) =>
                            <option key={option.id} value={option.value}>{option.value}</option>
                        )}
                    </select>

                    <label>Describe your project</label>
                    <textarea
                        rows={3}
                        placeholder="What do you need built or improved?"
                        value={form.description}
                        onChange={e => setForm({ ...form, description: e.target.value })}
                    />

                    <label>Budget Range</label>
                    <select value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}>
                        <option value="">Select…</option>
                        {budget.map((option) => (
                            <option key={option.id} value={option.value}>{option.value}</option>
                        ))}
                    </select>

                    <label>Timeline</label>
                    <select value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })}>
                        <option value="">Select…</option>
                        {timeline.map((option) => (
                            <option key={option.id} value={option.value}>{option.value}</option>
                        ))}
                    </select>

                    <button className="ai-btn" onClick={generate} disabled={loading || !form.description}>
                        {loading ? 'Generating…' : '✨ Generate Brief'}
                    </button>
                </div>
            ) : (
                <div className="result-box">
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <div className="result-content">{formatResult(result)}</div>
                    <button className="ai-btn secondary" onClick={() => setResult('')}>← New Brief</button>
                </div>
            )}
        </div>
    );
}