import Image from 'next/image';
import './style.css';

export const Hero = () => {
    return (
        <section className="hero dotted-bg" id="home">
            {/* <div className="hero-grid"></div> */}
            <div className="hero-glow"></div>
            <div className="hero-glow2"></div>

            <div className="hero-inner">
                <div className="hero-content">
                    <div className="hero-badge">
                        <div className="badge-dot"></div>
                        Available for Projects
                    </div>
                    <h1>
                        Building Digital<br />
                        <span className="accent">Solutions</span> That<br />
                        <span className="accent2">Actually Work</span>
                    </h1>
                    <p className="hero-desc">
                        I&apos;m Shayan. A Full Stack Developer & Digital Growth Specialist.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn-primary">View My Work</a>
                        <a href="#contact" className="btn-secondary">Let&apos;s Talk</a>
                    </div>
                    <div className="hero-stats">
                        <div>
                            <div className="stat-num">50<span>+</span></div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div>
                            <div className="stat-num">30<span>+</span></div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                        <div>
                            <div className="stat-num">3<span>x</span></div>
                            <div className="stat-label">Avg. Traffic Growth</div>
                        </div>
                    </div>
                </div>

                {/* Profile image */}
                <div className="hero-image-wrap">
                    <div className="hero-image-ring"></div>
                    <div className="hero-image-glow"></div>
                    <Image
                        src="/shayan.jpeg"   // 🔁 add your photo to /public/profile.jpg
                        alt="shayan"
                        className="hero-image"
                        width={400}
                        height={600}
                    />
                    <div className="hero-image-badge">
                        <span>💻</span> Full Stack Dev
                    </div>
                </div>
            </div>
        </section>
    );
}