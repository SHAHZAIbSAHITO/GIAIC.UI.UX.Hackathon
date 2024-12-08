"use client"

import React from 'react'
import { useParams } from 'next/navigation'; // Hook to get params from the URL
import ProductDetail from '@/components/revews/details';

const Daynapicproductsd = () => {
  // Fetch dynamic params using useParams
  const { id } = useParams();
  
  // Convert the string id to a number
  const productId = Number(id);

  return (
    <div>
      <ProductDetail cardid={productId} />
    </div>
  );
}

export default Daynapicproductsd;
 