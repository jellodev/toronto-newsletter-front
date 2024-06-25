import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className={`app-container-header`}>
      <div className={'logo-wrapper'}>
        <img src={''} alt="logo" />
      </div>
      <nav className={`nav`}>
        <div className={'nav-item'}>
          <Link to="/home">Home</Link>
        </div>
        <div className={'nav-item'}>
          <Link to="/feed">Feed</Link>
        </div>
        <div className={'nav-item'}>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
