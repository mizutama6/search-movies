import React, { useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async (keyword) => {
    const params = {
      s: keyword, // 入力されたキーワード
      apikey: process.env.REACT_APP_APIKEY, // APIキー
    }
    await axios.get('http://www.omdbapi.com/', { params })
      .then(res => {
        if(res.data.Response === 'False' && res.data.Error === 'Too many results.') {
          alert('Too many results. Please narrow down conditions and search again.');
          return;
        } // 検索結果が多すぎるとエラーが出るので、処理を中断
        setMovies(res.data.Search); // 検索結果をmoviesに入れる
        console.log(res)
      })
      .catch(err => {
        alert(err)
        console.log(err);
      });
  }

  return (
    <div>
      <Header />
      <SearchForm onSubmit={getMovies} />
      <MovieList movieList={movies} />
    </div>
  )
}

export default App;