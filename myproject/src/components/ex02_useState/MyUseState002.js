import { useState } from 'react';

const MyUseState002 = () => {
  // useState는 React에서 제공하는 Hook 중 하나로, 함수형 컴포넌트에서 상태를 관리할 때 사용하는 함수입니다.

  // 현재 컴포넌트 안에서만 사용할 수 있다.

  // useState를 사용하면 상태를 변경할 때마다 컴포넌트가 다시 렌더링됩니다. 따라서, 상태 값이 변경되면 해당 상태를 사용하는 부분도 모두 다시 렌더링됩니다.

  // 또한, useState는 함수형 컴포넌트에서도 상태를 관리할 수 있도록 해줌으로써, 클래스형 컴포넌트보다 더 간결하고 가독성이 좋은 코드를 작성할 수 있게 해줍니다.

  // const [상태, 상태변경함수] = useState(초기값)
  const [cnt, setCnt] = useState(0);

  const handleClick = () => {
    setCnt(cnt + 1);
  };

  return (
    <div>
      <p>
        <span>{cnt}</span>
        <button onClick={handleClick}>CNT UPDATE</button>
      </p>
    </div>
  );
};

export default MyUseState002;
