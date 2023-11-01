import {
    AiFillStar,
    AiOutlineStar,
    AiOutlineShoppingCart
}
from 'react-icons/ai';
import {useDispatch} from 'react-redux'
import {addToCart} from '../redux/features/cartSlice';
import toast from 'react-hot-toast';


const ProductCards = (props) => {
    const dispatch=useDispatch();
    const addProduct=()=>{
        const payload={
            ...props,
            quantity:1
        }
        dispatch(addToCart(payload));
        toast.success("Added to Cart");
    }
    return(
        <div className='border border-gray-200'>
            <div className='text-center border-b border-gray-200'>
                <img className="inline-block" src={props.img} alt={props.title} />
            </div>
            <div className='px-8 py-4'>
                <p className='text-gray-500 text-[14px] font-medium'>
                    {props.category}
                </p>
                <h2 className='font-medium'>
                    {props.title}
                </h2>
                <div className='mt-3 flex text-[#ffb21d] items-center'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <p className='text-gray-600 text-[14px] ml-2'>
                        {props.review}
                    </p>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <h2 className='font-medium text-accent text-xl'>${props.price}</h2>
                    <div className='flex gap-2 items-center text-white px-4 py-2 cursor-pointer bg-pink hover:bg-accent' 
                         onClick={addProduct}
                    >
                        <AiOutlineShoppingCart/> Add To Cart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCards