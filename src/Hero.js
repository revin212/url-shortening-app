import heroImg from './images/illustration-working.svg'

function Hero() {
    return ( 
        <div className="hero-section flex flex-col lg:flex-row lg:justify-between lg:items-start items-center text-center lg:text-left overflow-hidden mb-6">
            {/* HERO SECTION IMAGE */}
            <div className="hero-img lg:order-1 relative z-0">
                <img src={ heroImg } alt="hero-img" className='z-0 relative'/>
            </div>
            {/* HERO SECTION DESCRIPTION */}
            <div className="hero-desc mt-10 lg:mt-6 lg:w-[600px]">
                <h1 className='text-4xl lg:text-6xl lg:leading-[4.5rem] font-bold text-neutral-very-dark-blue'>More than just shorter links</h1>
                <p className=' text-lg lead my-4 lg:mt-2 text-neutral-grayish-violet'>
                    Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>
                <button className='font-bold py-3 px-8 my-4 lg:my-6 bg-primary-cyan text-white rounded-full hover:bg-primary-cyan-hover cursor-pointer'>Get Started</button>
            </div>
        </div>
     );
}

export default Hero;