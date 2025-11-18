import comment1 from '../assets/comment1.png';
import comment2 from '../assets/comment2.png';
import comment3 from '../assets/comment3.png';

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

const CustomerReviewSection = () => (
    <div className="mt-24 text-center">
        <div className="inline-flex items-center gap-2">
            <svg className="w-[48px] h-[48px] relative left-[50px] top-[10px]" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.5 2.5L2.5 48.5C2.5 61.2026 12.7975 71.5 25.5 71.5H71"
                    stroke="url(#paint0_linear_left_review)"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient id="paint0_linear_left_review" x1="2" y1="0.5" x2="71" y2="71.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#55B000" />
                        <stop offset="0.500917" stopColor="white" stopOpacity="0.156606" />
                        <stop offset="1" stopColor="#50790B" />
                    </linearGradient>
                </defs>
            </svg>
            <h2 className="text-white text-[52px] font-[500] font-inter drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
                Customer Review
            </h2>
            <svg className="w-[48px] h-[48px] relative right-[50px] bottom-[5px]" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M71 71.5L71 25.5C71 12.7974 60.7025 2.5 48 2.5L2.49999 2.50001"
                    stroke="url(#paint0_linear_right_review)"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient id="paint0_linear_right_review" x1="71.5" y1="73.5" x2="2.5" y2="2.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#55B000" />
                        <stop offset="0.500917" stopColor="white" stopOpacity="0.156606" />
                        <stop offset="1" stopColor="#50790B" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div className="mt-12 flex gap-8 justify-center items-stretch mx-auto max-w-[1400px]">
            <div className="relative w-[440px] overflow-hidden rounded-[50px] flex flex-col">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <foreignObject x="-15" y="-15" width="542" height="653.157">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(7.5px)', clipPath: 'url(#bgblur_review1_clip_path)', height: '100%', width: '100%' }}></div>
                    </foreignObject>
                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_review1)" />
                    <defs>
                        <clipPath id="bgblur_review1_clip_path" transform="translate(15 15)">
                            <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                        </clipPath>
                        <linearGradient id="paint0_linear_review1" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="relative px-10 pt-10 pb-12 text-left flex-1 flex flex-col">
                    <div className="absolute right-10 top-6 w-[140px] h-[140px] bg-lime-300/20 blur-[70px] rounded-full pointer-events-none" />
                    <div className="flex items-center gap-6">
                        <div className="w-[86px] h-[86px] rounded-full overflow-hidden border border-white/30">
                                <img src={comment1} alt="Shelly Russel" className="object-cover w-full h-full" />
                        </div>
                        <div>
                            <p className="text-white text-[28px] font-[600] font-inter">Shelly Russel</p>
                            <StarStrip className="mt-2" />
                        </div>
                    </div>
                    <p className="text-white/85 text-[18px] leading-relaxed mt-8 font-inter flex-1">
                        Just got my hands on some absolutely awesome plants, and I couldn&apos;t be happier!
                    </p>
                </div>
            </div>

            <div className="relative w-[440px] overflow-hidden rounded-[50px] flex flex-col">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <foreignObject x="-15" y="-15" width="542" height="653.157">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(7.5px)', clipPath: 'url(#bgblur_review2_clip_path)', height: '100%', width: '100%' }}></div>
                    </foreignObject>
                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_review2)" />
                    <defs>
                        <clipPath id="bgblur_review2_clip_path" transform="translate(15 15)">
                            <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                        </clipPath>
                        <linearGradient id="paint0_linear_review2" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="relative px-10 pt-10 pb-12 text-left flex-1 flex flex-col">
                    <div className="absolute right-10 top-6 w-[140px] h-[140px] bg-lime-300/20 blur-[70px] rounded-full pointer-events-none" />
                    <div className="flex items-center gap-6">
                        <div className="w-[86px] h-[86px] rounded-full overflow-hidden border border-white/30">
                            <img src={comment2} alt="Lula Rolfson" className="object-cover w-full h-full" />
                        </div>
                        <div>
                            <p className="text-white text-[28px] font-[600] font-inter">Lula Rolfson</p>
                            <StarStrip className="mt-2" />
                        </div>
                    </div>
                    <p className="text-white/85 text-[18px] leading-relaxed mt-8 font-inter flex-1">
                        Each one has its own unique charm and personality, and they&apos;ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.
                    </p>
                </div>
            </div>

            <div className="relative w-[440px] overflow-hidden rounded-[50px] flex flex-col">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <foreignObject x="-15" y="-15" width="542" height="653.157">
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(7.5px)', clipPath: 'url(#bgblur_review3_clip_path)', height: '100%', width: '100%' }}></div>
                    </foreignObject>
                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_review3)" />
                    <defs>
                        <clipPath id="bgblur_review3_clip_path" transform="translate(15 15)">
                            <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                        </clipPath>
                        <linearGradient id="paint0_linear_review3" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="relative px-10 pt-10 pb-12 text-left flex-1 flex flex-col">
                    <div className="absolute right-10 top-6 w-[140px] h-[140px] bg-lime-300/20 blur-[70px] rounded-full pointer-events-none" />
                    <div className="flex items-center gap-6">
                        <div className="w-[86px] h-[86px] rounded-full overflow-hidden border border-white/30">
                            <img src={comment3} alt="Carol Huels" className="object-cover w-full h-full" />
                        </div>
                        <div>
                            <p className="text-white text-[28px] font-[600] font-inter">Carol Huels</p>
                            <StarStrip className="mt-2" />
                        </div>
                    </div>
                    <p className="text-white/85 text-[18px] leading-relaxed mt-8 font-inter flex-1">
                        It&apos;s like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default CustomerReviewSection;

