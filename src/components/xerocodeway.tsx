import Rocket from '../../public/assets/Rocket.png';
import Line from '../../public/assets/line.svg';
import Cloud from '../../public/assets/cloud.png';
import Pipeline from '../../public/assets/pipeline.png';
import Tool from '../../public/assets/tools.png';
import Deploy from '../../public/assets/deploy.png';
import Scale from '../../public/assets/scale.png';
import Cost from '../../public/assets/cost.png';
import Preview from '../../public/assets/preview.png';
import Chart1 from '../../public/assets/chart-1.png';
import Chart2 from '../../public/assets/chart-2.png';
import Image from 'next/image';

const xerocodeway = () => {
    return (
        <div className='mx-28 bg-[#FFF] mt-30 mb-0 rounded-3xl text-white px-16 py-8 max-sm:border max-sm:border-[#00000040] max-sm:mx-3 max-sm:mt-6 max-sm:p-2'>
            <div className='text-[#242331] mb-16 leading-tight text-center font-[Poppins] text-4xl font-semibold mt-16 pt-0 max-sm:text-2xl'>
                The Xerocodee {'way '}
                <Image
                    src={Rocket}
                    alt='Rocket icon'
                    className='inline ml-2'
                    width={40}
                />
            </div>
            <div className='flex flex-col items-center my-8'>
                <span className='text-center text-[#242331] font-[Poppins] text-4xl font-semibold'>
                    01
                </span>

                <Image src={Line} alt='line' />
                <span
                    data-testid='code-text'
                    className='text-center text-[#332C5C] font-[Poppins] text-2xl font-semibold mt-24 max-sm:mt-8 max-sm:text-xl'
                >
                    Self Serve Infrastructure
                </span>
                <span className='text-center text-[#5E587A] font-[Nunito] mt-6 max-sm:text-base'>
                    Accelerate by self-serving production-ready infrastructure
                    and customize as you scale.
                </span>

                <div className='flex flex-wrap justify-center mt-8 space-x-4 md:mt-12 md:space-x-6 lg:space-x-8 mb-4'>
                    <button className='border-b-2 border-blue-500 bg-white text-gray-700 py-2 px-4 md:mt-0 mt-2 md:py-1 md:px-4 rounded-md text-sm md:text-md font-semibold transition-colors duration-300 hover:text-blue-500'>
                        Your Cloud
                    </button>
                    <button className='border border-gray-200 bg-white text-gray-700 py-2 px-4 md:mt-0 mt-2 md:py-1 md:px-4 rounded-md text-sm md:text-md font-semibold transition-colors duration-300 hover:text-blue-500'>
                        Infra Components
                    </button>
                    <button className='border border-gray-200 bg-white text-gray-700 py-2 px-4 md:mt-0 mt-2 md:py-1 md:px-4 rounded-md text-sm md:text-md font-semibold transition-colors duration-300 hover:text-blue-500'>
                        Self-Hosted Apps
                    </button>
                </div>

                <div className='flex md:flex-row max-sm:flex-col'>
                    <div className='md:w-1/2'>
                        <Image src={Cloud} alt='cloud image' />
                    </div>
                    <div className='flex flex-col md:w-1/2'>
                        <span className=' text-[#332C5C] font-[Poppins] text-xl font-semibold mt-24 max-sm:text-center max-sm:mt-5'>
                            In Your Cloud
                        </span>
                        <span className='text-[#5E587A] font-[Nunito] mt-6 text-sm font-normal max-sm:text-center'>
                            Your infrastructure runs on your AWS or GCP account.
                            <br />
                            Never get locked in. Infinitely scalable (Azure
                            support coming soon)
                        </span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center mb-8 mt-16'>
                <span className='text-center text-[#242331] font-[Poppins] text-4xl font-semibold'>
                    02
                </span>

                <Image src={Line} alt='line' />
                <span className='text-center text-[#332C5C] font-[Poppins] text-2xl font-semibold mt-24 max-sm:mt-8'>
                    Deploy applications, fast!
                </span>
                <span className='text-center text-[#5E587A] font-[Nunito] mt-8'>
                    Set up automated deployments of your application in 5
                    minutes and get back to building stuff that matters.
                </span>

                <div className='flex md:flex-row md:mt-24 max-sm:flex-col'>
                    <div className='md:w-1/2 flex flex-row justify-start max-sm:justify-center max-sm:p-8'>
                        <Image
                            src={Pipeline}
                            alt='pipeline image'
                            // width={300}
                        />
                    </div>
                    <div className='flex flex-col md:w-1/2'>
                        <span className=' text-[#332C5C] font-[Poppins] text-xl font-semibold max-sm:text-center max-sm:text-xl'>
                            Configurable Build and Deploy pipelines
                        </span>
                        <span className='text-[#5E587A] font-[Nunito] mt-8 text-sm max-sm:text-center'>
                            Portable builds powered by Dagger and continuous
                            deployments powered by ArgoCD - you gain more
                            control of your pipelines with composable custom,
                            build, and deploy stages.
                        </span>
                    </div>
                </div>

                <div className='flex md:flex-row mt-20 max-sm:flex-col-reverse max-sm:mt-8'>
                    <div className='flex flex-col md:w-1/2'>
                        <span className=' text-[#332C5C] font-[Poppins] text-xl font-semibold max-sm:text-center max-sm:mt-5'>
                            Push to Deploy
                        </span>
                        <span className='text-[#5E587A] font-[Nunito] mt-8 text-sm max-sm:text-center'>
                            Just connect your repo with one click and push.
                            Argonaut’s deep integration with GitHub Actions and
                            GitLab pipelines build and deploy your code on every
                            push.
                        </span>
                    </div>
                    <div className='md:w-1/2 flex justify-center'>
                        <Image src={Deploy} alt='pipeline image' width={350} />
                    </div>
                </div>

                <div className='flex md:flex-row mt-20 max-sm:flex-col max-sm:mt-8'>
                    <div className='md:w-1/2 flex flex-row justify-start max-sm:justify-center'>
                        <Image src={Tool} alt='pipeline image' width={300} />
                    </div>
                    <div className='flex flex-col md:w-1/2'>
                        <span
                            data-testid='code-text2'
                            className=' text-[#332C5C] font-[Poppins] text-xl font-semibold max-sm:text-center max-sm:mt-8'
                        >
                            Multiple runtimes
                        </span>
                        <span className='text-[#5E587A] font-[Nunito] mt-8 text-sm max-sm:text-center'>
                            Quickly deploy apps to containerized or serverless
                            runtimes on your cloud and customize architectures
                            to cost and performance constraints. Deploy on
                            Kubernetes using dockerfiles or buildpacks, AWS
                            Lambda, or GCP Cloud Functions.
                        </span>
                    </div>
                </div>

                <div className='flex md:flex-row mt-20 max-sm:flex-col-reverse max-sm:mt-8'>
                    <div className='flex flex-col md:w-1/2'>
                        <span className=' text-[#332C5C] font-[Poppins] text-xl font-semibold max-sm:text-center max-sm:mt-8'>
                            Scale infinitely
                        </span>
                        <span className='text-[#5E587A] font-[Nunito] mt-6 text-sm max-sm:text-center'>
                            Every deployment is a zero-downtime deployment
                            without you needing to choose custom configurations.
                            You can easily configure auto-scaling, resource
                            limits, and health-check URL to further optimize
                            application uptime.
                        </span>
                    </div>
                    <div className='md:w-1/2 flex justify-center max-sm:mt-8'>
                        <Image src={Scale} alt='Scale image' width={350} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center my-8 mt-40 max-sm:mt-20'>
                <span className='text-center text-[#242331] font-[Poppins] text-4xl font-semibold'>
                    03
                </span>

                <Image src={Line} alt='line' />
                <span className='text-center text-[#332C5C] font-[Poppins] text-2xl font-semibold mt-24 max-sm:mt-8'>
                    Visibility into costs and metrics
                </span>
                <span className='text-center text-[#5E587A] font-[Nunito] mt-6'>
                    Automatically track resource costs, across clouds, on every
                    change. Visualize k8s pod metrics - CPU, Network, and
                    Memory.
                </span>

                <div className='flex md:flex-row mt-20 max-sm:flex-col max-sm:mt-8'>
                    <div className='md:w-1/2 max-sm:flex max-sm:justify-center'>
                        <Image src={Cost} alt='pipeline image' />
                    </div>
                    <div className='flex flex-col md:w-1/2'>
                        <span className=' text-[#332C5C] font-[Poppins] text-xl font-semibold max-sm:mt-8 max-sm:text-center'>
                            Customizable cost dashboards and reports
                        </span>
                        <span className='text-[#5E587A] font-[Nunito] mt-8 text-sm max-sm:text-center'>
                            Stay on top of your cloud spending with custom cost
                            dashboards and reports — sort, filter, and group by
                            your various accounts, resources, and cloud regions.
                        </span>
                    </div>
                </div>

                <div className='flex md:flex-row mt-20 max-sm:flex-col-reverse max-sm:mt-8'>
                    <div className='flex flex-col md:w-1/2'>
                        <span className=' text-[#332C5C] font-[Poppins] text-xl font-semibold max-sm:text-center max-sm:mt-8'>
                            Preview infra costs
                        </span>
                        <span className='text-[#5E587A] font-[Nunito] mt-6 text-sm max-sm:text-center'>
                            See the cost of a specific resource while choosing
                            it (before provisioning). It saves you the hassle of
                            searching through the complex pricing pages of your
                            cloud provider or tools.
                        </span>
                    </div>
                    <div className='md:w-1/2 flex justify-center'>
                        <Image src={Preview} alt='pipeline image' width={250} />
                    </div>
                </div>

                <div className='flex md:flex-row mt-20 max-sm:flex-col max-sm:mt-8'>
                    <div className='md:w-1/2 flex flex-row justify-start'>
                        <Image
                            src={Chart1}
                            alt='chart 1'
                            className='max-sm:w-1/2 md:w-1/2'
                            // width={100}
                            // height={50}
                        />
                        <Image
                            src={Chart2}
                            alt='chart 2'
                            className='max-sm:w-1/2 md:w-1/2'
                        />
                    </div>
                    <div className='flex flex-col md:w-1/2'>
                        <span className=' text-[#332C5C] font-[Poppins] text-xl font-semibold max-sm:text-center max-sm:mt-8'>
                            Observability from day one
                        </span>
                        <span className='text-[#5E587A] font-[Nunito] mt-8 text-sm max-sm:text-center'>
                            Comes with built-in Kubernetes pod metrics. Easily
                            plug in monitoring and observability tools of your
                            choice, such as Grafana/Loki, DataDog, Prometheus,
                            and more. Stay on top of your application metrics
                            from day 1.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default xerocodeway;
