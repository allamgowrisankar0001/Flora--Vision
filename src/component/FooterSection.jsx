import logo from '../assets/logo.png';

const FooterSection = () => (
    <div className="mt-24 text-white border-white/10 pt-16 font-inter px-[100px]">
        <div className="flex flex-col xl:flex-row items-start gap-17">
            <div className="flex-1 space-y-6 h-[100px]">
                <div className='navbar-logo flex items-center gap-2'>
                    <img className="w-[94px] h-[94px] object-contain" src={logo} alt="logo" />
                    <h1 className="text-[44px] font-bold text-white font-inter">FloraVision.</h1>
                </div>
                <p className="text-[22px] leading-relaxed text-white/90 w-[520px]">
                    &quot;From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.&quot;
                </p>
                <div className="flex gap-12 text-white text-xl font-semibold mt-[50px]">
                    <span>FB</span>
                    <span>TW</span>
                    <span>LI</span>
                </div>
            </div>
            <div className="flex-1 space-y-6">
                <h4 className="text-[20px] font-semibold">Quick Link&apos;s</h4>
                <div className="flex flex-col gap-4 text-[18px] text-white/90">
                    <a href="#" className="border-b border-white/40 w-max pb-1">Home</a>
                    <a href="#" className="border-b border-white/40 w-max pb-1">Type&apos;s Of plant&apos;s</a>
                    <a href="#" className="border-b border-white/40 w-max pb-1">Contact</a>
                    <a href="#" className="border-b border-white/40 w-max pb-1">Privacy</a>
                </div>
            </div>
            <div className="flex-1 space-y-6">
                <h4 className="text-[24px] font-semibold">For Every Update.</h4>
                <div className="w-full flex border-2 border-white overflow-hidden max-w-xl rounded-[5px]">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="flex-1 bg-transparent px-6 py-4 text-xl text-white placeholder:text-white/60 outline-none"
                    />
                    <button className="bg-white text-black px-8 text-xl m-1 rounded-[5px] font-semibold">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </div>
        <p className="text-right text-white text-xl mb-10 mt-[26px]">FloraVision © all right reserve</p>
    </div>
);

export default FooterSection;

