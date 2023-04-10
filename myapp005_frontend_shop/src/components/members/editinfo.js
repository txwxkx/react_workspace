import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../../apiurl';
import { useNavigate } from 'react-router-dom';

const EditInfo = () => {
  const navigator = useNavigate();

  const [members, setMembers] = useState({
    memberEmail: "",
    memberPass: "",
    memberName: "",
    memberPhone: "",
  });

  const { memberEmail, memberPass, memberName, memberPhone } = members;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('Authorization'),
    },
  };

  const info = async () => {
    return await axios
      .get(`${baseUrl}/member/editinfo/${localStorage.memberEmail}`, 
      config)
      .then((response) => {
        setMembers({...response.data, memberPass: ''}); //난수 패스워드로 들어가고 ''으로 업데이트 됨
      });
  };

  //useEffect : 기능적 구성 요소의 부작용을 처리할 수 있게 해주는 React의 후크
  useEffect(() => {
    console.log(info());
    //const data = info()에서 const data에 setMembers를 바로 넣어줌.
    info();
  }, []);

  const [passwordCheck, setPasswordCheck] = useState('');

  const passChange = (e) => {
    e.preventDefault();
    if(memberPass !== e.target.value) setPasswordCheck('비밀번호 불일치');
    else setPasswordCheck('비밀번호 일치');
  };

  const handleValueChange = (e) => {
    e.preventDefault();
    setMembers({...members, [e.target.name]: e.target.value}); //중괄호 위치 중요(객체이기 때문에 중괄호 없으면 배열로 인식)
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if(!memberPass) {
      alert('비밀번호를 입력하세요.');
      return;
    }

    await axios.post(`${baseUrl}/member/update`, members, config);
    localStorage.setItem('memberName', memberName);
    //navigator('/');
    window.location.replace('/');
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="container">
          <h1>회원정보 수정</h1>
          <div className="form-group mb-1">
            <input
              type="email"
              className="form-control"
              name="memberEmail"
              placeholder="이메일" 
              //local 저장소에 저장되어 있는 memberEmail을 불러옴
              value={localStorage.memberEmail}
              //이메일은 변경하지 못하게 읽기 전용으로 설정
              readOnly
            />
          </div>

          <div className="form-group mb-1">
            <input
              type="password"
              className="form-control"
              name="memberPass"
              placeholder="비밀번호"
              value={memberPass}
              onChange={handleValueChange}
            />
          </div>

          <div className="form-group mb-1">
            <input
              type="password"
              className="form-control"
              name="memberPass2"
              placeholder="비밀번호 확인"
              onChange={passChange}
            />
            <span>{passwordCheck}</span>
          </div>

          <div className="form-group mb-1">
            <input
              type="text"
              className="form-control"
              name="memberName"
              placeholder="이름"
              value={memberName}
              onChange={handleValueChange}
            />
          </div>

          <div className="form-group mb-1">
            <input
              type="text"
              className="form-control"
              name="memberPhone"
              placeholder="연락처"
              value={memberPhone}
              onChange={handleValueChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            회원정보 수정
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInfo;