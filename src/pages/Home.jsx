import CategoryMenu from "../Componets/CategoryMenu"
import FoodItems from "../Componets/FoodItems"
import Navbar from "../Componets/Navbar"
import Cart from "../Componets/Cart"

const Home = () => {
  return (
    <div>
     
      <Navbar/>
      <CategoryMenu/>
      <FoodItems/>
      <Cart/>
      
    </div>
  )
}

export default Home
