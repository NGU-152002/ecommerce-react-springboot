import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
function Banner() {
  return (
    <>
    <div className="banner-containter h-[40px] w-full text-center text-2xl bg-[#80ED99] items-center justify-center flex"> 
        <VerifiedIcon  />
        <h3>SALE THIS MONTH UPTO 20%OFF</h3>
    </div>
    </>
  )
}

export default Banner