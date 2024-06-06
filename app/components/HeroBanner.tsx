
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
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img src={urlFor(image).toString()} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}



export default HeroBanner