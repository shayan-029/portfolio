import Link from 'next/link';
import { WhatsappBtn } from '../ui/whatsppBtn';
import './style.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-name">
                Shayan<span>.</span>
            </div>
            <div className="footer-copy">© 2026 All rights reserved.</div>
            <div className="social-links">
                <WhatsappBtn type='text' className="social-link" />
                <Link href="https://www.linkedin.com/in/shayan-malik-b0150322b" target='_blank' className="social-link">
                    LinkedIn
                </Link>
                <Link href="https://github.com/shayan-029" target='_blank' className="social-link">
                    GitHub
                </Link>
            </div>
        </footer>

    )
}