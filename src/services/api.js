const apiUrl = import.meta.env.VITE_BASE_URL;
export const getPopularAnime = async () => {
    const response = await fetch(`${apiUrl}/top/anime`);
    const data = await response.json();
    return data.data;
}
export const searchAnime = async (query) => {
    const response = await fetch(`${apiUrl}/anime?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.data;
}