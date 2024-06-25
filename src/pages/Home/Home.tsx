import TextInput from '../../components/TextInput/TextInput.tsx';
import './Home.css';
import { useState, FormEvent } from 'react';

function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with value:', email);
  };

  return (
    <div id={'home-container-wrapper'}>
      <h1>Toronto Newsletter</h1>
      <p>
        Finding new hidden gems and catching up with events for software
        engineers.
      </p>
      <div className="card">
        <form method="post" onSubmit={handleSubmit}>
          <TextInput
            value={email}
            onChange={setEmail}
            classNames={`emailInput`}
            placeholder={`email`}
          />
          <button type={'submit'} id={'subscribe-btn'}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
