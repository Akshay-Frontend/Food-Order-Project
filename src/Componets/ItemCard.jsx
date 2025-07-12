import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/CartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from "react-hot-toast";

const ItemCard = ({ name, qty, price, img, id}) => {

  const dispatch = useDispatch();
  return (
    <> 
    <div className="flex gap-2 shadow-md rounded p-2 mb-4 cursor-pointer" >
       
        <RiDeleteBin6Line  onClick={() => {
           dispatch(removeFromCart( { id, name, img, price, qty }))
           toast( `${name } Removed ! `, {
                icon: "👋",
             });
          }}
          
            className=" absolute  right-7 cursor-pointer text-gray-600" />
      <img
        src={img} 
        className="w-[50px]  h-[50px]  "
      
      />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name} </h2>
        <div >
            <span className="text-green-500 font-bold"> ₹{price}</span>
           <span> {qty}</span>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default ItemCard;
