export const formatResult = (text: string) => {
    return (
        text.split('\n').map((line, i) => {
            if (line.startsWith('**') && line.endsWith('**'))
                return <strong key={i} className="brief-heading">{line.replace(/\*\*/g, '')}</strong>;
            if (line.startsWith('- '))
                return <li key={i}>{line.slice(2)}</li>;
            return line ? <p key={i}>{line.replace(/\*\*/g, '')}</p> : <br key={i} />;
        })
    )
}