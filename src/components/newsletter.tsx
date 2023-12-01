'use client';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Image from 'next/image';
import Social from '../../public/assets/Social.svg';
import Mail from '../../public/assets/mail.png';
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
            newsletter
            <div className='bg-[#C6DEFF1A] flex flex-col px-52 my-20 pt-16 pb-12 border'>
                <div className='flex flex-row pb-16 justify-between'>
                    <div className='flex flex-col w-1/4 justify-end '>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-5'>
                            You get just what you need to run your cloud
                            workloads--no more, no less. Deploy from our single
                            pane of glass, manage them with ease and scale up as
                            fast as your workload grows
                        </span>

                        <div className='mt-8'>
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
                    <div className='flex flex-col'>
                        <span className='pb-8 font-[Poppins] font-semibold leading-[160%] text-[#332C5C]'>
                            Our links
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            Home
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            About us
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            Integrations
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            Team
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            Blog
                        </span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='pb-8 font-[Poppins] font-semibold leading-[160%] text-[#332C5C]'>
                            Our Services
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            Infrastructure provisioning
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            Network infrastructure automation
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            Cost optimization
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            Cloud migration
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            Kubernetes at scale
                        </span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='pb-8 font-[Poppins] font-semibold leading-[160%] text-[#332C5C]'>
                            Others Links
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            FAQ
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            Careers
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            Privacy Policy
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            Terms & Conditions
                        </span>
                        <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-8 hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                            Kubernetes at scale
                        </span>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='text-[#494369] font-[Nunito] font-normal text-xs hover:text-[#0C5BC6] hover:font-semibold cursor-pointer'>
                        {'Terms & Condition  |   Privacy Policy '}
                    </span>
                    <span className='text-[#494369] font-[Nunito] font-normal text-xs'>
                        Copyright © 2023 <b>EXOCODE TECHNOLOGIES</b>
                        {' | All rights reserved'}
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
