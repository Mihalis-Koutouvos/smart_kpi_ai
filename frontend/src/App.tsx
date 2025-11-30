import { useEffect, useState } from 'react';
import { pingBackend } from './api/ping';

function App() {
  const [message, setMessage] = useState("No response");

  useEffect(() => {
    pingBackend().then((data) => {
      if (data?.message) setMessage(data.message);
    });
  }, []);

  return (
    <div>
      <h1>Smart KPI Dashboard</h1>
      <p>Backend: {message}</p>
    </div>
  );
}

export default App;