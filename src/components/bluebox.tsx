// import Realtime from '../../public/assets/real-time.png';
import Realtime from '../../public/assets/cards-screen1.png';
import Workflows from '../../public/assets/cards-screen2.png';
import Image from 'next/image';

const bluebox = () => {
    return (
        <div className='mx-28 bg-[#0C5BC6] mt-28 mb-20 rounded-3xl text-white px-20 py-16 max-sm:mt-5 max-sm:mx-3 max-sm:p-2 max-sm:pt-8'>
            <div
                data-testid='blue-text'
                className='leading-tight mb-8 text-center font-[Poppins] text-3xl font-semibold mt-0 pt-0 capitalize max-sm:text-xl'
            >
                Modernize apps, infrastructure
                <br className='md:hidden' />
                with cloud native <br className='max-sm:hidden' />
                tech for
                <br className='md:hidden' />
                resilience, scalability.
            </div>

            <div className='flex flex-col'>
                <div className='flex max-sm:justify-center max-sm:flex-col md:flex-row md:mt-24 md:mb-20'>
                    <Image
                        src={Realtime}
                        alt='Realtime image'
                        className='mr-6 max-sm:mt-4 md:w-3/5'
                    />
                    <div className='flex flex-col'>
                        <span className='leading-tight font-[Poppins] text-3xl font-semibold capitalize mb-6 max-sm:text-xl text-center max-sm:mt-6'>
                            Real-time risk monitoring
                        </span>
                        <span className='font-[Nunito] font-normal text-sm leading-[1.8] max-sm:font-[Nunito Sans] text-center'>
                            Real-time risk monitoring across your infrastructure
                            and application ecosystem will help you maintain
                            ongoing compliance with more than 05+ different
                            regulatory standards.
                        </span>
                    </div>
                </div>

                <div className='flex md:flex-row max-sm:flex-col-reverse'>
                    <div className='flex flex-col justify-center'>
                        <span
                            data-testid='blue-text2'
                            className='leading-tight font-[Poppins] text-3xl font-semibold capitalize mb-6 max-sm:text-xl max-sm:text-center max-sm:mt-8'
                        >
                            Collaborative workflows
                        </span>
                        <span className='font-[Nunito] font-normal text-sm leading-[1.8] max-sm:text-center max-sm:mb-8'>
                            Share artefacts easily and collaborate with team
                            members, auditors, and pen testers via automated
                            procedures. To manage daily compliance with
                            automatic notifications and reminders, create,
                            assign, and track tasks.
                        </span>
                    </div>
                    <Image
                        src={Workflows}
                        alt='Collaborative workflows image'
                        className='md:ml-32 max-sm:mt-8 md:w-3/5'
                        // width={400}
                    />
                </div>
            </div>
        </div>
    );
};

export default bluebox;
