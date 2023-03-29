import { useState } from 'react';

const MyUseState006 = () => {
  const [customerList, setCustomerList] = useState([
    {
      name: '고수',
      address: '서울시 강남구',
      phone: '010-1111-1111',
    },
    {
      name: '여진구',
      address: '서울시 서초구',
      phone: '010-2222-2222',
    },
  ]);

  // input에서 입력받은 값이 여기에 저장된다.
  const [customer, setCustomer] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // setCustomer({ ...customer, [name]: value });
    setCustomer((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleCommit = () => {
    // customer는 dict이므로 spread 연산자가 불가하다.
    setCustomerList([...customerList, customer]);
    setCustomer({
      name: '',
      address: '',
      phone: '',
    });
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input
          type='text'
          value={customer.name}
          name='name'
          onChange={handleChange}
        ></input>
      </p>

      <p>
        <span>주소</span>
        <input
          type='text'
          value={customer.address}
          name='address'
          onChange={handleChange}
        ></input>
      </p>

      <p>
        <span>전화번호</span>
        <input
          type='text'
          value={customer.phone}
          name='phone'
          onChange={handleChange}
        ></input>
      </p>

      <button onClick={handleCommit}>확인</button>

      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>주소</th>
            <th>전화</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((element, idx) => {
            return (
              <tr key={idx}>
                <td>{element.name}</td>
                <td>{element.address}</td>
                <td>{element.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyUseState006;
