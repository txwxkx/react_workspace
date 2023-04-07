import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../apiurl';

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    memberEmail: '',
    memberPass: '',
  });

  const { memberEmail, memberPass } = inputs;
  //const navigator = useNavigate();

  const handleValueChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const config = { headers: { 'Content-Type': 'application/json' } };

  const onSubmit = async (e) => {
    e.preventDefault();
    //get방식으로 보내면 비밀번호 등 노출됨 , 그래서 post 방식으로 보냄
    await axios
      .post(`${baseUrl}/login`, inputs, config)
      .then((response) => {
        console.log('response:', response.data);
        //let jwtToken = response.headers['Authorization'];
        let jwtToken = response.headers.get('Authorization');
        console.log(jwtToken);

        let jwtMemberName = response.data.memberName;
        let jwtMemberEmail = response.data.memberEmail;
        let jwtAuthRole = response.data.authRole;

        localStorage.setItem('Authorization', jwtToken);
        localStorage.setItem('memberEmail', jwtMemberEmail);
        localStorage.setItem('memberName', jwtMemberName);
        localStorage.setItem('authRole', jwtAuthRole);
        localStorage.setItem('isLogin', true); //로그인 상태에서만 사용하기 위함

        setInputs({ memberEmail: '', memberPass: '' });
      })
      .then((response) => {
        //navigatior('/');
        window.location.replace('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className='container text-center mt-5'>
      <div className='mx-5'>
        <h1>로그인</h1>
        <form onSubmit={onSubmit}>
          <div className='form-group mt-1'>
            <input
              type='email'
              name='memberEmail'
              className='form-control'
              id='memberEmail'
              value={memberEmail}
              placeholder='이메일'
              maxLength='20'
              onChange={handleValueChange}
            />
          </div>
          <div className='form-group mt-1'>
            <input
              type='password'
              className='form-control'
              name='memberPass'
              id='memberPass'
              value={memberPass}
              placeholder='비밀번호'
              maxLength='20'
              onChange={handleValueChange}
            />
          </div>
          <div className='mt-1'>
            <button type='submit' className='btn btn-primary'>
              로그인
            </button>
            <Link className='btn btn-primary' to='/joinadd'>
              회원 가입
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;