import logo from '../assets/logo.png';
import searchicon from '../assets/searchicon.png';
import bag from '../assets/bag.png';

const Navbar = () => (
    <div className="navbar px-6 py-4 flex items-center justify-between">
        <div className="navbar-logo flex items-center gap-2">
            <img className="w-[40px] h-[48px] object-contain" src={logo} alt="logo" />
            <h1 className="text-2xl font-bold text-white font-inter">FloraVision.</h1>
        </div>

        <div className="navbar-menu flex items-center gap-16 text-[23px] font-[400]">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white flex items-center gap-2">
                Plants Type
                <svg className="w-3 h-3" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.19617 5.25L0 0H10.3923L5.19617 5.25Z" fill="white" />
                </svg>
            </a>
            <a href="#" className="text-white">More</a>
            <a href="#" className="text-white">Contact</a>
        </div>

        <div className="navbar-button flex items-center gap-10">
            <button className="text-white">
                <img className="w-[20px] h-[20px] object-contain" src={searchicon} alt="search" />
            </button>
            <button className="text-white">
                <img className="w-[20px] h-[20px] object-contain" src={bag} alt="bag" />
            </button>
            <button className="text-white flex flex-col items-end gap-2 py-2 h-[40px] mt-2">
                <div className="w-[31px] h-[3px] bg-white rounded-full"></div>
                <div className="w-[23px] h-[3px] bg-white rounded-full"></div>
            </button>
        </div>
    </div>
);

export default Navbar;

