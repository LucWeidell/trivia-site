export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=1&category=24&difficulty=hard',
  timeout: 5000
})