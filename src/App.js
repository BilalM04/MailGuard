import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (result) {
      setResult('');
    }
  };

  const handleClear = () => {
    setEmail('');
    setResult('');
  };

  const handleSubmit = async () => {
    if (!email.trim()) {
      setResult('Please enter text in the textbox.');
      return;
    }

    try {
      const response = await fetch(`https://bilalm14.pythonanywhere.com/predict?message=${encodeURIComponent(email)}`, {
        method: 'GET',
      });
      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred. Please try again.');
    }
  };

  return (
    <div className="App">
      <div className="header">
        <i className="fas fa-envelope"></i>
        <h1>MailGuard</h1>
        <i className="fas fa-shield"></i>
      </div>
      <p>Email Spam Classifier</p>
      <textarea 
        id="emailInput"
        name="emailInput"
        value={email} 
        onChange={handleInputChange} 
        placeholder="Enter your email here..." 
      />
      <div className="button-container">
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSubmit}>Enter</button>
      </div>
      {result && (
        <p className='result'>
          {result === 'Please enter text in the textbox.' ? result : <><b>Classification:</b> <span className={result === 'Spam' ? 'spam' : 'not-spam'}>{result}</span></>}
        </p>
      )}
    </div>
  );
}

export default App;
