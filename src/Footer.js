import logo from './images/logo-white.svg'
import fbIcon from './images/icon-facebook.svg'
import twitterIcon from './images/icon-twitter.svg'
import printerestIcon from './images/icon-pinterest.svg'
import igIcon from './images/icon-instagram.svg'

function Footer() {
    return ( 
        <div className="footer-section bg-neutral-very-dark-violet">
            <div className="get-started px-2 py-[5rem] bg-primary-dark-violet text-center font-bold text-white flex flex-col items-center justify-center">
                <h2 className="text-[1.4rem] lg:text-[2.2rem]">Boost your links today</h2>
                <button className=" text-[1rem] lg:text-[1.3rem] bg-primary-cyan hover:bg-primary-cyan-hover cursor-pointer rounded-full py-2 px-6 lg:px-8 mt-4">Get Started</button>
            </div>

            <div className="footer-links py-[3rem] flex flex-col items-center lg:flex-row lg:items-start lg:justify-around">
                <div className="logo mt-[1rem] lg:mt-0 mb-[3rem]">
                    <img src={logo} alt="logo" className=' fill-white' />
                </div>
                <div className="links text-white lg:flex lg:justify-between lg:gap-[6rem]">
                    <div className="features flex flex-col items-center lg:items-start mb-[3rem] text-md text-neutral-gray">
                        <h3 className='mb-6 font-bold text-white text-lg'>Features</h3>
                        <a className='mb-2 hover:text-primary-cyan hover:underline' href="#">Link Shortening</a>
                        <a className='mb-2 hover:text-primary-cyan hover:underline' href="#">Branded Links</a>
                        <a className='mb-2 hover:text-primary-cyan hover:underline' href="#">Analytics</a>
                    </div>
                    <div className="resources flex flex-col items-center lg:items-start mb-[3rem] text-md text-neutral-gray">
                        <h3 className='mb-6 font-bold text-white text-lg'>Resources</h3>
                        <a className='mb-2 hover:text-primary-cyan hover:underline' href="#">Blog</a>
                        <a className='mb-2 hover:text-primary-cyan hover:underline' href="#">Developers</a>
                        <a className='mb-2 hover:text-primary-cyan hover:underline' href="#">Support</a>
                    </div>
                    <div className="company flex flex-col items-center lg:items-start mb-[3rem] text-md text-neutral-gray">
                        <h3 className='mb-6 font-bold text-white text-lg'>Company</h3>
                        <a className='mb-2 hover:text-primary-cyan hover:underline' href="#">About</a>
                        <a className='mb-2 hover:text-primary-cyan hover:underline' href="#">Our Team</a>
                        <a className='mb-2 hover:text-primary-cyan hover:underline' href="#">Careers</a>
                        <a className='mb-2 hover:text-primary-cyan hover:underline' href="#">Contact</a>
                    </div>
                </div>
                <div className="socmeds flex justify-center items-center gap-5">
                    <a href="#">
                        <img src={fbIcon} alt="fb-icon" />
                    </a>
                    <a href="#">
                        <img src={twitterIcon} alt="twitter-icon" />
                    </a>
                    <a href="#">
                        <img src={printerestIcon} alt="printerest-icon" />
                    </a>
                    <a href="#">
                        <img src={igIcon} alt="ig-icon" />
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Footer;