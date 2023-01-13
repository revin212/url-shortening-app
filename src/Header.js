import { useRef } from "react";
import logo from './images/logo.svg';
import menu from './images/icon-menu.svg';

function Header() {
    const mobileMenuRef = useRef();
    function showMobileMenu(){
        mobileMenuRef.current.classList.toggle('hidden'); 
    }

    return ( 
        <div className="header z-30 fixed top-0 left-0 right-0 lg:static lg:mx-auto lg:max-w-[1024px]">
            {/* NAVBAR */}
            <nav className="navbar z-3 bg-white flex justify-between items-center px-6 py-6 lg:px-0 font-bold text-neutral-grayish-violet">
                <div className="left-menu w-[50%] flex justify-between">
                    <div className="logo">
                        <a href="#">
                            <img src={ logo } alt="logo" />
                        </a>
                    </div>
                    {/* DESKTOP MENU */}
                    <div className="desktop-menu hidden lg:flex justify-evenly w-[70%]">
                        <a href="#" className="hover:text-primary-dark-violet">Features</a>
                        <a href="#" className="hover:text-primary-dark-violet">Pricing</a>
                        <a href="#" className="hover:text-primary-dark-violet">Resources</a>
                    </div>
                </div>
                <div className="right-menu w-[200px] flex justify-end items-center">
                    {/* DESKTOP LOGIN MENU */}
                    <div className="login-menu hidden lg:flex justify-between w-[100%]">
                        <a href="#" className='py-2 hover:text-primary-dark-violet'>Login</a>
                        <a href="#" className='px-6 py-2 rounded-full bg-primary-cyan text-white hover:bg-primary-cyan-hover'>Sign Up</a>
                    </div>
                    {/* MOBILE MENU BUTTON */}
                    <div className="mobile-btn cursor-pointer lg:hidden" onClick={ showMobileMenu }>
                        <img src={ menu } alt="mobile-btn" />
                    </div>
                </div>
            </nav>
            {/* MOBILE MENU */}
            <div ref={mobileMenuRef} className="mobile-menu hidden lg:hidden shadow-xl p-6 bg-primary-dark-violet rounded-xl text-white font-bold opacity-0 z-2">
                <div className="main-menu flex flex-col items-center pb-3">
                    <a href="#" className='w-full text-center p-2 mb-2'>Features</a>
                    <a href="#" className='w-full text-center p-2 mb-2'>Pricing</a>
                    <a href="#" className='w-full text-center p-2 mb-2'>Resources</a>
                </div>
                {/* MOBILE MENU LOGIN */}
                <div className="login-menu mb-4 flex flex-col items-center pt-5 border-t-[2px] border-neutral-600">
                    <a href="#" className='w-full text-center p-2 mb-2'>Login</a>
                    <a href="#" className='bg-primary-cyan w-full text-center p-2 rounded-full hover:bg-primary-cyan-hover'>Sign Up</a>
                </div>
            </div>
        </div>
     );
}

export default Header;