import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { boardActions } from '../../reduxs/actions/board_action';

const BoardView = () => {
  const { num } = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const boardDetail = useSelector((state) => state.board.boardDetail); //reducer 이용해서 store에 저장되어있는 것을 가져옴
  // const boardFile = useSelector((state) => state.board.boardFile);
  const pv = useSelector((state) => state.board.pv);

  useEffect(() => {
    dispatch(boardActions.getBoardDetail(num));
  }, [dispatch, num]);

  //download
  const handleDownload = async () => {
    const boardFile = await dispatch(
      boardActions.getBoardDownload(boardDetail.upload)
    );

    // dispatch (boardActions.getBoardDownload(boardDetail.upload));

    const filename = boardDetail.upload.substring(
      boardDetail.upload.indexOf('_') + 1
    );

    console.log(filename);

    const url = window.URL.createObjectURL(new Blob([boardFile]), {
      type: 'application/octet-stream',
    });

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    link.style.cssText = 'display:none';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(boardActions.getBoardDelete(num));
    navigator(`/board/list.${pv.currentPage}`);
  };

  return (
    <div>
      <table className='table table-striped' style={{ marginTop: 20 }}>
        <tbody>
          <tr>
            <th width='20%'>글쓴이</th>
            <td>{boardDetail.reg_date}</td>

            <th width='20%'>조회수</th>
            <td>{boardDetail.readcount}</td>
          </tr>

          <tr>
            <th>제목</th>
            <td colSpan='3'>{boardDetail.subject}</td>
          </tr>

          <tr>
            <th>메일</th>
            <td colSpan='3'>{boardDetail.memberEmail}</td>
          </tr>

          <tr>
            <th>내용</th>
            <td colSpan='3' style = {{whiteSpace: 'pre-line'}}>{boardDetail.content}</td>
          </tr>

          <tr>
            <th>파일</th>
            <td colSpan='3'>
              <button onClick={handleDownload}>
                {boardDetail.upload
                  ? boardDetail.upload.substring(
                      boardDetail.upload.indexOf('_') + 1
                    )
                  : null}
              </button>
              {/* 조건문 & 난수 제거 */}
            </td>
          </tr>
        </tbody>
      </table>

      <Link className='btn btn-primary' to={`/board/list/${pv.currentPage}`}>
        리스트
      </Link>

      <Link className='btn btn-primary' to={`/board/write/${boardDetail.num}`}>
        답변
      </Link>

      <Link className='btn btn-primary' to={`/board/update/${num}`}>
        수정
      </Link>

      <button className='btn btn-primary' onClick={handleDelete}>
        삭제
      </button>

    </div>
  );
};

export default BoardView;