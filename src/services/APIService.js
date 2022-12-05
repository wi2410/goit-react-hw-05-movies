import axios from 'axios';

// Пример API - запроса:
// https://api.themoviedb.org/3/movie/550?api_key=f6e581dc0b1e4310711b9bd2dd0db6b6

const API_KEY = 'f6e581dc0b1e4310711b9bd2dd0db6b6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/movie/week',
  searchMovie: '/search/movie',
  details: '/movie',
};

export const getPopularMovie = async () => {
  const response = await axios.get(`${END_POINTS.trending}?api_key=${API_KEY}`);
  return response.data.results;
};

export const searchMovie = async query => {
  const response = await axios.get(
    `${END_POINTS.searchMovie}?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
};

export const getDetails = async id => {
  const response = await axios.get(
    `${END_POINTS.details}/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getCredits = async id => {
  const response = await axios.get(
    `${END_POINTS.details}/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const getReviews = async id => {
  const response = await axios.get(
    `${END_POINTS.details}/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};