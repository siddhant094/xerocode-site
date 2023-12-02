'use client';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Image from 'next/image';
import Social from '../../public/assets/Social.svg';
import Mail from '../../public/assets/mail.png';
import Logo from '../../public/assets/company-logo.png';
import Plane from '../../public/assets/Paper Plane.png';

const newsletter = () => {
    var items = [
        {
            name: 'There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage.',
            description1: '-Abcdefgh Ijklmnop',
            description2: 'Frontend Engineer',
        },
        {
            name: 'There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage.',
            description1: '-Abcdefgh Ijklmnop',
            description2: 'Frontend Engineer',
        },
        {
            name: 'There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage.',
            description1: '-Abcdefgh Ijklmnop',
            description2: 'Frontend Engineer',
        },
    ];
    return (
        <div>
            <Carousel
                fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
                navButtonsProps={{
                    // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                    style: {
                        backgroundColor: '#293FCC',
                        opacity: 1,
                    },
                }}
            >
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>

            <div className='bg-[#C6DEFF] flex flex-col mx-40 mt-5 rounded-[16px] justify-center items-center pt-8'>
                <Image
                    src={Plane}
                    alt='plane image'
                    width={75}
                    height={75}
                    // className='max-w-20 max-h-20'
                />
                <span className='text-[#242331] mb-3 leading-tight text-center font-[Poppins] text-4xl font-semibold mt-4 pt-0 max-sm:text-2xl capitalize'>
                    Subscribe to Our Newsletter & get the
                    <br />
                    Coupon code.
                </span>
                <span className='text-center text-[#242331] font-[Nunito] max-sm:text-base'>
                    All your information is completely confidential
                </span>
                <div className='flex flex-row my-12'>
                    <input
                        type='email'
                        placeholder='Type your Email'
                        className='p-4 rounded-lg text-sm w-[280px] mr-4'
                    />
                    <Button className='bg-[#0C5BC6] font-extrabold text-white normal-case rounded-lg text-sm px-5'>
                        Subscribe
                    </Button>
                </div>
            </div>
            <div className='md:bg-[#C6DEFF1A] flex flex-col md:px-52 md:my-20 md:pt-16 md:pb-12'>
                <div className='flex flex-row pb-16 justify-between max-sm:flex-col'>
                    <div className='flex flex-col md:w-1/4 justify-end'>
                        <Image
                            src={Logo}
                            alt='logo'
                            width={40}
                            className='md:hidden m-5'
                        />
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-5 max-sm:text-center max-sm:font-[Nunito Sans] max-sm:text-base max-sm:p-5 max-sm:whitespace-normal'>
                            You get just what you need to run your cloud
                            workloads--no more, no less. Deploy from our single
                            pane of glass, manage them with ease and scale up as
                            fast as your workload grows
                        </span>

                        <div className='mt-8 max-sm:hidden'>
                            <Image
                                src={Social}
                                alt='Social'
                                width={130}
                                className='inline'
                            />
                            <Image
                                src={Mail}
                                alt='mail'
                                width={22}
                                className='inline ml-4'
                            />
                        </div>
                    </div>
                    <div className='flex flex-row max-sm:p-8 max-sm:justify-between max-sm:text-base'>
                        <div className='flex flex-col md:mr-16'>
                            <span className='pb-8 font-[Poppins] font-semibold leading-[160%] text-[#332C5C]'>
                                Our links
                            </span>
                            <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                                Home
                            </span>
                            <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                                About us
                            </span>
                            <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                                Integrations
                            </span>
                            <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                                Team
                            </span>
                            <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                                Blog
                            </span>
                        </div>
                        <div className='flex flex-col max-sm:items-end'>
                            <span className='pb-8 font-[Poppins] font-semibold leading-[160%] text-[#332C5C]'>
                                Our Services
                            </span>
                            <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                                Infrastructure provisioning
                            </span>
                            <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                                Network infrastructure automation
                            </span>
                            <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                                Cost optimization
                            </span>
                            <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                                Cloud migration
                            </span>
                            <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                                Kubernetes at scale
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col max-sm:text-center'>
                        <span className='pb-8 font-[Poppins] font-semibold leading-[160%] text-[#332C5C]'>
                            Others Links
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                            FAQ
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                            Careers
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                            Privacy Policy
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                            Terms & Conditions
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer max-sm:text-base pb-3'>
                            Kubernetes at scale
                        </span>
                    </div>
                </div>
                {/* <div className='w-80 h-px border border-zinc-400'></div> */}
                <div className='flex flex-row justify-between max-sm:flex-col'>
                    <span className='text-[#494369] font-[Nunito] font-normal text-xs hover:text-[rgb(12,91,198)] hover:font-semibold cursor-pointer max-sm:text-center max-sm:mb-5 max-sm:text-base pb-3'>
                        {'Terms & Condition  |   Privacy Policy '}
                    </span>
                    <span className='text-[#494369] font-[Nunito] font-normal text-xs max-sm:text-center max-sm:mb-5 max-sm:text-base pb-3'>
                        Copyright © 2023 <b>EXOCODE TECHNOLOGIES</b>
                        <br />
                        <span className='max-sm:hidden'>{' | '}</span>
                        {'All rights reserved'}
                    </span>
                </div>
            </div>
        </div>
    );
};

function Item(props: any) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description1}</p>
            <p>{props.item.description2}</p>

            {/* <Button className='CheckButton'>Check it out!</Button> */}
        </Paper>
    );
}

export default newsletter;
