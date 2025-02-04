import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(0);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let password = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllow) str += '1234567890';
    if (charAllow) str += '!@#$%^&*()-_=+';
    for (let i = 0; i < length; ++i) {
      let char = Math.floor(Math.random() * str.length);
      password += str.charAt(char);
    }
    setPassword(password);
  }, [length, numAllow, charAllow]);

  useEffect(() => {
    if (length > 0) {
      generatePassword();
    }
  }, [length, numAllow, charAllow, generatePassword]);


  const PasswordRef = useRef(null);

  const handleCopy = useCallback(() => {
    PasswordRef.current?.select();
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    } ) },[password]);

  return (
    <>
      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          height: '200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: 'black',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '1rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginTop: '4rem',
          marginBottom: '2rem',
          color: 'white',
          backgroundColor: '#1F2937',
        }}
      >
        <h1 style={{ margin: '0 0 30px 40px' }}>Password Generator</h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          <input
            type="text"
            placeholder="Password"
            readOnly
            value={password}
            ref={PasswordRef}
            style={{
              outline: 'none',
              width: '80%',
              height: '33px',
              color: "black",
              borderTopLeftRadius: '5px',
              borderBottomLeftRadius: '5px',
              border: 'none',
              backgroundColor: 'white',
              marginLeft: '40px',
              paddingLeft: '20px',
              
            }}
          />
          <button onClick={handleCopy}>Copy</button>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', marginLeft: '10px' }}>
          <div style={{ marginRight: '30px', display: 'flex' }}>
            <input
              style={{ width: '80%' }}
              type="range"
              max={100}
              min={0}
              value={length}
              className="cursor"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>

          <div style={{ marginRight: '30px', display: 'flex' }}>
            <input
              type="checkbox"
              id="charInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>

          <div style={{ marginRight: '30px', display: 'flex' }}>
            <input
              type="checkbox"
              id="numInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
