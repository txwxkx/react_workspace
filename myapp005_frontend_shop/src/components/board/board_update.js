import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { boardActions } from '../../reduxs/actions/board_action';

const BoardUpdate = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { num } = useParams();

  //useState 후크를 사용하여 inputs라는 상태 변수를 정의.
  const [inputs, setInputs] = useState({
    subject: '',
    content: '',
    filename: null,
  });

  const { subject, content, filename } = inputs;

  //Redux의 useSelector 후크를 사용하여 Redux 스토어에서 현재 게시판 게시물 및 페이지 보기 정보를 가져옴.
  const board = useSelector((state) => state.board.boardDetail);
  const pv = useSelector((state) => state.board.pv);

  //useEffect 후크는 구성요소가 마운트될 때 inputs 변수의 초기 상태를 현재 보드 포스트로 설정하는 데 사용
  useEffect(() => {
    setInputs(board);
  }, []);

  //setInputs 함수는 inputs 상태 변수를 새 값으로 업데이트하는 데 사용
  const handleValueChange = (e) => {
    e.preventDefault();
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setInputs((prev) => {
      return { ...prev, ...nextState };
    });
  };

  //첨부파일 수정
  //setInputs 함수는 inputs 상태 변수를 새 값으로 업데이트하는 데 사용
  const handleFileChange = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.files[0] });
  };

  //handleUpdate 핸들러에서 num, subject, content 및 filename의 현재 값이 새로운 FormData 객체에 추가된 다음 dispatch를 사용하여 Redux 스토어로 발송
  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('num', num);
    formData.append('subject', subject);
    formData.append('content', content);
    formData.append('currentPage', pv.currentPage);

    console.log('filename:', filename);

    //첨부파일이 있으면
    if (filename != null) formData.append('filename', filename);

    //config 개체에는 인증 토큰을 포함하여 API 요청에 대한 헤더가 포함
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('Authorization'),
      },
    };

    await dispatch(boardActions.getBoardUpdate(formData, config));

    setInputs({
      subject: '',
      content: '',
      filename: null,
    });

    navigator(`/board/list/${pv.currentPage}`);
  };

  //수정 취소 버튼
  const handleReset = (e) => {
    e.preventDefault();
    setInputs(board);
  };

  //수정 뒤로 버튼
  const handleBack = (e) => {
    e.preventDefault();
    navigator(-1);
  };

  return (
    <div>
      <form name='frm' encType='multipart/form-data'>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <tbody>
            <tr>
              <th width='20%'>글쓴이</th>
              <td>{board['membersDTO'] ? board['membersDTO']['memberName'] : null}</td>
              <th width='20%'>등록일</th>
              <td>{board.reg_date}</td>
            </tr>

            <tr>
              <th>제목</th>
              <td colSpan='3'>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  //defaultValue={board.subject}
                  value={subject}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <th>내용</th>
              <td colSpan='3'>
                <textarea
                  name='content'
                  id='content'
                  rows='13'
                  cols='40'
                  //defaultValue={board.content}
                  value={content}
                  onChange={handleValueChange}
                ></textarea>
              </td>
            </tr>

            <tr>
              <th>첨부파일</th>
              <td colSpan='3'>
                <input
                  type='file'
                  name='filename'
                  id='filepath'
                  onChange={handleFileChange}
                />
                <span>
                  {board.upload
                    ? board.upload.substring(board.upload.indexOf('_') + 1) //난수값 제거
                    : null}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <button className='btn btn-primary' onClick={handleUpdate}>
          수정
        </button>
        <button className='btn btn-primary' onClick={handleReset}>
          취소
        </button>
        <button className='btn btn-primary' onClick={handleBack}>
          뒤로
        </button>
      </form>
    </div>
  );
};

export default BoardUpdate;