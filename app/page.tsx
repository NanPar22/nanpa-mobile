import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  flex-col gap-1 min-h-screen w-full text-black font-sans ">
      {/* โปรเตอร์ */}
      <div className="pt-15 h-150 w-full via-fuchsia-700 text-blac bg-white">
        <div className="flex justify-center items-center  text-3xl">
          <h1>สินค้ายอดฮิต</h1>
      </div>
      </div>
      <div className="p-2 h-150 w-full via-fuchsia-700 text-blac bg-white">
        <div className="flex justify-center items-center  ">
          <h1 >สินค้ายอดฮิต</h1>
      </div>
      </div>
      <div className="h-150 w-full via-fuchsia-700 text-blac bg-white">da</div>
      <div className="h-150 w-full via-fuchsia-700 text-blac bg-white">dsa</div>
      <div className="h-150 w-full via-fuchsia-700 text-blac bg-white">das</div>
    </div>
  );
}
