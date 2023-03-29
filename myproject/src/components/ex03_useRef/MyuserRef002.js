import { useEffect, useRef } from 'react';

const MyuseRef002 = () => {
  const nameRef = useRef('');

  const handleBtn = () => {
    console.log(nameRef.current);
    console.log(nameRef.current.value);
    document.querySelector('#ndata').value = '';
  };

  // useEffect는 컴포넌트가 렌더링될 때마다 실행되며, 의존성 배열(dependency array)에 지정된 props나 state가 변경될 때마다 재실행됩니다.
  // 이를 통해 컴포넌트에서 필요한 API 호출, 이벤트 등의 작업을 수행할 수 있습니다. 또한, useEffect 내부에서 반환된 함수는 컴포넌트가 언마운트(unmount)되거나 업데이트(update)될 때 정리(clean-up) 작업을 수행할 수 있습니다.
  useEffect(() => {
    let ndata = document.querySelector('#ndata');
    ndata.focus();
  });
  return (
    <div>
      <input
        type='text'
        placeholder='이름입력'
        ref={nameRef}
        id='ndata'
      ></input>
      <button onClick={handleBtn}>Click</button>
    </div>
  );
};

export default MyuseRef002;
