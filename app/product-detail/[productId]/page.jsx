"use client"
import Breadcrumb from '@/app/_components/Breadcrumb';
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

function ProductDetail({params}) {

    const [productDetail, setProductDetail] = useState();
    useEffect(()=>{
        console.log("Product Id", params?.productId)
        getProductById_();
    },[])

    const getProductById_=()=>{
        GlobalApi.getProductById(params?.productId).then(resp=>{
            console.log(resp.data)
            setProductDetail(resp.data);
        })
    }
  return (
    <div>
        <Breadcrumb />
    </div>
  )
}

export default ProductDetail
