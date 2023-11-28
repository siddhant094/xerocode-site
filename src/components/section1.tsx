import React from 'react';
import Image from 'next/image';
import hero from '../../public/assets/hero.png';
import image1 from '../../public/assets/image11.png';
import image2 from '../../public/assets/image12.png';
import image3 from '../../public/assets/image13.png';
import image4 from '../../public/assets/image14.png';
import Button from '@mui/material/Button';

const section1 = () => {
    return (
        <div>
            <section className='flex flex-col'>
                <h1 className='flex flex-col pt-20 font-[Poppins] text-5xl font-bold'>
                    <p className='flex justify-center leading-tight'>
                        Build your audience and grow your
                    </p>
                    <p className='flex justify-center leading-tight mb-5'>
                        brand
                    </p>
                </h1>
                <p className='flex justify-center text-[#797979] leading-relaxed mb-2'>
                    no more, no less. Deploy from our single pane of glass,
                    manage them with ease and scale up as fast as
                </p>
                <p className='flex justify-center text-[#797979] leading-relaxed'>
                    your workload grows.
                </p>

                <div className='flex justify-center'>
                    <Button
                        variant='contained'
                        disableElevation
                        className='items-center max-w-fit bg-[#0C5BC6] mt-8 px-8'
                    >
                        Get Started Now
                    </Button>
                </div>
                <div className='flex flex-row pl-32 pr-32 mt-2'>
                    <Image src={hero} alt='hero image' />
                </div>
            </section>

            <section className='flex flex-row justify-between mx-40 mt-20'>
                <div className='flex flex-col justify-between'>
                    <Image
                        src={image1}
                        alt='greenhouse logo'
                        width={150}
                        height={50}
                        className='mb-[20px]'
                    />
                    <Image
                        src={image1}
                        alt='BRSR logo'
                        width={150}
                        height={50}
                        // className='mb-10'
                    />
                </div>
                <div className='flex flex-col justify-between'>
                    <Image
                        src={image2}
                        alt='greenhouse logo'
                        width={112}
                        height={40}
                        // className='mb-10'
                    />
                    <Image
                        src={image2}
                        alt='BRSR logo'
                        width={112}
                        height={40}
                        // className='mb-[20px]'
                    />
                </div>
                <div className='flex flex-col justify-between'>
                    <Image
                        src={image3}
                        alt='greenhouse logo'
                        width={100}
                        height={50}
                        className='mb-[30px]'
                    />
                    <Image
                        src={image3}
                        alt='BRSR logo'
                        width={100}
                        height={50}
                        // className='mb-[20px]'
                    />
                </div>
                <div className='flex flex-col justify-between'>
                    <Image
                        src={image4}
                        alt='greenhouse logo'
                        width={60}
                        height={20}
                        className='mb-[20px]'
                    />
                    <Image
                        src={image4}
                        alt='BRSR logo'
                        width={60}
                        height={20}
                        // className='mb-10'
                    />
                </div>
            </section>
        </div>
    );
};

export default section1;
