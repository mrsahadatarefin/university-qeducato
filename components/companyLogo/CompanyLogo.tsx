import React from 'react';
import img1 from '../../public/assates/company logo/b-logo1.png'
import img2 from '../../public/assates/company logo/b-logo3.png'
import img3 from '../../public/assates/company logo/b-logo4.png'
import img4 from '../../public/assates/company logo/b-logo5.png'
import Image from 'next/image';

const CompanyLogo = () => {
    
    return (
        <div className='bg-[#125875] grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-4 content-center p-10 mt-20 justify-items-center gap-20 lg:gap-0'>
     
       <div>
        <Image src={img1} alt=''></Image>
       </div>
       <div>
        <Image src={img2} alt=''></Image>
       </div>
       <div>
        <Image src={img3} alt=''></Image>
       </div>
       <div>
        <Image src={img4} alt=''></Image>
       </div>

            
        </div>
    );
};

export default CompanyLogo;