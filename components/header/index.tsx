'use client'
import { links } from '@/data/header';
import './style.css';

export const Header = () => {

    const closeMenu = () => {
        const toggle = document.getElementById('nav-toggle') as HTMLInputElement;
        if (toggle) toggle.checked = false;
    };

    return (
        <nav id='header'>
            <a href="#" className="nav-logo">Shayan<span>.</span></a>

            <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />

            <ul className="nav-links">
                {links.map((item) => (
                    <li key={item.id}>
                        <a href={item.href} onClick={closeMenu}>{item.title}</a>
                    </li>
                ))}
            </ul>

            <div className="nav-right">
                <a href="#contact" className="nav-cta">Hire Me</a>
                <label htmlFor="nav-toggle" className="nav-hamburger">
                    <span /><span /><span />
                </label>
            </div>
        </nav>
    );
};