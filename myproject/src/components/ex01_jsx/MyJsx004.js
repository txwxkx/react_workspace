const MyJsx004 = () => {
  const name = 'react';
  return (
    <>
      <div>
        {/* 간단한 조건문 */}
        {name === 'react' ? (
          <h1>리액트입니다.</h1>
        ) : (
          <h1>리액트가 아닙니다.</h1>
        )}
      </div>
    </>
  );
};

export default MyJsx004;
