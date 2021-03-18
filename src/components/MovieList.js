import React from 'react';

const MovieList = ({ movieList }) => {
  return (
    <ul className="movie-list">
      {
        movieList.map((movie, index) => (
          <li key={index}>
            <p className="movie-title">{movie.Title}</p> {/* 映画タイトル */}
            <div className="movie-image">
              <img src={movie.Poster} alt={movie.Title} /> {/* 映画ポスター */}
            </div>
            <p className="movie-year">{movie.Year}</p> {/* 映画公開年 */}
          </li>
        ))
      }
    </ul>
  );
}

export default MovieList;