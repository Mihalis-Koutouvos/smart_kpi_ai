export async function getKPIS() {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/kpis`);
    const data = await response.json();
    return data;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchKPIs() {
  try {
    const res = await fetch(`${BASE_URL}/kpis`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch KPIs:", err);
    return null;
  }
}