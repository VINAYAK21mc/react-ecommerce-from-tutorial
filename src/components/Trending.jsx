import React from 'react'
import ProductCards from './ProductCards';

const ProductData=[
  {
      id:0,
      img:"headphone-1.png",
      category:"Headphones",
      title:"Gaming Headphone",
      price:"109.00"
  },
  {
      id:1,
      img:"mobile-1.png",
      category:"Mobile Tabletes",
      title:"Galaxy Android Tablet",
      price:"300.00"
  },
  {
      id:2,
      img:"headphone-2.png",
      category:"Headphones",
      title:"Wireless Headphone",
      price:"105.00"
  },
  {
      id:3,
      img:"headphone-3.png",
      category:"Headphones",
      title:"Gaming Headphone",
      price:"199.00"
  },
  {
      id:4,
      img:"ipad-1.png",
      category:"Mobile Tablets",
      title:"Apple iPad Air",
      price:"499.00"
  },
  {
      id:5,
      img:"mobile-2.png",
      category:"Mobile Tablets",
      title:"iPhone 14 Pro",
      price:"1400.00"
  },
  {
      id:6,
      img:"cpu-1.png",
      category:"CPU Heat Pipes",
      title:"DeepCool Air Cooler",
      price:"80.00"
  },
  {
      id:7,
      img:"cpu-2.png",
      category:"CPU Heat Pipes",
      title:"Air Cooler",
      price:"88.00"
  },
]

const Trending = () => {
  return (
    <div className="container mt-32" >
        <div className="sm:flex justify-between items-center">
            <h2 className="text-4xl font-medium">Trending Products</h2>

            <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
                <div className="text-black ">New</div>
                <div> Featured</div>
                <div>Top Sellers</div>
            </div>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
          {
            ProductData.map((item)=><ProductCards key={item.id} {...item}/>)
          }
        </div>
    </div>
  )
}

export default Trending