import Image from 'next/image';
import Button from '@mui/material/Button';

import Frame from '../../public/assets/frame.png';
import With from '../../public/assets/with.png';
import Without from '../../public/assets/without.png';

const features = () => {
    return (
        <div className='mt-20'>
            <div className='flex justify-center mb-20'>
                <button className='bg-[#4192FF4D] text-[#0C5BC6] px-8 py-3.5 rounded-full text-lg font-bold font-[Nunito]'>
                    Features
                </button>
            </div>
            <div className='flex flex-col font-[Poppins] text-4xl font-bold mt-0 pt-0'>
                <div className='flex justify-center leading-tight mb-5'>
                    <p className='text-[#0C5BC6]'>Save 1000s </p> of expensive
                    coder hours
                </div>
            </div>
            <p className='flex justify-center text-[#494369] leading-relaxed mb-2'>
                With cloud native technologies, we assist in modernising
                infrastructure and applications for resilience and scalability.
            </p>

            <div className='flex flex-row'>
                <button className='text-[#494369] border border-[F5F5F7] px-2 py-2 radius-2'>
                    Outlined
                </button>
            </div>
            <div className='flex justify-center'>
                <Image
                    src={Frame}
                    alt='welcome dashboard image'
                    width={1000}
                    className='mx-20'
                />
            </div>
            <div className='flex flex-row mt-20 mx-20'>
                <div className='grow flex flex-col items-center'>
                    <p className='text-[#242331] font-[Nunito] font-bold text-2xl mb-20'>
                        Without Xerocodee
                    </p>
                    <Image
                        src={Without}
                        alt='without Xerocode image'
                        width={300}
                        className='mb-44'
                    />
                </div>
                <div className='grow flex flex-col items-center'>
                    <p className='text-[#242331] font-[Nunito] font-bold text-2xl mb-20'>
                        With Xerocodee
                    </p>
                    <Image
                        src={With}
                        alt='with Xerocode image'
                        width={400}
                        className='mb-44'
                    />
                </div>
            </div>

            <div className='flex flex-col font-[Poppins] text-4xl font-bold mt-0 pt-0'>
                <div className='flex justify-center leading-tight mb-5'>
                    Self serve infrastructure platform for <br />
                    <p className='text-[#0C5BC6]'>scaling teams </p>
                </div>
            </div>
        </div>
    );
};

export default features;
