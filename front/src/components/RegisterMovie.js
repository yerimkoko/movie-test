import React, { useState } from "react";

const RegisterMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h3>영화 등록하기!</h3>
      <div>
        <span>영화 이름: </span>
        <input type="text" value={name} placeholder="영화 이름을 입력해주세용!">
          onChange={onChangeName}
        </input>
      </div>
      <div>
        <span>영화 가격: </span>
        <input
          type="number"
          value={price}
          placeholder="영화 가격을 입력해주세요."
        ></input>
      </div>
      <button>등록하기</button>
    </div>
  );
};
