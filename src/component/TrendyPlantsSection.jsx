import tendyplant1 from '../assets/tendyplant1.png';
import tendyplant2 from '../assets/trendyplant2.png';
import bag from '../assets/bag.png';

const TrendyPlantsSection = () => (
    <div className="relative">
        <div className="absolute top-[900px] left-1/2 -translate-x-1/2 w-[1250px]">
            <div className="text-center">
                <div className="inline-flex items-center gap-2">
                    <svg className="w-[52px] h-[52px] relative left-[50px] top-[10px]" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.5 2.5L2.5 48.5C2.5 61.2026 12.7975 71.5 25.5 71.5H71"
                            stroke="url(#paint0_linear_left_trendy)"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="paint0_linear_left_trendy" x1="2" y1="0.5" x2="71" y2="71.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#55B000" />
                                <stop offset="0.500917" stopColor="white" stopOpacity="0.156606" />
                                <stop offset="1" stopColor="#50790B" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <h2 className="text-white text-[64px] font-[500] font-inter drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
                        Our Trendy plants
                    </h2>
                    <svg className="w-[52px] h-[52px] relative right-[50px] bottom-[5px]" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M71 71.5L71 25.5C71 12.7974 60.7025 2.5 48 2.5L2.49999 2.50001"
                            stroke="url(#paint0_linear_right_trendy)"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="paint0_linear_right_trendy" x1="71.5" y1="73.5" x2="2.5" y2="2.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#55B000" />
                                <stop offset="0.500917" stopColor="white" stopOpacity="0.156606" />
                                <stop offset="1" stopColor="#50790B" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="mt-16 mb-20 flex items-center gap-16 rounded-[120px] border border-white/20 bg-white/5 backdrop-blur-[18px] px-20 py-16 shadow-[0_45px_90px_rgba(0,0,0,0.45)] h-[460px] overflow-visible w-[95vw] -ml-[calc((95vw-1250px)/2)]">
                <div className="w-1/2 h-full relative bottom-[140px] overflow-visible">
                    <img
                        src={tendyplant1}
                        alt="Desk plant"
                        className="relative bottom-[220px] w-[900px] h-[1000px] object-contain drop-shadow-[0_35px_65px_rgba(0,0,0,0.45)]"
                    />
                </div>
                <div className="w-1/2 text-left">
                    <p className="text-white text-[38px] font-[500] font-inter">For Your Desks Decorations</p>
                    <p className="text-white/80 text-[21px] font-[400] font-inter leading-relaxed mt-5 w-[470px]">
                        I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
                    </p>
                    <p className="text-white text-[34px] font-[500] font-inter mt-8">Rs. 599/-</p>
                    <div className="flex items-center gap-6 mt-8">
                        <button className="text-white bg-transparent border border-white px-10 py-2 rounded-md mt-4 text-[28px] font-[400] opacity-75">
                            Explore
                        </button>
                        <button className="w-[74px] h-[74px] rounded-[26px] border border-white/40 flex items-center justify-center">
                            <img src={bag} alt="bag" className="w-[32px] h-[32px] object-contain" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-20 flex items-center gap-16 rounded-[120px] border border-white/20 bg-white/5 backdrop-blur-[18px] px-20 py-16 shadow-[0_45px_90px_rgba(0,0,0,0.45)] h-[460px] overflow-visible w-[95vw] -ml-[calc((95vw-1250px)/2)]">
                <div className="w-1/2 text-left">
                    <p className="text-white text-[38px] font-[500] font-inter">For Your Desks Decorations</p>
                    <p className="text-white/80 text-[21px] font-[400] font-inter leading-relaxed mt-5 w-[470px]">
                        The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.
                    </p>
                    <p className="text-white text-[34px] font-[500] font-inter mt-8">Rs. 399/-</p>
                    <div className="flex items-center gap-6 mt-8">
                        <button className="text-white bg-transparent border border-white px-10 py-2 rounded-md mt-4 text-[28px] font-[400] opacity-75">
                            Explore
                        </button>
                        <button className="w-[74px] h-[74px] rounded-[26px] border border-white/40 flex items-center justify-center">
                            <img src={bag} alt="bag" className="w-[32px] h-[32px] object-contain" />
                        </button>
                    </div>
                </div>
                <div className="w-1/2 h-full relative bottom-[120px] overflow-visible flex justify-end">
                    <img
                        src={tendyplant2}
                        alt="Desk plant"
                        className="relative bottom-[200px] w-[780px] h-[900px] object-contain drop-shadow-[0_35px_65px_rgba(0,0,0,0.45)]"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default TrendyPlantsSection;

