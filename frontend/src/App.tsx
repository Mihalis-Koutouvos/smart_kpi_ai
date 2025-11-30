import { useEffect, useState } from 'react';
import { pingBackend } from './api/ping';
import { getKPIS } from './api/kpis';

interface KPI {
  name: string;
  value: number;
}

function App() {
  const [message, setMessage] = useState("No response");
  const [kpis, setKPIs] = useState<KPI[]>([]);

  useEffect(() => {
    pingBackend().then((data) => {
      if (data?.message) setMessage(data.message);
    });
  }, []);

  useEffect(() => {
    getKPIS().then(setKPIs)
  }, []);

  return (
    <div>
      <h1>Smart KPI Dashboard</h1>
      <p>Backend: {message}</p>

      {kpis.map(kpi => (
        <div key={kpi.name}>
          <h3>{kpi.name}</h3>
          <p>{kpi.value}</p>
        </div>
      ))}
    </div>
  );
}

export default App;