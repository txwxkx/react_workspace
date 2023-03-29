// State : state 변경 -> 리랜더링 발생함 -> state 초기화 안됨
// Ref : ref 변경 -> 리랜더링 발생 안됨 -> ref 초기화 안됨
// variable : variable => 리랜더링 발생 안됨 -> variable 초기화됨

// 리랜더링 발생(컴포넌트 업데이트)
// 1. state가 바뀔 때
// 2. props 가 바뀔 때
// 3. 부모컴포넌트가 리랜더링될 때
// 4. formUpdate( ) 로 강제로 랜더링을 트리거할 때

// useRef( )
// 1. 상태정보
// 2. DOM 접근

// DOM을 꼭 사용해야하는 경우
// 1. 특정 input에 포커스 주기
// 2. 스크롤 박스 조작하기
// 3. canvas 요소에 그림 그리기 등

import { useRef, useState } from 'react';

const MyuseRef001 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countLet = 0;

  const upCountState = () => {
    setCount(count + 1);
  };

  const upCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  };

  const upCountLet = () => {
    countLet = countLet + 1;
    console.log('countLet:', countLet);
  };

  return (
    <div>
      <p>State :{count}</p>
      <p>Ref :{countRef.current}</p>
      <p>Variable :{countLet}</p>

      <p>
        <button onClick={upCountState}>State</button>
        <button onClick={upCountRef}>Ref</button>
        <button onClick={upCountLet}>Variable</button>
      </p>
    </div>
  );
};

export default MyuseRef001;
