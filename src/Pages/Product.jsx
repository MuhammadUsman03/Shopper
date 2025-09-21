import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId)); // productId is in string and e.id is in number so we convert product Id into number
  //console.log(product)
  //console.log(productId)
  return (
    <div>
      {product ? <Breadcrum product={product} /> : <p>Loading...</p>}
      {product ? <ProductDisplay product={product} /> : <p>Loading...</p>}
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
