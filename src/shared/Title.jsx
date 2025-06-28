import React from 'react';

const Title = ({title}) => {
    return (
        <h2 className='text-4xl md:text-5xl text-main text-center font-semibold mt-16 mb-10 md:mt-24 md:mb-14'>
          {title}  
        </h2>
    );
};

export default Title;