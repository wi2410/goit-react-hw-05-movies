# React homework template

This project was created with
[Create React App](https://github.com/facebook/create-react-app). To get
acquainted and configure additional features
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Preparing a new project

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Install the project's base dependencies with the `npm install` command.
3. Start development mode by running the `npm start` command.
4. Go to [http://localhost:3000](http://localhost:3000) in your browser. This
   page will automatically reload after saving changes to the project files.

### Routing

If your application uses the `react-router-dom` library for routing, you must
additionally configure the `<BrowserRouter>` component by passing the exact name
of your repository in the `basename` prop. Slashes at the beginning and end of
the line are required.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```

Create basic routing for application search and save movies. For the backend,
use the themoviedb.org API. It is necessary to register (you can enter
additional data) and take the API key. My robots will win the coming endpoints.

/trending/get-trending a list of the most popular films of the year for a
collection on the main page. /search/search-movies Search for a movie by keyword
on the movie side. /movies/get-movie-details Gets more information about the
movie for the movie side. /movies/get-movie-credits Gets information about the
actor's warehouse for the credits of the movie. /movies/get-movie-reviews Gets
reviews for a movie review.
