"use client";

import { text } from "stream/consumers";


export default function Home() {
    return (
        <>
            <div className="  h-15   w-full  fixed gap-10 flex justify-center items-end rounded-b-lg p-px backdrop-blur-md  shadow-[0px_0px_5px_-0.5px_rgba(0,0,0,0.5)]">
                <div className="  h-full w-full bg-[#B5B5B5]/5 px-10 flex justify-center items-center ">
                    <div className=" h-full w-[50%] text-md font-semibold flex justify-between items-center gap-10 ">
                        <div className="flex justify-center items-center gap-2 h-[60%] text-[#252525] font-bold ">
                            <div className="bg-white/0 hover:bg-gray-400/10  rounded-md h-full p-2 flex justify-center items-center ">
                                <i className="fa-solid fa-bars cursor-pointer "></i>
                            </div>
                            <div className="h-full w-[35px] place-content-center object-cover border-px rounded-md bg-white/0 hover:bg-gray-400/10 shadow-[1px_2px_2px_-0.5px_rgba(0,0,0,0.5)]
                                            transform transition-transform duration-800 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5  hover:scale-105 
                                            ">
                                <img src="Image/logo.png" alt="" className="object-cover rounded-md bg-white/0 hover:bg-gray-400/10 " />
                            </div>
                        </div>
                        <div className="flex text-sm gap-2 text-[#252525] font-bold h-[60%] w-full  ">
                            <select name="" id="" className="  h-full  w-30 px-2   rounded-lg  outline-none shadow-[0.5px_1px_2.5px_-0.5px_rgba(0,0,0,0.5)] " >
                                <option value="">ทั้งหมด</option>
                            </select>
                            <div className="flex items-center gap-1 w-[80%]">
                                <input
                                    type="text"
                                    id="searchInput"
                                    placeholder="ค้นหา..."
                                    className="border-b border-[##B5B5B5] px-2 pt-2 pb-1 w-full pr-12 outline-none"
                                />
                                <button className=" rounded-md px-2.5 h-full bg-white/0 hover:bg-gray-600/5  shadow-[0.5px_1px_2.5px_-0.5px_rgba(0,0,0,0.5)] ">
                                    <i className="fa-solid fa-magnifying-glass text-[10px] "></i>
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-2 text-[#252525] font-bold h-[60%]  ">
                            <div className="flex items-center justify-end gap-2 w-30   rounded-md px-2 h-full bg-white/0 hover:bg-gray-400/10  shadow-[0.5px_1px_2.5px_-0.5px_rgba(0,0,0,0.5)]">
                                <span className="w-[80%] ">NanPar</span>
                                <div className="h-full flex justify-center items-center  ">
                                    <i className="fa-regular fa-circle-user  "></i>
                                </div>
                            </div>
                            <div className="bg-white/0 hover:bg-gray-400/10  rounded-md h-full p-2 flex justify-center items-center ">
                                <i className="fa-solid fa-bag-shopping"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   