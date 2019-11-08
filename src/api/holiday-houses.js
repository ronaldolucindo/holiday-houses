import axios from 'axios';

const holidayHouses = axios.create({
  baseURL: 'https://api.holidu.com/rest/v6'
});

export function searchHouses(term) {
  const encodedTerm = encodeURI(term);
  holidayHouses.get(`/search/offers?searchTerm=${encodedTerm}`);
}
