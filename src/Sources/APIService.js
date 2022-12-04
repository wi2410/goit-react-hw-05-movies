import axios from 'axios';

// Пример API - запроса:
// https://api.themoviedb.org/3/movie/550?api_key=f6e581dc0b1e4310711b9bd2dd0db6b6

const API_KEY = 'f6e581dc0b1e4310711b9bd2dd0db6b6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';