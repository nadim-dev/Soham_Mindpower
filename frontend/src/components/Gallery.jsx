import { useState } from "react";
import heroImg from "../images/Home-Page-Top-Section.png";
import memory1 from "../images/memory-1.png";
import memory2 from "../images/memory-2.png";
import memory3 from "../images/memory-3.png";
import memory4 from "../images/memory-4.png";
import memory5 from "../images/memory-5.png";

function Gallery() {
    const [selectedFilter, setSelectedFilter] = useState('All');
    const filters = ['All', 'Workshops', 'Events', 'Training Program'];

    return (
        <>
            <div className="text-black font-inter">
                <div
                    className="text-black bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImg})` }}
                >
                    <div className="py-20 md:pt-[212px] md:pb-[247px] px-4 font-inter text-white flex flex-col gap-8 md:gap-[56px] items-center justify-center text-center">
                        <div className="text-3xl md:text-[48px] font-extrabold">"Memories That Tell Our Story."</div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="text-center align-middle text-[14px] text-white bg-[#0057B8] rounded-md px-[18px] py-[14px] cursor-pointer font-semibold font-inter">Book Session</div>
                            <div className="text-center align-middle text-[14px] text-black bg-white rounded-md font-semibold font-inter px-[18px] py-[15px] cursor-pointer">Contact Me</div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 md:mt-[17px]">
                    <div className="flex flex-wrap gap-2 md:gap-[16px] font-semibold items-center justify-center px-4">
                        {filters.map((filter) => (
                            <div className={`px-[10px] py-[12px] rounded-md cursor-pointer text-sm md:text-base ${selectedFilter == filter ? 'text-white bg-[#0057B8]' : 'border-[1px] border-[#5DC9FF]'} `} key={filter} onClick={() => setSelectedFilter(filter)} >{filter}</div>
                        ))}
                    </div>
                </div>
                <div className="py-8 md:pt-[80px] px-4 md:px-[167px] pb-[20px] ">
                    <div className="flex flex-col items-center">
                        {/* Grid Container */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[22px] w-full mt-8 md:mt-[72px] mb-[20px]">
                            {/* Column 1 */}
                            <div className="flex flex-col gap-6 md:gap-[22px]">
                                <div className="w-full aspect-[4/3] md:h-[354px] rounded-lg overflow-hidden">
                                    <img src={memory1} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full aspect-[4/3] md:h-[354px] rounded-lg overflow-hidden">
                                    <img src={memory5} alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="flex flex-col gap-6 md:gap-[22px]">
                                <div className="w-full aspect-[3/4] md:h-[460px] rounded-lg overflow-hidden">
                                    <img src={memory3} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full aspect-[4/3] md:h-[248px] rounded-lg overflow-hidden">
                                    <img src={memory2} alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="flex flex-col gap-6 md:gap-[22px]">
                                <div className="w-full aspect-[4/3] md:h-[248px] rounded-lg overflow-hidden">
                                    <img src={memory4} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full aspect-[3/4] md:h-[460px] rounded-lg overflow-hidden">
                                    <img src={memory5} alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Second Grid Block (Repeated for more content) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[22px] w-full mb-[20px]">
                            {/* Column 1 */}
                            <div className="flex flex-col gap-6 md:gap-[22px]">
                                <div className="w-full aspect-[4/3] md:h-[354px] rounded-lg overflow-hidden">
                                    <img src={memory1} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full aspect-[4/3] md:h-[354px] rounded-lg overflow-hidden">
                                    <img src={memory5} alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            {/* Column 2 */}
                            <div className="flex flex-col gap-6 md:gap-[22px]">
                                <div className="w-full aspect-[3/4] md:h-[460px] rounded-lg overflow-hidden">
                                    <img src={memory3} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full aspect-[4/3] md:h-[248px] rounded-lg overflow-hidden">
                                    <img src={memory2} alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            {/* Column 3 */}
                            <div className="flex flex-col gap-6 md:gap-[22px]">
                                <div className="w-full aspect-[4/3] md:h-[248px] rounded-lg overflow-hidden">
                                    <img src={memory4} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full aspect-[3/4] md:h-[460px] rounded-lg overflow-hidden">
                                    <img src={memory5} alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery;