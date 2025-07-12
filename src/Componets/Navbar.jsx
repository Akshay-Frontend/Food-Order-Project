import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch  = useDispatch (); 
  return (
    <div>
      <nav className="flex flex-col lg:flex-row justify-between py-3 m-6  mb-15">
        <div>
          <h3 className="text-xl font-bold text-gray-600">
            {new Date().toUTCString().slice(0, 17)}
          </h3>
          <h1 className="text-2xl font-bold "> Flavor Foods</h1>
        </div>
        <div>
          <input onChange={(e) => dispatch (setSearch(e.target.value))}
            className="p-3 border border-gray-400 text-sm mr-30 font-bold rounded  outline-none w-full lg:w-[25vw] "
            type="search"
            placeholder="Search Your favorite Food"
            autoComplete="off"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
