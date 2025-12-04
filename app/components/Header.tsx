"use client";

import { text } from "stream/consumers";


export default function Home() {
    return (
        <>
            <div className="  h-12 w-full  fixed gap-5 flex justify-center items-end rounded-b-full p-px backdrop-blur-md bg-black/5    shadow-[0px_1px_2.5px_-0.5px_rgba(0,0,0,0.5)]       ">
                <div className="  h-full w-full px-10 flex justify-center items-center  ">
                    <div className=" h-full w-[50%] text-md font-normal flex justify-between items-center gap-5  text-black/60">
                        <div className="flex justify-center items-cent gap-2 h-[60%]    font-stretch-50%  ">
                            <div className=" hover:bg-gray-400/10  rounded-md h-full p-1 flex justify-center items-center ">
                                <i className="fa-solid fa-bars cursor-pointer "></i>
                            </div>
                            <div className=" w-7 h-7 place-content-center object-cover border-px rounded-md  hover:bg-gray-400/10 shadow-[0.5px_1px_2.5px_-0.5px_rgba(0,0,0,0.5)]
                                            transform transition-transform duration-800 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5  hover:scale-105 
                                            ">
                                <img src="Image/logo.png" alt="" className="object-cover rounded-md  hover:bg-gray-400/10 " />
                            </div>
                        </div>
                        <button className=""> </button>
                        <div className="flex text-sm gap-2 font-bold h-[60%] w-full  ">
                            <select name="" id="" className="  h-full  w-30 px-2  rounded-lg  outline-none shadow-[0.5px_1px_2.5px_-0.5px_rgba(0,0,0,0.5)] " >
                                <option value="">ทั้งหมด</option>
                            </select>
                            <div className="flex items-center gap-1 w-[80%]">
                                <input
                                    type="text"
                                    id="searchInput"
                                    placeholder="ค้นหา..."
                                    className="border-b  px-2 pt-0.5 pb-1 w-full pr-12 outline-none"
                                />
                                <button className=" rounded-md px-2 h-full  hover:bg-gray-600/5   ">
                                    <i className="fa-solid fa-magnifying-glass text-[10px] "></i>
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-2 font-bold h-[60%]  ">
                            <div className="flex items-center justify-end gap-2 w-30   rounded-md px-2 h-full  hover:bg-gray-400/10  shadow-[0.5px_1px_2.5px_-0.5px_rgba(0,0,0,0.5)]">
                                <span className="w-[80%] ">NanPar</span>
                                <div className="h-full flex justify-center items-center  ">
                                    <i className="fa-regular fa-circle-user  "></i>
                                </div>
                            </div>
                            <div className=" hover:bg-gray-400/10  rounded-md h-full p-1 flex justify-center items-center ">
                                <i className="fa-solid fa-bag-shopping"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   