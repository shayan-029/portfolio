export const useAiAssistant = () => {

    const OWNER = {
        name: 'Shayan',
        role: 'Full Stack Developer, Digital Growth Specialist & AI Integration Expert',
        services: 'Website Development, Full Stack Development, Web App Development, SEO & Digital Marketing, Google My Business Setup, E-Commerce Development, UI/UX Design, Website Maintenance, AI Chatbot Development, Automation & Workflow Setup',
        stack: 'HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Node.js, Express, MySQL, MongoDB, PostgreSQL, REST APIs, WordPress, Webflow, Git, Figma, Docker, Python, SEO, Google Ads, Google My Business, Meta Ads, Analytics, Claude API, OpenAI API, LangChain, Prompt Engineering, AI Chatbots, n8n, Zapier, Make, Web Scraping, Task Scheduling',
        location: 'Pakistan',
        availability: 'Available for projects',
        languages: 'English, Urdu',
    };

    const askClaude = async (prompt: string, system: string): Promise<string> => {
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    // model: 'claude-sonnet-4-20250514',
                    model: 'claude-haiku-4-5-20251001',
                    max_tokens: 1000,
                    system,
                    messages: [{ role: 'user', content: prompt }],
                }),
            });
            const data = await res.json();
            return data.content?.map((b: { text: string }) => b.text || '').join('') || 'Something went wrong.';
        } catch (error) {
            console.log(error);
            return 'Something went wrong.'
        }
    }

    return {
        OWNER,
        askClaude
    }
}