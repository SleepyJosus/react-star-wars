export function getAllStarships() {
  const url = 'https://swapi.co/api/starships/';
  return fetch(url).then(res => res.json());
}