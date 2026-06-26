import { NavLink } from 'react-router-dom';
import { Download, Shield, Menu } from 'lucide-react';
import { profile } from '../data/portfolio.js';

const links = ['Home', 'About', 'Skills', 'Projects', 'Reports', 'Blog', 'Contact'];

export default function Navbar() {
  return (
    <header className="nav hud-border">
      <NavLink to="/" className="brand">
        <span className="brand-mark"><Shield size={28} /></span>
        <span><b>{profile.logo}</b><small>obey others</small></span>
      </NavLink>
      <nav className="nav-links">
        {links.map((link) => (
          <NavLink key={link} to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>{link}</NavLink>
        ))}
      </nav>
      <a className="btn danger magnetic" href="/cv.pdf"><Download size={16} /> Download CV</a>
      <button className="mobile-menu"><Menu /></button>
    </header>
  );
}
