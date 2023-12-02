'use client';
// import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Image from 'next/image';
import Social from '../../public/assets/Social.svg';
import Mail from '../../public/assets/mail.png';
import Logo from '../../public/assets/company-logo.png';
import Plane from '../../public/assets/Paper Plane.png';
import Quotes from '../../public/assets/quotes.png';

import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles.module.css';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];

const items = {
    elastic: [
        {
            id: 1,
            title: 'There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage.',
            imageUrl:
                'https://res.cloudinary.com/kizmelvin/image/upload/v1645530542/kizmelvin/Carousel%20assets/luwadlin-bosman-J1oObe7WWjk-unsplash_f56oh3.jpg',
        },
        {
            id: 2,
            title: 'There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage.',
            imageUrl:
                'https://res.cloudinary.com/kizmelvin/image/upload/v1645529949/kizmelvin/Carousel%20assets/ali-kazal-q9rpNOd1hcI-unsplash_fhaqzq.jpg',
        },
        {
            id: 3,
            title: 'There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage.',
            imageUrl:
                'https://res.cloudinary.com/kizmelvin/image/upload/v1645530199/kizmelvin/Carousel%20assets/slim-emcee-jzdOX0XkXr8-unsplash_zocsdq.jpg',
        },
        {
            id: 4,
            title: 'There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage.',
            imageUrl:
                'https://res.cloudinary.com/kizmelvin/image/upload/v1645530863/kizmelvin/Carousel%20assets/francisco-t-santos-YRcioOWh4mA-unsplash_1_yoowse.jpg',
        },
        {
            id: 5,
            title: 'There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage.',
            imageUrl:
                'https://res.cloudinary.com/kizmelvin/image/upload/v1645531100/kizmelvin/Carousel%20assets/markus-spiske-WUehAgqO5hE-unsplash_zi9wvh.jpg',
        },
    ],
};

function BootstrapCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='flex justify-center max-w-full'>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={null}
                className='w-3/4'
            >
                {items.elastic.map((item) => (
                    <Carousel.Item key={item.id} className='' interval={4000}>
                        <div className={styles.content}>
                            <div className={styles.blueBox}>
                                <Image
                                    src={Quotes}
                                    width={80}
                                    height={80}
                                    alt='quotes'
                                />
                            </div>
                            <div className={styles.review}>
                                <p className={styles.reviewText}>
                                    {item.title}
                                </p>
                                <p className={styles.reviewer}>- John Doe</p>
                                <p className={styles.designation}>Director</p>
                            </div>
                            <div className={styles.imgBox}>
                                <img
                                    src='https://xerocodee-frontend-assets.s3.ap-south-1.amazonaws.com/frontend-web/images/testimonial/arya.png'
                                    width={100}
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

const newsletter = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <span className='text-[#242331] mb-16 leading-tight text-center font-[Poppins] text-4xl font-semibold mt-16 pt-0 max-sm:text-2xl'>
                    Our Success Stories
                </span>
            </div>
            <div
                className='flex justify-center mb-24'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <BootstrapCarousel />
            </div>
            <div className='bg-[#C6DEFF] flex flex-col mx-40 mt-5 rounded-[16px] justify-center items-center pt-8 max-sm:m-4'>
                <Image src={Plane} alt='plane image' width={75} height={75} />
                <span className='text-[#242331] mb-3 leading-tight text-center font-[Poppins] text-4xl font-semibold mt-4 pt-0 max-sm:text-base capitalize'>
                    Subscribe to Our Newsletter & get the
                    <br />
                    Coupon code.
                </span>
                <span className='text-center text-[#242331] font-[Nunito] max-sm:text-base'>
                    All your information is completely confidential
                </span>
                <div className='flex flex-row my-12 max-sm:flex-col max-sm:justify-around'>
                    <input
                        type='email'
                        placeholder='Type your Email'
                        className='md:p-4 max-sm:px-2 rounded-lg text-sm md:w-[280px] md:mr-4 max-sm:w-2/3 max-sm:rounded-md'
                    />
                    <Button className='bg-[#0C5BC6] font-extrabold text-white normal-case rounded-lg text-sm md:px-5 max-sm:rounded-md'>
                        Subscribe
                    </Button>
                </div>
            </div>

            <div className='md:bg-[#C6DEFF1A] flex flex-col md:px-52 md:my-20 md:pt-16 md:pb-12 max-sm:hidden'>
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
                    {/* <div> */}
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
                    {/* </div> */}
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

            <div className='md:bg-[#C6DEFF1A] flex flex-col md:px-52 md:my-20 md:pt-16 md:pb-12 md:hidden'>
                <div className='flex flex-col md:w-1/4 justify-end'>
                    <Image
                        src={Logo}
                        alt='logo'
                        width={40}
                        className='md:hidden m-5'
                    />
                    <span className='text-[#494369] font-[Nunito] font-normal text-xs leading-5 max-sm:text-center max-sm:font-[Nunito Sans] max-sm:text-base max-sm:p-5 max-sm:whitespace-normal'>
                        You get just what you need to run your cloud
                        workloads--no more, no less. Deploy from our single pane
                        of glass, manage them with ease and scale up as fast as
                        your workload grows
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
                    <div className='flex items-center justify-center mb-3'>
                        <div className='w-80 h-px border border-zinc-400 items-center'></div>
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
                <div className='flex items-center justify-center mb-3'>
                    <div className='w-80 h-px border border-zinc-400 items-center'></div>
                </div>
                <div className='flex justify-between max-sm:flex-col'>
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
        </Paper>
    );
}

export default newsletter;
