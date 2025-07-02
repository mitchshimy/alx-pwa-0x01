# ALX Project: Movie App (alx-project-0x14)

This project is a simple movie application that integrates with the MoviesDatabase API to fetch and display movie data using Next.js 14, TypeScript, and Tailwind CSS.

## API Overview

The MoviesDatabase API provides access to an extensive database of movie-related information. It allows you to:

- Retrieve details about movies, TV shows, actors, and other industry professionals.
- Search for content by title, person, or keywords.
- Access trending, popular, upcoming, and top-rated lists.
- Get media assets like posters, trailers, and backdrops.

## API Version

- **Version:** v3 and v4 (This project uses **v3** for most endpoints)

## Available Endpoints

- `GET /movie/popular`: Fetches the list of currently popular movies.
- `GET /movie/{movie_id}`: Retrieves detailed information about a specific movie.
- `GET /search/movie`: Searches for movies by title.
- `GET /trending/{media_type}/{time_window}`: Fetches trending movies or TV shows.
- `GET /genre/movie/list`: Retrieves available movie genres.
- `GET /configuration`: Fetches configuration data including base URLs for images.

## Request and Response Format

### Sample Request

```http
GET https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
