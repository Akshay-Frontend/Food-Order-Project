import { IoClose } from "react-icons/io5";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );

  const navigate = useNavigate();
  return (
    <div>
      <div
        className={`fixed right-0 top-0 w-full  lg:w-[20vw] h-full p-5 ml-1  bg-white 
                         ${
                           activeCart ? "translate-x-0 " : "translate-x-full"
                         }  transition-all duration-500 z-50  `}
      >
        <div className="flex  justify-between items-center my-3 ">
          <span className="text-xl font-bold text-gray-800"> My Order </span>
          <IoClose
            onClick={() => setActiveCart(!activeCart)}
            className=" border-2 border-gray-600 font-bold rounded text-xl
         hover:text-red-300 hover:border-red-300 cursor-pointer "
          />
        </div>

        {cartItems.length > 0 ?  (    // agar item cart add hua a hai tb 0 length se  up per 12345678.. tb ye data aa jay e nga
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (   // na hi to y text aay e nga
          <h2 className=" text-center text-xl font-bold text-gray-800">
            Your cart is empty Please add the Cart and show the Data
          </h2>
        )}

        {/* <ItemCard/>
        <ItemCard/>
        <ItemCard/> */}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : {totalQty} </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}{" "}
          </h3>
          <hr className="w-[120vw] lg:-w-[18vw] my-3 " />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 text-white py-2
           rounded  ml-8 w-[80vw]  lg:w-[18vw] mb-12 cursor-pointer  "
          >
            Check Out
          </button>
        </div>
      </div>
      <IoCartSharp
        cursor={"pointer"}
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full  bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 
          ${totalQty > 0 && "animate-bounce delay-500  transition-all "}  `}
      />
    </div>
  );
};

export default Cart;
