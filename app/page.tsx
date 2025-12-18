'use client'
import { log } from "console";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [Products, setProducts] = useState<any[]>([]);
  const [Categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products/categories?limit=10');
        const data = await res.json();
        setCategories(data.slice(0, 10.));
      } catch (error: any) {
        console.log('Error :', error.message);
      }
    }

    fetchData();
  }, []);

  console.log(Categories);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?select=id,title,description,price,rating,stock,thumbnail,images');
        const data = await res.json();
        setProducts(data.products);
      } catch (error: any) {
        console.log('Error fetching data:', error.message);
      }
    }

    fetchData();
  }, []);



  return (
    <div className="flex  flex-col  min-h-screen w-full text-black font-sans ">
      {/* category */}
      <div className=" h-90 w-full  flex flex-col  items-center gap-4 pt-20 font-eng">
        <h1 className="font_thai" >Category</h1>
        {/* card */}
        <div className=" flex  gap-2 px-40 ov    ">
          {Categories.map((category) => (
          <div key={category.slug}
           className="bg-white p-4 rounded-md shadow-[1px_1px_3.5px_-0.5px_rgba(0,0,0,0.5)]  ">
            {category.name}
          </div>
          ))}
        </div>
      </div>
      <div
        className="mt-20 mb-2   w-full  ">
        <div className="flex flex-col justify-center items-center gap-5 h-full ">
          <h1 className="font_thai" >สินค้ายอดฮิต</h1>
          <div className="flex justify-start items-center w-full gap-2 px-30  ">
            <h5 className="font_thai ">ดูทั้งหมด</h5>
            <i className="fa-solid fa-caret-right"></i>
          </div>
          {/* card */}
          <div className=" h-full w-full  px-30 grid grid-cols-5 gap-5   ">
            {Products.map((product) => (
              <div key={product.id}
                className="bg-white flex flex-col justify-center items-center  h-100 w-80 p-px rounded-md shadow-[1px_1px_3.5px_-0.5px_rgba(0,0,0,0.5)] 
                
               ">
                <div className="  h-[80%]  place-content-center   ">
                  <img src={product.thumbnail} alt=""
                    className="h-full w-full  rounded-t-md  object-cover   "
                  />
                </div>
                {/* title */}
                <div className="h-20 w-full p-1.5 px-4 flex gap-0.5 ">
                  <div className=" h-full w-[75%]  ">
                    <h3 className="font_eng title truncate ">{product.title}</h3>
                    <div className="flex items-center h-[50%]  ">
                      <span className="price  text-shadow-custom   ">{product.price} $</span>
                    </div>
                  </div>
                  <div className="h-full flex flex-col gap-2 justify-center items-end w-[20%] ">
                    <button className="btn" >ดูเพิ่มเติม</button>
                    <button className="btn_sub" >เลือกซื้อ</button>
                  </div>
                </div>
              </div>
            ))}
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
