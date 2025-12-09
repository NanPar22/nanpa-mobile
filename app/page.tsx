import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  flex-col gap-1 min-h-screen w-full text-black font-sans ">
      {/* โปรเตอร์ */}
      <div className=" h-150 w-full via-fuchsia-700 text-blac bg-white flex justify-center pt-12">
        <div className="flex h-140 w-[1600px]  ">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/34b5bf180145769.6505ae7623131.jpg"
            className="object-cover object-top  h-full w-full  "
            alt="" />
        </div>
      </div>
      <div className="pt-4   h-150 w-full via-fuchsia-700 text-blac bg-white ">
        <div className="flex flex-col justify-center items-center gap-5 h-full ">
          <h1 className="font_thai" >สินค้ายอดฮิต</h1>
          <div className=" h-full w-full bg-amber-200 ">
          </div>
        </div>
      </div>
      <div className="h-150 w-full via-fuchsia-700 text-blac bg-white">da</div>
      <div className="h-150 w-full via-fuchsia-700 text-blac bg-white">dsa</div>
      <div className="h-150 w-full via-fuchsia-700 text-blac bg-white">das</div>
    </div>
  );
}
