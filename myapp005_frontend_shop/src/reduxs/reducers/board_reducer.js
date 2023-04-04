//reducer를 이용하여 store에 data를 저장

import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    boardList:[],
    pv:{currentPage:1},
    boardDetail:{},
    boardFile:null,
};

const boardSlice = createSlice({
    name:'board', 
    initialState,

    reducers: {
        getBoardList(state, action) {
            //console.log(action);
            state.boardList = action.payload.data.aList;
            state.pv = action.payload.data.pv;
        },
    },
});

// 이것을 이용하여 함수명 자동완성을 할 수 있다.
export const boardReducers = boardSlice.actions;
export default boardSlice.reducer;