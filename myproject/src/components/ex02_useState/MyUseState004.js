import { useState } from 'react';

const MyUseState004 = () => {
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-1111-1111',
  });

  //state는 setter 로만 값의 변경 가능하다.

  // setter 에 name 만 저장해놨으므로 다른 값들은 한 번 실행 이후 undefined가 되어버린다. state로 저장된 것은 비동기화로 처리된다.
  const handleName = (e) => {
    console.log(e.target.value);
    //console.log(customer.address);
    // setCustomer({
    //   ...customer, // 스프레드 연산자를 이용한 값 복사
    //   name: e.target.value, // 수정할 것은 항상 뒤로. 가장 마지막에 업데이트 될 수 있게 해야한다.
    // });
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });
    //console.log(customer.address);
  };

  const handleAddress = (e) => {
    // setCustomer({ ...customer, address: e.target.value });
    // 어느쪽으로 쓰든 괜찮다
    setCustomer((prevState) => {
      return { ...prevState, address: e.target.value };
    });
  };

  const handlePhone = (e) => {
    // setCustomer({ ...customer, phone: e.target.value });
    setCustomer((prevState) => {
      return { ...prevState, phone: e.target.value };
    });
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input type='text' value={customer.name} onChange={handleName}></input>
      </p>

      <p>
        <span>주소</span>
        {/* 아무 이벤트가 없으면 오류가 나니 뭔가 이벤트를 걸던가 리드 온리를 걸자 */}
        <input
          type='text'
          value={customer.address}
          onChange={handleAddress}
        ></input>
      </p>

      <p>
        <span>전화번호</span>
        <input
          type='text'
          value={customer.phone}
          onChange={handlePhone}
        ></input>
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyUseState004;
