import logo from '../../public/assets/logo.png';
import clogo from '../../public/assets/company-logo.png';
import Image from 'next/image';
import { Button } from '@mui/material';

const header = () => {
    return (
        <div className='flex justify-center md:mt-4 font-[Nunito Sans] max-sm:w-full max-sm:m-4 max-sm:p-4'>
            <div className='md:nav-bar shadow rounded flex flex-row md:w-4/5 md:py-3 md:px-28 justify-between max-sm:w-full'>
                <Image
                    src={logo}
                    alt='Company Logo'
                    width={120}
                    className='max-sm:hidden'
                />
                <Image
                    src={clogo}
                    alt='Company Logo'
                    width={40}
                    className='md:hidden'
                />
                <div className='flex flex-row max-sm:hidden'>
                    <span className='font-normal text-base md:mr-5 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                        Home
                    </span>
                    <span className='font-normal text-base md:mr-5 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                        Team
                    </span>
                    <span className='font-normal text-base md:mr-5 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                        Contact
                    </span>
                    <span className='font-normal text-base md:mr-5 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                        Careers
                    </span>
                </div>
                <Button
                    variant='outlined'
                    className='text-[#0C5BC6] normal-case border-[#0C5BC6] px-8 max-sm:hidden'
                >
                    Sign In
                </Button>
            </div>
        </div>
    );
};

export default header;
