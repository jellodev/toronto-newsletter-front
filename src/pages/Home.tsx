import TextInput from '../components/TextInput/TextInput.tsx';

function Home() {
  return (
    <>
      <h1>Toronto Newsletter</h1>
      <p>
        Finding new hidden gems and catching up with events for software
        engineers.
      </p>
      <div className="card">
        <TextInput classNames={`emailInput`} placeholder={`Enter an email.`} />
      </div>
    </>
  );
}

export default Home;
