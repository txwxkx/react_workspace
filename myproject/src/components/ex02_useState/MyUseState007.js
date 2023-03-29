import { useRef, useState } from 'react';

// useRef는 React 라이브러리에서 제공하는 Hook 중 하나입니다.

// useRef Hook은 DOM 요소에 접근할 때 사용하거나, 컴포넌트 내부에서 변경되는 값을 유지할 때 사용합니다. useRef로 생성된 객체는 current 프로퍼티를 통해 접근할 수 있으며, 이 값을 변경하면 컴포넌트가 다시 렌더링되지 않습니다.

const MyUseState007 = () => {
  const inputRef = useRef(null);

  // 3. 여기에 최종 입력값이 저장된다.
  const [input, setInput] = useState('');
  const [userList, setUserList] = useState([
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'ccc' },
  ]);

  // 2. 입력값을 감지해 입력값을 업데이트 한다.
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // 5. 위의 userList를 복사한 것 뒤에 입력된 값을 추가해 준다.
  const pushNewUser = () => {
    // setUserList([...userList, { id: userList.length + 1, name: input }]);
    // setInput('');

    setUserList([
      ...userList,
      { id: userList.length + 1, name: inputRef.current.value },
    ]);
    inputRef.current.value = '';
  };

  // 7. 뷰로 정보가 전달된다.
  return (
    <div>
      {/* 1. 여기에 입력값이 들어온다. */}
      {/* useState 이용 */}
      {/* <input
        type='text'
        id='fname'
        value={input}
        ref={inputRef}
        onChange={handleChange}
      ></input> */}
      {/* useRef 사용 */}
      <input type='text' id='fname' ref={inputRef}></input>
      {/* 4. 등록 버튼을 누른다. */}
      <button style={{ backgroundColor: 'green' }} onClick={pushNewUser}>
        등록
      </button>
      {userList.map((element, idx) => {
        return (
          <p key={idx}>
            <span>{element.id}</span>
            <span>{element.name}</span>
          </p>
        );
      })}
    </div>
  );
};

export default MyUseState007;
