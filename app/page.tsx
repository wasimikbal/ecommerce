
import { client } from '@/lib/client';
import {groq} from 'next-sanity'
import { HeroBanner } from './components';
import { GetServerSideProps } from 'next';
import { Product } from '@/types/product';
import { Banner } from '@/types/banner';

export default async function Home() {

  const products = await getProducts();
  const bannerData = await getBanner();
  console.log(bannerData[0])
  return (
    <>
    <HeroBanner  {...bannerData[0]}/>

    <div className="text-center my-10 text-[#324d67]">
      <h2 className="text-[40px] font-bold">Best Seller Products</h2>
      <p className="text-base font-light">Speaker There are many variation packages</p>
      <div className='flex flex-wrap justify-center gap-3 mt-5 w-full'>
        {products?.map((product: Product)=> product.name)}
      </div>
    </div>
    </>
  );


  
}

const getProducts = async () => {
  return await client.fetch(groq `*[_type == "product"]`)
}

const getBanner = async () => {
  return await client.fetch(groq `*[_type == "banner"]`)
}

