import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

//  *******************************  Get Img Data  from 2nd File  ********************************* //

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleToast = (name) => toast.success(` Added ${name} `);

  return (
    <>  
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex  flex-wrap gap-10 ml-2 justify-center items-center my-10 ">

        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&  
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard // *************************************   Pass a Data from Props throw ....   ************* />/
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}

        {/* {FoodData.map((food) => {
        return (     
           <FoodCard         // *************************************   Pass a Data from Props throw ....   ************* />/
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast = {handleToast}
          />
        ))}
        );
      })} */}
      </div>
    </>
  );
};

export default FoodItems;
