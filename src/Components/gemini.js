import React, { useState, useEffect } from 'react';
import './gemini.css';

function Gemini() {
  // prompt = globalState;
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ prompt })
      });
      const data = await response.json();
      console.log(data.text);
      setOutput(data.text);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to generate text.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>InstaTeach</h1>
      <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Enter a prompt" />
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Generate Text'}
      </button>
      {output && <p>Output: {output}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Gemini;