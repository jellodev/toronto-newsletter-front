import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {
  return (
    <div className={'co'}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
