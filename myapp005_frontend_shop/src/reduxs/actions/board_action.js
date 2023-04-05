import axios from 'axios';
import { boardReducers } from '../reducers/board_reducer';
import { baseUrl } from '../../apiurl';

function getBoardList(currentPage) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/list/${currentPage}`) //백엔드를 요청
      .then((response) => response.data);
    console.log(data);
    dispatch(boardReducers.getBoardList({ data }));
  };
}

function getBoardDetail(num) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/view/${num}`)
      .then((response) => response.data);
    dispatch(boardReducers.getBoardDetail({ data }));
  };
}

function getBoardDownload(upload) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/contentdownload/${upload}`, {
        responseType: 'blob',
      })
      .then((response) => response.data);
  //   dispatch(boardActions.getBoardDownload(data));
    return data;
  };
}
  
function getBoardDelete(num) {
  return async (dispatch) => {
    await axios
      .delete(`${baseUrl}/board/delete/${num}`)
      .then((response) => response.data);
  };
}

function getBoardWrite(formData, config) {
  return async (dispatch) => {
    await axios
      .post(`${baseUrl}/board/write`, formData, config)
      .then((response) => response.data);
  };
}

function getBoardUpdate(formData, config) {
  return async () => {
    await axios
      .put(`${baseUrl}/board/update`, formData, config)
      .then((response) => response.data);
  };
}

export const boardActions = {
  getBoardList, 
  getBoardDetail, 
  getBoardDownload, 
  getBoardDelete,
  getBoardWrite,
  getBoardUpdate,
};