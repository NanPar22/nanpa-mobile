import Image from "next/image";




export default function Home() {
  return (
    <div className="flex  flex-col  min-h-screen w-full text-black font-sans ">
      {/* โปรเตอร์ */}
      <div className=" h-150 w-full via-fuchsia-700 text-blac flex justify-center pt-12">
        <div className="flex h-140 w-[1600px]  ">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/34b5bf180145769.6505ae7623131.jpg"
            className="object-cover object-top  h-full w-full rounded-lg  "
            alt="" />
        </div>
      </div>
      <div className="mt-20 mb-2   w-full    ">
        <div className="flex flex-col justify-center items-center gap-5 h-full ">
          <h1 className="font_thai" >สินค้ายอดฮิต</h1>
          <div className="flex justify-start items-center w-full gap-2 px-40  ">
            <h5 className="font_thai ">ดูทั้งหมด</h5>
            <i className="fa-solid fa-caret-right"></i>
          </div>
          {/* card */}
          <div className=" h-full w-full  px-40   ">
            <div className="bg-white h-100 w-100 p-px rounded-md shadow-[1px_1px_3.5px_-0.5px_rgba(0,0,0,0.5)]  ">
              <div className=" h-80 w-full  place-content-center flex    bg-amber-100 ">
                <img src="https://www.apple.com/newsroom/videos/videos-2024/autoplay/2024/09/apple-intelligence-siri/posters/Apple-Intelligence-Siri.jpg.large_2x.jpg" alt=""
                  className="h-full w-[80%]  object-cover  "
                />
              </div>
              <div className="h-20 w-full p-1.5 bg-amber-800 flex gap-0.5 ">
                <div className="bg-amber-300 h-full w-[70%] overflow-hidden ">
                  <h3 className="font_eng ">Iphone 00</h3>
                  <span>รุ่นล่าสุดจาก Apple</span>
                </div>
                <div className="h-full w-[30%] bg-amber-200">
                  <button ></button>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-full w-full  px-40  ">
            <div className="bg-white h-110 w-full rounded-md shadow-[0px_1px_2px_-0.5px_rgba(0,0,0,0.5)]  ">

            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-2  w-full    ">
        <div className="flex flex-col justify-center items-center gap-5 h-full ">
          <h1 className="font_thai" >สินค้ามือสอง</h1>
          <div className="flex justify-start items-center w-full gap-2 px-40  ">
            <h5 className="font_thai ">ดูทั้งหมด</h5>
            <i className="fa-solid fa-caret-right"></i>
          </div>
          {/* card */}
          <div className=" h-full w-full  px-40   ">
            <div className="bg-white h-100 w-100 rounded-md shadow-[1px_1px_3.5px_-0.5px_rgba(0,0,0,0.5)]  ">

            </div>
          </div>
          <div className=" h-full w-full  px-40  ">
            <div className="bg-white h-110 w-full rounded-md shadow-[0px_1px_2px_-0.5px_rgba(0,0,0,0.5)]  ">

            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-10  w-full    ">
        <div className="flex flex-col justify-center items-center gap-5 h-full ">
          <h1 className="font_thai" >รีวิวจากลูกค้า</h1>
          <div className="flex justify-start items-center w-full gap-2 px-40  ">
            <h5 className="font_thai ">ดูทั้งหมด</h5>
            <i className="fa-solid fa-caret-right"></i>
          </div>
          {/* card */}
          <div className=" h-full w-full  px-40   ">
            <div className="bg-white h-40 w-80 rounded-md shadow-[1px_1px_3.5px_-0.5px_rgba(0,0,0,0.5)]  ">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
