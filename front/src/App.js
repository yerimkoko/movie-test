import React, { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [movies, setMovies] = useState([]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const onClickButton = () => {
    const temp = movies.concat({ name: name, price: price });
    setMovies(temp);
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div>
        <div>
          <h3>영화 리스트</h3>
          {movies.map((movie) => {
            return (
              <div>
                <ul>
                  <li>영화제목: {movie.name}</li>
                  <li>영화제목: {movie.price}</li>
                </ul>
              </div>
            );
          })}
        </div>
        <div>
          <span>영화 이름: </span>
          <input
            type="text"
            placeholder="영화 이름을 입력해주세용!"
            value={name}
            onChange={onChangeName}
          ></input>
        </div>
        <div>
          <span>영화 가격: </span>
          <input
            type="number"
            placeholder="영화 가격을 입력해주세요."
            onChange={onChangePrice}
            value={price}
          ></input>
        </div>
        <button onClick={onClickButton}>등록하기</button>
      </div>
    </div>
  );
}

export default App;
