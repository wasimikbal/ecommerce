

import './globals.css';
import { client } from '@/lib/client';
import {groq} from 'next-sanity'
import { HeroBanner } from './components';
import { GetServerSideProps } from 'next';
import { Product } from '@/types/product';
import { Banner } from '@/types/banner';

export default async function Home() {

  const products = await getProducts();
  const bannerData = await getBanner();
  return (
    <>
    <HeroBanner  {...bannerData[0]}/>

    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p className="">Speaker There are many variation packages</p>
      <div className=''>
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

