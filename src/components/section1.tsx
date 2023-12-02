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
                <div className='flex items-center justify-center'>
                    <div className='w-80 h-px border border-zinc-400 items-center'></div>
                </div>
                <h1 className='text-[#242331] flex flex-col pt-20 font-[Poppins] text-5xl font-bold max-sm:text-2xl'>
                    <div className='flex justify-center leading-tight text-center'>
                        Build your audience and <br className='md:hidden' />{' '}
                        grow {'your '}
                        <br className='max-sm:hidden' /> brand
                    </div>
                </h1>
                <div className='flex justify-center text-[#797979] leading-relaxed mb-2 text-center max-sm:px-8 max-sm:mt-4'>
                    no more, no less. Deploy from our single pane of glass,
                    manage them with ease and scale up as fast {'as '}
                    <br className='max-sm:hidden' />
                    your workload grows.
                </div>
                <p className='flex justify-center text-[#797979] leading-relaxed'></p>

                <div className='flex justify-center'>
                    <Button
                        variant='contained'
                        disableElevation
                        className='items-center max-w-fit bg-[#0C5BC6] mt-8 px-8 normal-case max-sm:mt-4'
                    >
                        Get Started Now
                    </Button>
                </div>
                <div className='flex flex-row md:pl-32 md:pr-32 mt-2 max-sm:mx-2'>
                    <Image src={hero} alt='hero image' />
                </div>
            </section>

            <section className='flex flex-row justify-between md:mx-40 md:mt-20 max-sm:mx-16 max-sm:mt-8'>
                <div className='flex flex-col justify-between'>
                    {/* <div className={'image-container'}> */}
                    <Image
                        src={image1}
                        alt='greenhouse logo'
                        // width={150}
                        // height={50}
                        className='mb-[20px] md:w-[150px] max-sm:w-12'
                    />
                    {/* </div> */}
                    <Image
                        src={image1}
                        alt='BRSR logo'
                        // width={150}
                        // height={50}
                        className='md:max-w-[150px] max-sm:w-12'
                    />
                </div>
                <div className='flex flex-col justify-between'>
                    <Image
                        src={image2}
                        alt='greenhouse logo'
                        width={112}
                        height={40}
                        className='md:w-[112px] max-sm:w-12'
                    />
                    <Image
                        src={image2}
                        alt='BRSR logo'
                        width={112}
                        height={40}
                        className='md:w-[112px] max-sm:w-12'
                    />
                </div>
                <div className='flex flex-col justify-between'>
                    <Image
                        src={image3}
                        alt='greenhouse logo'
                        // width={100}
                        // height={50}
                        className='md:w-[100px] max-sm:w-12'
                    />
                    <Image
                        src={image3}
                        alt='BRSR logo'
                        // width={100}
                        // height={50}
                        // className='mb-[20px]'
                        className='md:w-[100px] max-sm:w-12'
                    />
                </div>
                <div className='flex flex-col justify-between'>
                    <Image
                        src={image4}
                        alt='greenhouse logo'
                        // width={60}
                        // height={20}
                        // className='mb-[20px]'
                        className='md:max-w-[60px] max-sm:w-8 mb-5'
                    />
                    <Image
                        src={image4}
                        alt='BRSR logo'
                        // width={60}
                        // height={20}
                        // className='mb-10'
                        className='md:max-w-[60px] max-sm:w-8'
                    />
                </div>
            </section>
        </div>
    );
};

export default section1;
