import { services } from '@/data/services';
import './style.css';

export const Services = () => {

    return (
        <section className="services" id="services">
            <div className="section-tag">What I Do</div>
            <div className="section-title">Services I Offer</div>
            <p className="section-sub">
                From building fast, modern websites to ranking you on Google. I handle
                everything your business needs to grow online.
            </p>
            <div className="services-grid">
                {services.map((item) => (
                    <div key={item.id} className="service-card">
                        <div className={`service-icon ${item.iconClassName}`}>{item.icon}</div>
                        <div className="service-title">{item.title}</div>
                        <p className="service-desc">{item.description}</p>
                        <span className="service-arrow">↗</span>
                    </div>
                ))}
            </div>
        </section>
    )
}