import brandIcon from './images/icon-brand-recognition.svg'
import recordsIcon from './images/icon-detailed-records.svg'
import customizeIcon from './images/icon-fully-customizable.svg'

function Features() {
    return ( 
        <div className="features-section mt-[7rem] mb-[8rem]">
            <div className="statistics text-center mb-[4rem] lg:mb-[6rem] flex flex-col items-center">
                <h2 className=" text-[1.7rem] lg:text-[2rem] text-neutral-very-dark-blue font-bold mb-6">
                    Advanced Statistics
                </h2>
                <p className=" text-[1rem] lg:text-[1.1rem] text-neutral-grayish-violet lg:w-[530px]">
                    Track how your links are performing across the web with our 
                    advanced statistics dashboard.
                </p>
            </div>
            <div className="features lg:flex">
                <div className="card flex flex-col items-center lg:items-start lg:text-left text-center mb-[6rem] lg:mr-[5.5rem] lg:translate-y-[-3rem]">
                    <div className="icon bg-primary-dark-violet rounded-full w-[5.5rem] h-[5.5rem] flex items-center justify-center">
                        <img src={brandIcon} alt="brand-icon" />
                    </div>
                    <div className="desc mt-8">
                        <h3 className='text-neutral-very-dark-blue text-[1.4rem] font-bold mb-5'>Brand Recognition</h3>
                        <p className='text-[1rem] text-neutral-grayish-violet'>
                            Boost your brand recognition with each click. Generic links don’t 
                            mean a thing. Branded links help instil confidence in your content.
                         </p>
                    </div>
                </div>

                <div className="card flex flex-col items-center lg:items-start lg:text-left text-center mb-[6rem] lg:mr-[5.5rem] relative">
                    <div className="separator absolute bg-primary-cyan w-[0.5rem] h-[3rem] top-[-3rem] lg:h-[2rem] lg:top-[8.5rem] lg:rotate-90 lg:left-[-3.5rem]"></div>
                    <div className="icon bg-primary-dark-violet rounded-full w-[5.5rem] h-[5.5rem] flex items-center justify-center">
                        <img src={recordsIcon} alt="brand-icon" />
                    </div>
                    <div className="desc mt-8">
                        <h3 className='text-neutral-very-dark-blue text-[1.4rem] font-bold mb-5'>Detailed Records</h3>
                        <p className='text-[1rem] text-neutral-grayish-violet'>
                            Gain insights into who is clicking your links. Knowing when and where 
                            people engage with your content helps inform better decisions.
                         </p>
                    </div>
                </div>

                <div className="card flex flex-col items-center lg:items-start lg:text-left text-center mb-[4rem] relative lg:translate-y-[3rem]">
                    <div className="separator separator absolute bg-primary-cyan w-[0.5rem] h-[3rem] top-[-3rem] lg:h-[2rem] lg:top-[5.5rem] lg:rotate-90 lg:left-[-3.5rem]"></div>
                    <div className="icon bg-primary-dark-violet rounded-full w-[5.5rem] h-[5.5rem] flex items-center justify-center">
                        <img src={customizeIcon} alt="brand-icon" />
                    </div>
                    <div className="desc mt-8">
                        <h3 className='text-neutral-very-dark-blue text-[1.4rem] font-bold mb-5'>Fully Customizable</h3>
                        <p className='text-[1rem] text-neutral-grayish-violet'>
                            Improve brand awareness and content discoverability through customizable 
                            links, supercharging audience engagement.
                         </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Features;