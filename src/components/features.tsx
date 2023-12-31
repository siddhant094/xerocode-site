import Image from 'next/image';
import Button from '@mui/material/Button';

import Frame from '../../public/assets/Frame.png';
import With from '../../public/assets/with.png';
import Without from '../../public/assets/without.png';
import I1 from '../../public/assets/infrastructure.png';
import I2 from '../../public/assets/neural-network.png';
import I3 from '../../public/assets/cyber-security.png';
import I4 from '../../public/assets/development.png';

const features = () => {
    return (
        <div className='md:mt-20 max-sm:mt-14'>
            <div className='flex justify-center mb-20'>
                <button className='bg-[#4192FF4D] text-[#0C5BC6] px-8 py-3.5 rounded-full text-lg font-bold font-[Nunito]'>
                    Features
                </button>
            </div>
            <div className='text-[#242331] leading-tight mb-5 text-center font-[Poppins] text-4xl font-semibold mt-0 pt-0 max-sm:text-2xl mx-2'>
                <span className='md:text-[#0C5BC6]'>Save {'1000s '}</span>
                of expensive coder <br className='md:hidden' /> hours
            </div>
            <p className='flex justify-center text-[#494369] font-[Nunito Sans] leading-relaxed mb-2 text-center max-sm:text-[#797979] max-sm:mx-12 max-sm:font-[Nunito]'>
                With cloud native technologies, we assist in modernising
                infrastructure and applications for resilience and scalability.
            </p>

            <div className='flex flex-wrap justify-center mt-8 space-x-4 md:mt-12 md:space-x-6 lg:space-x-8 mb-4'>
                <button className='border-b-2 border-blue-500 bg-white text-gray-700 py-2 px-4 md:mt-0 mt-2 md:py-1 md:px-4 rounded-md text-sm md:text-md font-semibold transition-colors duration-300 hover:text-blue-500'>
                    Apps
                </button>
                <button className='border border-gray-200 bg-white text-gray-700 py-2 px-4 md:mt-0 mt-2 md:py-1 md:px-4 rounded-md text-sm md:text-md font-semibold transition-colors duration-300 hover:text-blue-500'>
                    App Config
                </button>
                <button className='border border-gray-200 bg-white text-gray-700 py-2 px-4 md:mt-0 mt-2 md:py-1 md:px-4 rounded-md text-sm md:text-md font-semibold transition-colors duration-300 hover:text-blue-500'>
                    Pipeline
                </button>
                <button
                    data-testid='features-text'
                    className='border border-gray-200 bg-white text-gray-700 py-2 px-4 md:mt-0 mt-2 md:py-1 md:px-4 rounded-md text-sm md:text-md font-semibold transition-colors duration-300 hover:text-blue-500'
                >
                    Infra Creation
                </button>
                <button className='border border-gray-200 bg-white text-gray-700 py-2 px-4 md:mt-0 mt-2 md:py-1 md:px-4 rounded-md text-sm md:text-md font-semibold transition-colors duration-300 hover:text-blue-500'>
                    Cost
                </button>
                <button className='border border-gray-200 bg-white text-gray-700 py-2 px-4 md:mt-0 mt-2 md:py-1 md:px-4 rounded-md text-sm md:text-md font-semibold transition-colors duration-300 hover:text-blue-500'>
                    Add-ons
                </button>
                <button className='border border-gray-200 bg-white text-gray-700 py-2 px-4 md:mt-0 mt-2 md:py-1 md:px-4 rounded-md text-sm md:text-md font-semibold transition-colors duration-300 hover:text-blue-500'>
                    Monitoring
                </button>
                <button className='border border-gray-200 bg-white text-gray-700 py-2 px-4 md:mt-0 mt-2 md:py-1 md:px-4 rounded-md text-sm md:text-md font-semibold transition-colors duration-300 hover:text-blue-500'>
                    Connections
                </button>
            </div>

            <div className='flex justify-center mx-20'>
                <Image
                    src={Frame}
                    alt='welcome dashboard image'
                    // width={1000}
                    className='md:mx-20 max-sm:mx-10 max-sm:mt-5'
                />
            </div>
            <div className='flex md:flex-row mt-20 mx-20 max-sm:flex-col'>
                <div className='grow flex flex-col items-center'>
                    <p className='text-[#242331] font-[Nunito] font-bold text-2xl md:mb-20 max-sm:mb-8 max-sm:text-xl'>
                        Without Xerocodee
                    </p>
                    <Image
                        src={Without}
                        alt='without Xerocode image'
                        width={300}
                        className='md:mb-28 max-sm:mb-12'
                    />
                </div>
                <div className='grow flex flex-col items-center'>
                    <p
                        data-testid='features-text2'
                        className='text-[#242331] font-[Nunito] font-bold text-2xl md:mb-20 max-sm:mb-8 max-sm:text-xl'
                    >
                        With Xerocodee
                    </p>
                    <Image
                        src={With}
                        alt='with Xerocode image'
                        width={400}
                        className='md:mb-28 max-sm:mb-16'
                    />
                </div>
            </div>

            <div className='text-[#242331] leading-tight mb-12 text-center font-[Poppins] text-4xl font-semibold mt-8 pt-0 max-sm:text-2xl max-sm:mx-5'>
                Self serve infrastructure platform {'for '}
                <span className='md:text-[#0C5BC6]'>
                    {'scaling '}
                    <br className='max-sm:hidden' />
                    teams{' '}
                </span>
            </div>

            <div className='flex md:flex-row justify-evenly max-sm:flex-col max-sm:text-[#5E587A]'>
                <div className='flex flex-col'>
                    <div className='flex flex-row scaling-box px-4 py-4 md:mb-10 max-sm:mb-6 max-sm:mx-5'>
                        <div className='img-box max-sm:w-1/6 max-sm:h-1/6 max-sm:rounded-md flex justify-center'>
                            <Image
                                src={I1}
                                alt='Infrastructure'
                                className='px-2 py-2 max-sm:w-14'
                            />
                        </div>
                        <div className='flex flex-col pl-4'>
                            <span className='font-[Poppins] max-sm:text-[#332C5C] max-sm:text-lg'>
                                Infrastructure
                            </span>
                            <span className='font-[Nunito]'>
                                Automated Cloud Infrastructure Workflow
                            </span>
                        </div>
                    </div>

                    <div className='flex flex-row scaling-box px-4 py-4 md:mb-10 max-sm:mb-6 max-sm:mx-5'>
                        <div className='img-box max-sm:w-1/6 max-sm:h-1/6 max-sm:rounded-md flex justify-center'>
                            <Image
                                src={I2}
                                alt='Networking'
                                className='px-2 py-2 max-sm:w-14'
                            />
                        </div>
                        <div className='flex flex-col pl-4'>
                            <span className='font-[Poppins] max-sm:text-[#332C5C] max-sm:text-lg'>
                                Networking
                            </span>
                            <span className='font-[Nunito]'>
                                Flexible Secure Application Connectivity
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex flex-row scaling-box px-4 py-4 md:mb-10 max-sm:mb-6 max-sm:mx-5'>
                        <div className='img-box max-sm:w-1/6 max-sm:h-1/6 max-sm:rounded-md flex justify-center'>
                            <Image
                                src={I3}
                                alt='Security'
                                className='px-2 py-2 max-sm:w-14'
                            />
                        </div>
                        <div className='flex flex-col pl-4'>
                            <span className='font-[Poppins] max-sm:text-[#332C5C] max-sm:text-lg'>
                                Security
                            </span>
                            <span className='font-[Nunito]'>
                                Modern Secure Infrastructure Approach
                            </span>
                        </div>
                    </div>

                    <div className='flex flex-row scaling-box px-4 py-4 md:mb-10 max-sm:mb-6 max-sm:mx-5'>
                        <div className='img-box max-sm:w-1/6 max-sm:h-1/6 max-sm:rounded-md flex justify-center'>
                            <Image
                                src={I4}
                                alt='Applications'
                                className='px-2 py-2 max-sm:w-14'
                            />
                        </div>
                        <div className='flex flex-col pl-4'>
                            <span className='font-[Poppins] max-sm:text-[#332C5C] max-sm:text-lg'>
                                Applications
                            </span>
                            <span className='font-[Nunito] max-sm:text-base'>
                                Automate Application Deployment for Agility
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default features;
