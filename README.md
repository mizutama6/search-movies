# 映画検索アプリ

## インストール

```zsh
$ git clone https://github.com/mizutama6/search-movie.git
$ cd search-movie
$ yarn install
```

## .env.localの作成

```zsh
$ touch .env.local
```
各自、[OMDb API](http://www.omdbapi.com/)からAPIキーを取得し、.env.localファイルに記述してください。

```
REACT_APP_APIKEY=取得したAPIキー
```

## アプリの実行

```zsh
$ yarn start
```

## 参考にしたサイト
[2020年のフロントエンドマスターになりたければこの9プロジェクトを作れ](https://qiita.com/rana_kualu/items/915345b8f3f870cfe2aa)

[How to build a movie search app using React Hooks](https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/)