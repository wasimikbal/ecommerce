"use client";
import React, { useState } from 'react'
import { Product as ProductType } from '@/types/product'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import Product from "@/app/components/Product";
import { urlFor } from '@/lib/client';

interface ProductDetailsProps {
    product: ProductType;
    productList: ProductType[];
  }

const ProductDetails: React.FC<ProductDetailsProps> = ({product, productList}) => {
    const {name, details, price, image} = product;
    const [_product, setProduct] = useState([]);
    

  return (
    
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(product.image && product.image[0]).toString()}></img>
          </div>
          <div className="small-images-container">
            {
              image.map((img, i)=>(
                <img src={urlFor(img).toString()}
                className=""
                onMouseEnter={()=>{}
              }></img>
              ))
            }
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
          <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span onClick={()=>{}} className="minus">
                <AiOutlineMinus/>
              </span>
              <span className="num">
                0
              </span>
              <span className="plus">
                <AiOutlinePlus/>
              </span>
            </p>
          </div>
          <div className="buttons">
            <button className="add-to-cart">Add To Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {
              productList.map((item: ProductType)=>(
                <Product key={item._id} {...item}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails