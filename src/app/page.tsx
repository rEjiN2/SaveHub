"use client"
import Image from "next/image";
import Navbar from '../components/Navbar/Navbar'
import Banner from '../../public/bannersave.jpg'
import Cloth from '../../public/clothing.jpg'
import Accessories from '../../public/access.jpg'
import Elecgtronics from '../../public/electronics.jpg'
import Tshirt from '../../public/tshirt.jpg'
import HeadSet from '../../public/headset.jpg'
import Cycle from '../../public/cycle.webp'
import Trimmer from '../../public/trimmer.webp'
import Top from '../../public/top.webp'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";




interface Product {
    id:number;
    name:string;
    image: string;
    category:string;
    subcategory:string;
    price:number;
    discount:number;
    link:string;
}

const LoadingSkeleton = () => (
    <div className="bg-white rounded-lg shadow-lg h-[350px] w-full p-10 max-w-xs animate-pulse">
      <div className="flex justify-between p-4">
        <div className="bg-gray-300 h-6 w-20 rounded"></div>
        <div className="bg-gray-300 h-6 w-20 rounded"></div>
      </div>
      <div className="bg-gray-300 h-[248px] rounded-lg"></div>
      <div className="bg-gray-300 h-12 mt-6 p-3 rounded-md"></div>
    </div>
  );


export default function Home() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const res = await fetch('/api/getTodaysOffer', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const response = await res.json();
        setProducts(response);
      } catch (error: any) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOffer();
  }, []);

  return (
   
       <div className="container mx-auto pt-5">
      
       {/* Banner Section  */}
        <Image src={Banner} width={1440} height={300} alt="banner" style={{borderRadius:'25px'}} />
       
        {/* Collection */}
        <section className="pt-10">
        <h1 className="text-zinc-50 text-5xl text-center underline pt-10">Collections</h1>
        <div className="container mx-auto pt-10">
          <div className="grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg h-[350px] relative">
    <Image src={Cloth} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute inset-0 flex items-center justify-center">
        <Link href='/clothing/mens'>
        <h1 className="text-white text-xl text-center bg-black bg-opacity-50 p-3 rounded cursor-pointer">Clothing</h1>
        </Link>
    </div>
</div>
<div className="bg-white p-6 rounded-lg shadow-lg h-[350px] relative">
    <Image src={Accessories} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute inset-0 flex items-center justify-center">
    <Link href='/accessories'>
        <h1 className="text-white text-xl text-center bg-black bg-opacity-50 p-3 rounded cursor-pointer">Accessories</h1>
    </Link>
    </div>
</div>
<div className="bg-white p-6 rounded-lg shadow-lg h-[350px] relative">
    <Image src={Elecgtronics} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute inset-0 flex items-center justify-center">
    <Link href='/electronics'>
        <h1 className="text-white text-xl text-center bg-black bg-opacity-50 p-3 rounded cursor-pointer">Electronics</h1>
    </Link>
    </div>
</div>
           
          </div>
                
        </div>
        </section>
           {/* Today's Offer */}
           <section className="pt-10">
    <h1 className="text-zinc-50 text-5xl text-center underline pt-10">Today&apos;s Best Offer</h1>
    <div className="container pt-10 flex flex-wrap justify-center gap-5 w-full">
        
    {loading
            ? Array.from({ length: 5 }).map((_, index) => <LoadingSkeleton key={index} />)
            : products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg h-[350px] w-full max-w-xs relative">
                  <div className="flex justify-between">
                    <div className="price-tag z-50">₹ {product.price} </div>
                    <div className="price-tag z-50">{product.discount}% Off </div>
                  </div>
                  <Image
                    src={product.image}
                    alt="clothing"
                    // width={300} // Replace with actual width
                    // height={300} // Replace with actual height
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg h-[248px]"
                  />
                  <button onClick={() => handleClick(product.link)} className="bg-black w-full mt-6 p-3 rounded-md absolute text-white bottom-0 ">Buy Now</button>
                </div>
              ))}       
    </div>
</section>





       </div>
   
  );
}
