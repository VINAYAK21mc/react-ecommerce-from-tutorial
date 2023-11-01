import { useDispatch } from "react-redux"
import { removeFromCart } from "../redux/features/cartSlice"
import { RxCross1 } from "react-icons/rx"
const CartProduct = (props) => {
  const dispatch= useDispatch()
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
            <img className="h-[80px]" src={props.img} alt={props.title} />
            <div className="space-y-2">
                <h3 className="font-medium">
                    {props.title}
                </h3>
                <p className="text-gray-600 text-[14px]">
                    {props.quantity} x ${props.price}.00
                </p>
            </div>
        </div>
        <RxCross1
            className="cursor-pointer"
            onClick={()=>dispatch(removeFromCart(props.id))}
        />
    </div>
  )
}

export default CartProduct