import axios from 'axios';

const holidayHouses = axios.create({
  baseURL: 'https://api.holidu.com/rest/v6'
});

export function getHouses(term, index) {
  const encodedTerm = encodeURI(term);
  return holidayHouses.get(
    `/search/offers?searchTerm=${encodedTerm}&locale=en&pageSize=10&pageIndex=${index}`
  );
}
