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
      id:2,
      img:"headphone-2.png",
      category:"Headphones",
      title:"Wireless Headphone",
      price:"105.00"
  },
  {
      id:4,
      img:"ipad-1.png",
      category:"Mobile Tablets",
      title:"Apple iPad Air",
      price:"499.00"
  },
  {
      id:6,
      img:"cpu-1.png",
      category:"CPU Heat Pipes",
      title:"DeepCool Air Cooler",
      price:"80.00"
  }
]

const NewArrivals = () => {
  return (
    <div className="container mt-32" >
        <div className="sm:flex justify-between items-center">
            <h2 className="text-4xl font-medium">New Arrivals</h2>

        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
          {
            ProductData.map((item)=><ProductCards key={item.id} {...item}/>)
          }
        </div>
    </div>
  )
}


export default NewArrivals