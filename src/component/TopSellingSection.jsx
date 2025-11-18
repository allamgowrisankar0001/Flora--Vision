import heroimg from '../assets/hero-img.png';
import tendyplant1 from '../assets/tendyplant1.png';
import cactus from '../assets/cactus.png';
import cheeseplant from '../assets/cheeseplant.png';
import Sansevieriaplant from '../assets/Sansevieriaplant.png';
import Agaveplant from '../assets/Agaveplant.png';
import bag from '../assets/bag.png';

const TopSellingSection = () => (
    <div className="mt-24 text-center bg-[#1B2316]">
        <div className="inline-flex items-center gap-2">
            <svg className="w-[52px] h-[52px] relative left-[50px] top-[10px]" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.5 2.5L2.5 48.5C2.5 61.2026 12.7975 71.5 25.5 71.5H71"
                    stroke="url(#paint0_linear_left_top)"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient id="paint0_linear_left_top" x1="2" y1="0.5" x2="71" y2="71.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#55B000" />
                        <stop offset="0.500917" stopColor="white" stopOpacity="0.156606" />
                        <stop offset="1" stopColor="#50790B" />
                    </linearGradient>
                </defs>
            </svg>
            <h2 className="text-white text-[52px] font-[500] font-inter drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
                Our Top Selling Plants
            </h2>
            <svg className="w-[52px] h-[52px] relative right-[50px] bottom-[5px]" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M71 71.5L71 25.5C71 12.7974 60.7025 2.5 48 2.5L2.49999 2.50001"
                    stroke="url(#paint0_linear_right_top)"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient id="paint0_linear_right_top" x1="71.5" y1="73.5" x2="2.5" y2="2.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#55B000" />
                        <stop offset="0.500917" stopColor="white" stopOpacity="0.156606" />
                        <stop offset="1" stopColor="#50790B" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div className="mt-[140px] flex gap-3 justify-center">
            <div className="relative w-[450px] h-[544px] px-10 pb-10 text-left overflow-visible">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <foreignObject x="-15" y="-15" width="542" height="653.157">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ clipPath: 'url(#bgblur_0_11_19_clip_path)', height: '100%', width: '100%' }}></div>
                    </foreignObject>
                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_0_11_19)" />
                    <defs>
                        <clipPath id="bgblur_0_11_19_clip_path" transform="translate(15 15)">
                            <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                        </clipPath>
                        <linearGradient id="paint0_linear_0_11_19" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] pointer-events-none z-10">
                    <img
                        src={heroimg}
                        alt="Aglaonema plant"
                        className="w-full h-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
                    />
                </div>
                <div className="pt-[340px] z-[90]">
                    <p className="text-white text-[24px] font-[500] font-inter">Aglaonema plant</p>
                    <p className="text-white/80 text-[16px] font-inter leading-relaxed mt-3">
                        Known for its attractive foliage and ease of care, perfect for brightening interiors.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-white text-[22px] font-[500] font-inter">Rs. 300/-</p>
                        <button className="w-[52px] h-[52px] rounded-[18px] border border-white/40 flex items-center justify-center">
                            <img src={bag} alt="bag icon" className="w-[24px] h-[24px] object-contain" />
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="relative w-[450px] h-[544px] px-10 pb-10 text-left overflow-visible">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <foreignObject x="-15" y="-15" width="542" height="653.157">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ clipPath: 'url(#bgblur_1_11_19_clip_path)', height: '100%', width: '100%' }}></div>
                    </foreignObject>
                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_1_11_19)" />
                    <defs>
                        <clipPath id="bgblur_1_11_19_clip_path" transform="translate(15 15)">
                            <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                        </clipPath>
                        <linearGradient id="paint0_linear_1_11_19" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] pointer-events-none z-10">
                    <img
                        src={tendyplant1}
                        alt="Plantain Lilies"
                        className="w-full h-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
                    />
                </div>
                <div className="pt-[340px] z-[90]">
                    <p className="text-white text-[24px] font-[500] font-inter">Plantain Lilies</p>
                    <p className="text-white/80 text-[16px] font-inter leading-relaxed mt-3">
                        Hostas offer lush decorative leaves and thrive in a wide variety of shapes and sizes.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-white text-[22px] font-[500] font-inter">Rs. 380/-</p>
                        <button className="w-[52px] h-[52px] rounded-[18px] border border-white/40 flex items-center justify-center">
                            <img src={bag} alt="bag icon" className="w-[24px] h-[24px] object-contain" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative w-[450px] h-[544px] px-10 pb-10 text-left overflow-visible">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <foreignObject x="-15" y="-15" width="542" height="653.157">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ clipPath: 'url(#bgblur_2_11_19_clip_path)', height: '100%', width: '100%' }}></div>
                    </foreignObject>
                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_2_11_19)" />
                    <defs>
                        <clipPath id="bgblur_2_11_19_clip_path" transform="translate(15 15)">
                            <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                        </clipPath>
                        <linearGradient id="paint0_linear_2_11_19" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] pointer-events-none z-10">
                    <img
                        src={cactus}
                        alt="Cactus"
                        className="w-full h-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
                    />
                </div>
                <div className="pt-[340px] z-[90]">
                    <p className="text-white text-[24px] font-[500] font-inter">Cactus</p>
                    <p className="text-white/80 text-[16px] font-inter leading-relaxed mt-3">
                        Loved for their resilience and ability to thrive in arid environments with minimal care.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-white text-[22px] font-[500] font-inter">Rs. 259/-</p>
                        <button className="w-[52px] h-[52px] rounded-[18px] border border-white/40 flex items-center justify-center">
                            <img src={bag} alt="bag icon" className="w-[24px] h-[24px] object-contain" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-[140px] flex gap-3 justify-center">
            <div className="relative w-[450px] h-[544px] rounded-[40px] px-10 pb-10 text-left overflow-visible">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <foreignObject x="-15" y="-15" width="542" height="653.157">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ clipPath: 'url(#bgblur_premium_0_11_19_clip_path)', height: '100%', width: '100%' }}></div>
                    </foreignObject>
                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_premium_0_11_19)" />
                    <defs>
                        <clipPath id="bgblur_premium_0_11_19_clip_path" transform="translate(15 15)">
                            <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                        </clipPath>
                        <linearGradient id="paint0_linear_premium_0_11_19" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] pointer-events-none z-10">
                    <img
                        src={cheeseplant}
                        alt="Swiss cheese Plant"
                        className="w-full h-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
                    />
                </div>
                <div className="pt-[340px] relative z-10">
                    <p className="text-white text-[24px] font-[500] font-inter">Swiss cheese Plant</p>
                    <p className="text-white/80 text-[16px] font-inter leading-relaxed mt-3">
                        A tropical houseplant famous for its distinctive perforated leaves and bold form.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-white text-[22px] font-[500] font-inter">Rs. 400/-</p>
                        <button className="w-[52px] h-[52px] rounded-[18px] border border-white/40 flex items-center justify-center">
                            <img src={bag} alt="bag icon" className="w-[24px] h-[24px] object-contain" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative w-[450px] h-[544px] rounded-[40px] px-10 pb-10 text-left overflow-visible">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <foreignObject x="-15" y="-15" width="542" height="653.157">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ clipPath: 'url(#bgblur_premium_1_11_19_clip_path)', height: '100%', width: '100%' }}></div>
                    </foreignObject>
                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_premium_1_11_19)" />
                    <defs>
                        <clipPath id="bgblur_premium_1_11_19_clip_path" transform="translate(15 15)">
                            <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                        </clipPath>
                        <linearGradient id="paint0_linear_premium_1_11_19" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] pointer-events-none z-10">
                    <img
                        src={Sansevieriaplant}
                        alt="Sansevieria plant"
                        className="w-full h-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
                    />
                </div>
                <div className="pt-[340px] relative z-10">
                    <p className="text-white text-[24px] font-[500] font-inter">Sansevieria plant</p>
                    <p className="text-white/80 text-[16px] font-inter leading-relaxed mt-3">
                        Low-maintenance favorite admired for its striking appearance and upright leaves.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-white text-[22px] font-[500] font-inter">Rs. 450/-</p>
                        <button className="w-[52px] h-[52px] rounded-[18px] border border-white/40 flex items-center justify-center">
                            <img src={bag} alt="bag icon" className="w-[24px] h-[24px] object-contain" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative w-[450px] h-[544px] rounded-[40px] px-10 pb-10 text-left overflow-visible">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <foreignObject x="-15" y="-15" width="542" height="653.157">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ clipPath: 'url(#bgblur_premium_2_11_19_clip_path)', height: '100%', width: '100%' }}></div>
                    </foreignObject>
                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_premium_2_11_19)" />
                    <defs>
                        <clipPath id="bgblur_premium_2_11_19_clip_path" transform="translate(15 15)">
                            <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                        </clipPath>
                        <linearGradient id="paint0_linear_premium_2_11_19" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] pointer-events-none z-10">
                    <img
                        src={Agaveplant}
                        alt="Agave plant"
                        className="w-full h-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
                    />
                </div>
                <div className="pt-[340px] relative z-10">
                    <p className="text-white text-[24px] font-[500] font-inter">Agave plant</p>
                    <p className="text-white/80 text-[16px] font-inter leading-relaxed mt-3">
                        Succulent staple known for fleshy rosette leaves and sculptural architectural forms.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-white text-[22px] font-[500] font-inter">Rs. 359/-</p>
                        <button className="w-[52px] h-[52px] rounded-[18px] border border-white/40 flex items-center justify-center">
                            <img src={bag} alt="bag icon" className="w-[24px] h-[24px] object-contain" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default TopSellingSection;

