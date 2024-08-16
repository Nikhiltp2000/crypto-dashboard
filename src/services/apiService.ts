import axios from 'axios';

// Define the API URL and other constants if needed
const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

// Function to fetch crypto coins data
export const fetchCryptoCoins = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data. Please try refreshing the page.");
  }
};
