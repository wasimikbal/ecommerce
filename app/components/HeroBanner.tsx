
import React from 'react'
import Link from 'next/link'
import { groq } from 'next-sanity';
import { client, urlFor } from '@/lib/client';
import { Product } from '@/types/product';

export interface BannerProps {
  _id: string;
  _type: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  buttonText: string;
  product: string;
  desc: string;
  smallText: string;
  midText: string;
  largeText1?: string; 
  largeText2?: string; 
  discount?: string; 
  saleTime?: string;
}


const HeroBanner: React.FC<BannerProps> =  ({
  _id,
  _type,
  image,
  buttonText,
  product,
  desc,
  smallText,
  midText,
  largeText1,
  largeText2,
  discount,
  saleTime,
}) => {



  return (
    <div className="px-10 py-4 bg-gray-200 rounded-lg relative h-[500px] leading-9">
      <div>
        <p className='text-[20px] mt-50 text-black'>{smallText}</p>
        <h3 className="text-5xl text-black font-bold">{midText}</h3>
        <h1 className="text-9xl text-black font-bold">{largeText1}</h1>
        <img className="absolute top-0 right-20 w-21 h-21 mr-30" src={urlFor(image).toString()} alt='headphones'/>

        <div>
          <Link href={`/Product/${product}`}>
            <button type='button' className="rounded-lg px-4 py-2 mt-8 bg-red-500 text-white font-medium focus:outline-none hover:bg-red-700 z-10000">
              {buttonText}</button>
          </Link>

          <div className="absolute right-10 bottom-5 w-30 lg:w-60 flex flex-col text-gray-700 leading-loose">
            <h5 className='text-black font-bold'>DESCRIPTION</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}



export default HeroBanner