import { useState } from 'react';
import Left1 from './Left1';
import Right1 from './Right1';
import { UserContext } from './contexts/UserContext';
import { ThemeContext } from './contexts/ThemeContext';

import './MyuseContext01.css';

const MyuseContext01 = () => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('홍길동');

    const onHandleIncrease = () => {
        setNumber(number + 1);
    };

    const onHandleName = () => {
        setName(name === '홍길동' ? '여진구' : '홍길동');
    };

    return (
        <div id = 'page'>
            <h1>page</h1>
            <div className = 'grid'>
                 {/* 순서 상관없이 잘 닫아 주기만 하면 됨
                 자식에서 사용을 할 때도 묶어줘야 됨 */}
                <UserContext.Provider value={{name, setName, onHandleName}}> 
                    <ThemeContext.Provider value={{number, setNumber, onHandleIncrease}}>
                    <Left1 />
                    <Right1 />
                    </ThemeContext.Provider>
                </UserContext.Provider>                
            </div>
        </div>
    );
};

export default MyuseContext01;