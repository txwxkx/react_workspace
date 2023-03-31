//"cnt"의 값이 "handleClick" 함수 내에서 업데이트되고 있지만 업데이트된 값이 컴포넌트의 UI에 반영되지 않기 때문에 이 코드에서 "CNT UPDATE" 버튼을 눌렀을 때 카운트가 올라가지 않는다. 이는 "cnt" 변수가 "MyBasic001" 구성 요소의 함수 본문 내에서 로컬 변수로 선언되어 구성 요소를 다시 렌더링하는 사이에 유지되지 않기 때문이다.

const MyBasic001 = () => {
  let cnt = 0;
  let color = 'black';

  const handleClick = () => {
    cnt = cnt + 1;
    console.log(`cnt:${cnt}`);
  };

  return (
    <div>
      <p>
        <span>{cnt}</span>
        <button onClick={handleClick}>CNT UPDATE</button>
      </p>
    </div>
  );
};

export default MyBasic001;
