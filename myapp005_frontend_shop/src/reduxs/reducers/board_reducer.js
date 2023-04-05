import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  boardList: [],
  pv: { currentPage: 1 },
  boardDetail: {},
  boardFile: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState, //이름을 주고 초기값 설정(initialState)

  reducers: {
    getBoardList(state, action) {
      state.boardList = action.payload.data.aList;
      state.pv = action.payload.data.pv;
    },

    getBoardDetail(state, action) {
      state.boardDetail = action.payload.data;
    },

    getBoardDownload(state, action) {
      state.boardFile = action.payload.data;
    },
  },
});

//이것을 사용해서 함수명 자동완성을 할 수 있다.
export const boardReducers = boardSlice.actions;
export default boardSlice.reducer;
