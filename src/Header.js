import logo from './images/logo.svg'
import menu from './images/icon-menu.svg'

function Header() {
    return ( 
        <div className="header mx-6 lg:mx-auto max-w-[1100px]">
            <nav className="navbar flex justify-between items-center py-6">
                <div className="left-menu w-[50%] flex justify-between">
                    <div className="logo">
                        <a href="#">
                            <img src={ logo } alt="logo" />
                        </a>
                    </div>
                    <div className="desktop-menu hidden lg:flex justify-evenly w-[70%]">
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a>
                    </div>
                </div>
                <div className="right-menu w-[150px] flex justify-end items-center">
                    <div className="login-menu hidden lg:flex justify-between w-[100%]">
                        <a href="#">Login</a>
                        <a href="#">Sign Up</a>
                    </div>
                    <div className="mobile-btn cursor-pointer">
                        <img src={ menu } alt="mobile-btn" />
                    </div>
                </div>
            </nav>
            <div className="mobile-menu p-6 bg-blue-500 rounded-lg">
                <div className="main-menu flex flex-col items-center pb-3">
                    <a href="#" className='w-full text-center p-2 mb-2'>Features</a>
                    <a href="#" className='w-full text-center p-2 mb-2'>Pricing</a>
                    <a href="#" className='w-full text-center p-2 mb-2'>Resources</a>
                </div>
                <div className="login-menu mb-4 flex flex-col items-center pt-5 border-t-[2px] border-black">
                    <a href="#" className='w-full text-center p-2 mb-2'>Login</a>
                    <a href="#" className='bg-purple-500 w-full text-center p-2 rounded-full '>Sign Up</a>
                </div>
            </div>
        </div>
     );
}

export default Header;