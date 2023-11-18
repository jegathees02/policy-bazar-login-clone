import React from 'react';
import logos from '../assets/logo.png';

function Logo() {
    return(
        <>
        <div className='h-[65px] w-[182px]'>
            {/* <img src="../" */}
            <img src={logos} alt='logo' />
        </div>
        </>
    )
}

export default Logo;