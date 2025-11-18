import herobg from '../assets/hero-bg.jpg';
import heroimg from '../assets/hero-img.png';
import rightarrow from '../assets/rightarrow.png';
import testimonial from '../assets/image.png';
import Navbar from './navbar';
import TrendyPlantsSection from './TrendyPlantsSection';
const StarStrip = ({ className = '' }) => (
    <svg
        className={className}
        width="132"
        height="19"
        viewBox="0 0 132 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z" fill="#FFF84E" />
        <path d="M39.9 0L42.0329 6.56434H48.9351L43.3511 10.6213L45.484 17.1857L39.9 13.1287L34.3161 17.1857L36.4489 10.6213L30.865 6.56434H37.7671L39.9 0Z" fill="#FFF84E" />
        <path d="M70.3 0L72.4329 6.56434H79.335L73.7511 10.6213L75.8839 17.1857L70.3 13.1287L64.716 17.1857L66.8489 10.6213L61.265 6.56434H68.1671L70.3 0Z" fill="#FFF84E" />
        <path d="M100.7 0L102.833 6.56434H109.735L104.151 10.6213L106.284 17.1857L100.7 13.1287L95.1161 17.1857L97.2489 10.6213L91.665 6.56434H98.5671L100.7 0Z" fill="#FFF84E" />
        <path d="M131.1 0L131.1 6.56434V9.5L131.1 13.1287L125.516 17.1857L127.649 10.6213L122.065 6.56434H128.967L131.1 0Z" fill="#FFF84E" />
    </svg>
);

const HeroSection = () => (
    <div className="hero-section relative mb-0">
        <img className="hero-bg h-[2202px] w-full object-cover" src={herobg} alt="hero-bg" />
        <div className="hero-content absolute top-0 left-0 w-full h-full">
            <Navbar/>
            <div className="hero-context flex flex-row mb-0">
                <div className="hero-content-text absolute top-[210px] left-[43px] w-[775px] h-full">
                    <h1 className="text-[110px] font-[500] text-white font-inter opacity-75 w-[798px]">Earth&apos;s Exhale</h1>
                    <p className="text-lg text-white font-inter opacity-75 text-[25px] font-[400]">
                        &quot;Earth Exhale&quot; symbolizes the purity and vitality of the Earth&apos;s natural environment and its essential role in sustaining life.
                    </p>
                    <div className="flex items-center gap-4 mt-1">
                        <button className="text-white bg-transparent border border-white px-10 py-2 rounded-md mt-4 text-[28px] font-[400] opacity-75">Buy Now</button>
                        <button className="text-white bg-transparent border border-white w-[70px] h-[70px] rounded-full mt-4 flex items-center justify-center font-[400] opacity-75 ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-icon lucide-play">
                                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                            </svg>
                        </button>
                        <span className="live-demo text-[25px] text-white mt-4 font-[400]">Live Demo...</span>
                    </div>
                    <div className="card-curve1 relative mt-10 w-[409px] h-[237px] absolute top-[75px] left-[43px] rounded-[36px] border border-white/20 bg-white/5 backdrop-blur-[17px] px-7 py-6">
                        <div className="flex items-center gap-4">
                            <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-white/40">
                                <img src={testimonial} alt="Ronnie Hamill" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-white text-[22px] font-[400] font-inter">
                                    Ronnie Hamill
                                </p>
                                <StarStrip className="w-[132px] h-[19px]" />
                            </div>
                        </div>
                        <p className="text-white/85 text-[17px] leading-snug tracking-wide mt-4 font-[400] font-inter">
                            I can&apos;t express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
                        </p>
                        <div className="absolute -right-10 bottom-4 w-[120px] h-[120px] bg-[#6de28d]/30 blur-[60px] rounded-full pointer-events-none"></div>
                    </div>
                </div>

                <div className="absolute top-[160px] right-[40px] hidden xl:block">
                    <div className="relative w-[420px] h-[500px]">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <foreignObject x="-15" y="-15" width="542" height="653.157">
                                <div
                                    xmlns="http://www.w3.org/1999/xhtml"
                                    style={{ backdropFilter: 'blur(7.5px)', clipPath: 'url(#bgblur_0_11_19_clip_path)', height: '100%', width: '100%' }}
                                />
                            </foreignObject>
                            <path
                                d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z"
                                fill="white"
                                fillOpacity="0.05"
                                stroke="url(#paint0_linear_11_19)"
                            />
                            <defs>
                                <clipPath id="bgblur_0_11_19_clip_path" transform="translate(15 15)">
                                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                                </clipPath>
                                <linearGradient id="paint0_linear_11_19" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset="1" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 px-10 pt-20 pb-12 flex flex-col text-white">
                            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[420px] h-[420px] drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)]">
                                <img src={heroimg} alt="Aglaonema plant" className="w-full h-full object-contain" />
                            </div>
                            <div className="mt-[200px]">
                                <p className="text-white/70 text-[24px] font-[400]">Indoor Plant</p>
                                <p className="text-white text-[36px] font-[500] flex items-center gap-3">
                                    Aglaonema plant
                                    <span>
                                        <img className="w-5 h-5" src={rightarrow} alt="" />
                                    </span>
                                </p>
                            </div>
                            <div className="mt-auto flex  items-center justify-between">
                                <button className="text-white bg-transparent border border-white/50 px-8 py-2 rounded-md text-[24px] font-[400] opacity-80">
                                    Buy Now
                                </button>
                            </div>
                                <div className="gap-2 flex items-center justify-center mt-4">
                                    <div className="w-[21px] h-[6px] bg-white rounded-full"></div>
                                    <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                                    <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
                <TrendyPlantsSection/>
        </div>
    </div>
);

export default HeroSection;

