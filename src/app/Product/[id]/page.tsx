"use client"

import React from 'react'
import { useParams } from 'next/navigation'; 
import ProductDetail from '@/components/revews/details';

const Daynapicproductsd = () => {

  const { id } = useParams();
  
  
  const productId = Number(id);

  return (
    <div>
      <ProductDetail cardid={productId} />
    </div>
  );
}

export default Daynapicproductsd;
 