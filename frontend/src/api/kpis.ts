export async function getKPIS() {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/kpis`);
    const data = await response.json();
    return data;
}