import { whyme } from '@/data/whyme';
import './style.css';

export const WhyMe = () => {

    return (
        <section id='whyme'>
            <div className="section-tag">Why Choose Me</div>
            <div className="section-title">What Sets Me Apart</div>
            <p className="section-sub">
                I don&apos;t just build websites — I build digital assets that work hard for your
                business.
            </p>
            <div className="whyme-grid">
                {whyme.map((item) => (
                    <div key={item.id} className="whyme-card">
                        <div className="whyme-icon">{item.icon}</div>
                        <div className="whyme-title">{item.title}</div>
                        <p className="whyme-desc">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}