import { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const UniqueCategory = [...new Set(FoodData.map((food) => food.category))];
    setCategories(UniqueCategory);
    console.log(UniqueCategory); [ "Lunch", "all categories name... console . log" ]
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  
  return (
    <div className="ml-4 ">
      <h3 className="text-xl font-semibold ml-5 ">Find the best food </h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 m-3 cursor-pointer 
         bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
           selectedCategory === "All" && " bg-green-500 text-white"
         }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={` px-3 py-2 m-3 cursor-pointer 
         bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white   ${
           selectedCategory === category && " bg-green-500 text-white"
         }`}
            >
              {category}
            </button>
          );
        })}
        {/* <button
          className="px-3 py-2 m-3 cursor-pointer
         bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white "
        >
          Lunch
        </button>
        <button
          className="px-3 py-2 m-3 cursor-pointer
         bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white"
        >
          Breakfast{" "}
        </button>
        <button
          className="px-3 py-2 m-3 cursor-pointer
         bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white "
        >
          Dinner
        </button>
        <button
          className="px-3 py-2 m-3 cursor-pointer
         bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white"
        >
          Snacks
        </button> */}
      </div>
    </div>
  );
};

export default CategoryMenu;
