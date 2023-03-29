import { useState } from 'react';

const MyUseState003 = () => {
  const [names, setNames] = useState(['고수', '여진구', '송중기']);
  const [input, setInput] = useState('');

  const handleChangeName = (e) => {
    // 현재 발생한 이벤트(e)의 값
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    // 기존에 있던 배열형태 가져오고, 추가 입력되는 배열형태
    // setNames([...names, document.getElementById('fname').value]);
    // 순서는 바꿔줄 수 있다.
    //setNames([document.getElementById('fname').value, ...names]);
    // 초기화도 할 수 있다.
    //document.getElementById('fname').value = '';

    // 배열 형태로 입력
    setNames([input, ...names]);
    // 입력 후 input 초기화
    setInput('');
  };

  return (
    <div>
      <input
        type='text'
        id='fname'
        onChange={handleChangeName}
        // 입력 후 input 이 초기화 될 때 입력창 값도 초기화 시켜준다.
        value={input}
      ></input>
      <button onClick={handleClick}>ADD</button>
      {names.map((value, index) => {
        // p 에 index 값을 줄 경우 맨 앞에 새로운 배열이 들어오면 기존 숫자가 하나씩 밀리게 된다. 뒤로 추가될 경우는 변동이 없다. index값이 변동되지 않으려면 별도 고유값을 주는 것을 고려해야한다. like forEach
        return <p key={index}>{value}</p>;
      })}

      {/* 다음과 같은 형태로도 쓸 수 있다. */}
      {/* {names.map((value, index) => (
        <p key={index}>{value}</p>
      ))} */}
    </div>
  );
};

export default MyUseState003;
