const MyJsx005 = () => {
  let name = 'REACT';
  return (
    <div>
      <p>{name === 'react' ? 'REACT' : null}</p>
      {/* 출력결과 <p></p> -> 비어있는 요소 출력 */}
    </div>
  );
};

export default MyJsx005;
