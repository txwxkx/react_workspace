import { useEffect, useState } from 'react';

// useEffect: 컴포넌트가 랜더링될 때마다 특정 작업을 수행하도록 설정한다.
// 특정 작업(side effect): time(setTimeout), ajax
// useEffect: useEffect는 side effect 라는 뜻이다.

//useEffect 4가지 종류
// 1. useEffect(callback): 마운트 후 리랜더링 될 때마다
// 2. useEffect(callback, []): 마운트 후
// 3. useEffect(callback, [state]): 마운트 후, state
// 4. useEffect(callback, {return ();} [state]): 마운트 후, 언마운트 전

const MyuseEffect001 = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  //   useEffect(() => {
  //     console.log('랜더링이 되었습니다.');
  //   }, []);

  //   useEffect(() => {
  //     console.log('name 랜더링이 되었습니다.');
  //   }, [name]);

  //   useEffect(() => {
  //     console.log('nickName 랜더링이 되었습니다.');
  //   }, [nickName]);

  //   useEffect(() => {
  //     console.log('랜더링 return:' + name);
  //     console.log('랜더링 return:' + nickName);
  //   }, [name, nickName]);

  useEffect(() => {
    console.log('랜더링 return:__1' + name);
    return () => {
      console.log('___2');
      console.log('clean up');
    };
  }, [name]);

  return (
    <div>
      <input
        type='text'
        placeholder='name'
        value={name}
        onChange={onChangeName}
      ></input>
      <input
        type='text'
        placeholder='nickName'
        value={nickName}
        onChange={onChangeNickName}
      ></input>
      <br />
      <span>이름</span>
      <br />
      <span>닉네임</span>
    </div>
  );
};

export default MyuseEffect001;
