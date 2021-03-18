import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('');

  const searchMovie = (event) => {
    event.preventDefault(); // デフォルトの動作を無効化
    onSubmit(keyword); // 入力したキーワードを送信
    setKeyword(''); // 送信したら入力欄を空にする
  }

  return (
    <form onSubmit={searchMovie}>
      <input type="text" value={keyword} onChange={(event) => setKeyword(event.target.value)} />
      <button>SEARCH</button>
    </form>
  );
}

export default SearchForm;