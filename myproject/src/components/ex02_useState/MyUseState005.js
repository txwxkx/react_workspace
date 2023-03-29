import { useState } from 'react';

const MyUseState005 = () => {
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-1111-1111',
  });

  const handleChange = (e) => {
    // 아이디 값을 무작정 target 에 대입할수가 없다.
    // e.target에서 id와 value를 추출한다.
    const { id, value } = e.target;

    // dictionary에 key값을 넣을 때는 대괄호로 묶는다.
    // setCustomer({ ...customer, // 기존 customer객체를 복사한 뒤
    // [id]: value }); // id키를 가진 값을 value로 설정

    setCustomer((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input
          type='text'
          id='name'
          value={customer.name}
          onChange={handleChange}
        ></input>
      </p>

      <p>
        <span>주소</span>
        {/* 아무 이벤트가 없으면 오류가 나니 뭔가 이벤트를 걸던가 리드 온리를 걸자 */}
        <input
          type='text'
          id='address'
          value={customer.address}
          onChange={handleChange}
        ></input>
      </p>

      <p>
        <span>전화번호</span>
        <input
          type='text'
          id='phone'
          value={customer.phone}
          onChange={handleChange}
        ></input>
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyUseState005;
