import { NavLink } from 'react-router-dom';

import './header.css';

export default function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="main-header"> Math-Magician</h1>

      </div>
      <nav className="nav=links-container">
        <NavLink to="/" className="nav">Home</NavLink>
        <NavLink to="calculator" className="nav">Calculator</NavLink>
        <NavLink to="quote" className="nav" id="nav-quote">Quote</NavLink>

      </nav>
    </header>
  );
}
