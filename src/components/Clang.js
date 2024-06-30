import React from 'react';
import clangImage from '../assets/c.png';  // Renamed the import to avoid conflict

const Clang = () => {
  return (
    <div>
      <img src={clangImage} alt="C language logo" className='h-[80px] w-[100px]' />
    </div>
  );
};

export default Clang;
