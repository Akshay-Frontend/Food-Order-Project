import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
 
  // Props stoore riseve data

  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[300px] p-5 bg-white  flex flex-col  rounded-lg gap-3">
      <img 
        src={img}
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between ">
        <h2> {name} </h2>
        <span className="text-green-500 cursor-pointer"> ₹{price} </span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 100)}...</p>
      <div className="flex justify-between">
        <span className="flex  justify-center items-center">
          <IoIosStar className="mr-2 text-yellow-400" /> {rating}
        </span>
        {/*  *****************************   Click on extension  redux devtool  *********************/}
        <button
          onClick={() => {
            dispatch(addToCart({ id, img, name, price, rating, qty: 1 }));
            handleToast(name);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded  cursor-pointer text-sm"
        >
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
