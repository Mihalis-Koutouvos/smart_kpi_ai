import { useEffect, useState } from 'react';
import { pingBackend } from './api/ping';
import { getKPIS } from './api/kpis';

interface KPI {
  revenue: string;
  users: number;
  conversion_rate: string;
  uptime: string;
}

function App() {
  const [message, setMessage] = useState("No response");
  const [kpi, setKPI] = useState<KPI | null>(null);

  useEffect(() => {
    pingBackend().then((data) => {
      if (data?.message) setMessage(data.message);
    });
  }, []);

  useEffect(() => {
    getKPIS().then(data => {
      if (data) setKPI(data);
    });
  }, []);

  return (
    <div className="app">
      <h1>Smart KPI Dashboard</h1>
      {kpi ? (
        <ul>
          <li>Revenue: {kpi.revenue}</li>
          <li>Users: {kpi.users}</li>
          <li>Conversion Rate: {kpi.conversion_rate}</li>
          <li>Uptime: {kpi.uptime}</li>
        </ul>
      ) : (
        <p>Loading KPIs...</p>
      )}
        <p>Backend: {message}</p>
    </div>
  );
}

export default App;