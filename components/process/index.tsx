import { steps } from '@/data/process';
import './style.css';
import Image from 'next/image';

export const Process = () => {
    return (
        <section id="process" className="hero-next">

            {/* LEFT CONTENT */}
            <div className="process-content">
                <div className="section-tag">How I Work</div>
                <div className="section-title">Simple, Clear Process</div>

                <p className="section-sub">
                    No confusion, no delays. Here&apos;s exactly how we go from idea to a live,
                    working product.
                </p>

                <div className="process-steps">
                    {steps.map((step) => (
                        <div className="step" key={step.id}>
                            <div className="step-left">
                                <div className="step-num">0{step.id}</div>
                                <div className="step-line" />
                            </div>

                            <div className="step-body">
                                <div className="step-title">{step.title}</div>
                                <p className="step-desc">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="image-wrapper">
                <Image
                    src="/discovery-image.png"
                    alt="process"
                    width={500}
                    height={500}
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </section>
    );
};