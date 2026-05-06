import { useProposal } from "@/hooks/ai-assistant/proposal";

export const ProposalTab = () => {

    const { form, generate, loading, result, setForm, setResult } = useProposal();

    return (
        <div className={`ai-tab-content custom-scroll`}>
            {!result ? (
                <div className="form-stack">
                    <label>Client / Company Name</label>
                    <input
                        placeholder="e.g. Ahmed's Restaurant"
                        value={form.clientName}
                        onChange={e => setForm({ ...form, clientName: e.target.value })}
                    />

                    <label>Their Industry</label>
                    <input
                        placeholder="e.g. Restaurant, Real Estate, Clinic…"
                        value={form.industry}
                        onChange={e => setForm({ ...form, industry: e.target.value })}
                    />

                    <label>What do they need?</label>
                    <textarea
                        rows={3}
                        placeholder="e.g. They want a website with online booking and SEO"
                        value={form.projectGoal}
                        onChange={e => setForm({ ...form, projectGoal: e.target.value })}
                    />

                    <button className="ai-btn" onClick={generate} disabled={loading || !form.projectGoal}>
                        {loading ? 'Writing…' : '✍️ Write Proposal'}
                    </button>
                </div>
            ) : (
                <div className="result-box">
                    <div className="result-content proposal-text custom-scroll">{result}</div>
                    <div className="result-actions">
                        <button className="ai-btn" onClick={() => navigator.clipboard.writeText(result)}>📋 Copy</button>
                        <button className="ai-btn secondary" onClick={() => setResult('')}>← New Proposal</button>
                    </div>
                </div>
            )}
        </div>
    );
}