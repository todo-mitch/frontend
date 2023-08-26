

import React,{ useState, useEffect } from 'react';


import Data from './sample.json';


function App() {
  const [data, setData] = useState([]);

  // データ取得
  useEffect(() => {
    fetch('/get')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('取得エラー:', error);
      });
  }, []);
  return (
    <div>
      <h1>Todo</h1>
      <form>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          追加〜
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          なんか箱作ってみた
        </button>
      </div>
      <h2 id="list-heading">らりるれろ</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div>
            <input id="todo-0" type="checkbox" />
            <label className="todo-label" htmlFor="todo-0">
              なかみっちー
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              完了
            </button>
            <button type="button" className="btn btn__danger">
              削除
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;