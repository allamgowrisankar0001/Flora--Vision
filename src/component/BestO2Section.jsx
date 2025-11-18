import heroimg from '../assets/hero-img.png';

const BestO2Section = () => (
    <div className="mt-20 text-center">
        <div className="inline-flex items-center gap-2">
            <svg className="w-[52px] h-[52px] relative left-[50px] top-[10px]" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.5 2.5L2.5 48.5C2.5 61.2026 12.7975 71.5 25.5 71.5H71"
                    stroke="url(#paint0_linear_left_o2)"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient id="paint0_linear_left_o2" x1="2" y1="0.5" x2="71" y2="71.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#55B000" />
                        <stop offset="0.500917" stopColor="white" stopOpacity="0.156606" />
                        <stop offset="1" stopColor="#50790B" />
                    </linearGradient>
                </defs>
            </svg>
            <h2 className="text-white text-[52px] font-[500] font-inter drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
                Our Best o2
            </h2>
            <svg className="w-[52px] h-[52px] relative right-[50px] bottom-[5px]" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M71 71.5L71 25.5C71 12.7974 60.7025 2.5 48 2.5L2.49999 2.50001"
                    stroke="url(#paint0_linear_right_o2)"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient id="paint0_linear_right_o2" x1="71.5" y1="73.5" x2="2.5" y2="2.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#55B000" />
                        <stop offset="0.500917" stopColor="white" stopOpacity="0.156606" />
                        <stop offset="1" stopColor="#50790B" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div className="mt-12 mx-auto w-[98vw] flex items-center gap-12 rounded-[120px] border border-white/20 bg-white/5 backdrop-blur-[20px] px-12 py-5 shadow-[0_45px_90px_rgba(0,0,0,0.45)] overflow-visible">
            <div className="w-1/2 flex justify-center relative overflow-visible h-[520px]">
                <img
                    src={heroimg}
                    alt="O2 plant"
                    className="relative bottom-60 w-[880px] h-[880px] object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.55)]"
                />
            </div>
            <div className="w-1/2 text-left font-inter">
                <p className="inline-block text-white text-[38px] font-[600] py-2 rounded-[10px] mb-6">
                    We Have Small And Best O2 Plants Collection&apos;s
                </p>
                <p className="text-white/80 text-[24px] font-[400] leading-relaxed">
                    Oxygen-producing plants, often referred to as &quot;O2 plants,&quot; are those that release oxygen into the atmosphere through the process of photosynthesis.
                </p>
                <p className="text-white/80 text-[24px] font-[400] leading-relaxed mt-4">
                    Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
                </p>
                <div className="flex items-center justify-between gap-6 mt-8 px-6">
                    <button className="text-white bg-transparent border border-white px-10 py-2 rounded-md text-[20px] font-[400] opacity-75">Explore</button>
                    <div className="flex items-center gap-6 text-white text-[18px] font-semibold px-6">
                        <button className="text-white/60 hover:text-white transition-colors duration-200 text-[28px] leading-none">
                            &lsaquo;
                        </button>
                        <span className="flex items-center gap-1 tracking-[0.2em]">
                            <span className="text-white text-[24px] font-semibold leading-none">01</span>
                            <span className="text-white/70 text-[14px] leading-none">/04</span>
                        </span>
                        <button className="text-white/60 hover:text-white transition-colors duration-200 text-[28px] leading-none">
                            &rsaquo;
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-14 h-[6px] rounded-full bg-white"></span>
            <span className="w-3 h-3 rounded-full border bg-white border-white/60"></span>
            <span className="w-3 h-3 rounded-full border bg-white border-white/60"></span>
        </div>
    </div>
);

export default BestO2Section;

