import logo from '../../public/assets/logo.png';
import Image from 'next/image';
import { Button } from '@mui/material';

const header = () => {
    return (
        <div className='flex justify-center mt-4 font-[Nunito Sans] max-sm:hidden'>
            <div className='nav-bar flex flex-row w-4/5 py-3 px-28 justify-between'>
                <Image src={logo} alt='Company Logo' width={120} />
                <div className='flex flex-row'>
                    <span className='m-auto font-normal text-base mr-5 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                        Home
                    </span>
                    <span className='m-auto font-normal text-base mr-5 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                        Team
                    </span>
                    <span className='m-auto font-normal text-base mr-5 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                        Contact
                    </span>
                    <span className='m-auto font-normal text-base mr-5 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                        Careers
                    </span>
                </div>
                <Button
                    variant='outlined'
                    className='text-[#0C5BC6] normal-case border-[#0C5BC6] px-8'
                >
                    Sign In
                </Button>
            </div>
        </div>
    );
};

export default header;
