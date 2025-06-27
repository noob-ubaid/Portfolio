import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1500px] mx-auto px-4 md:px-0'>
            {children}
        </div>
    );
};

export default Container;