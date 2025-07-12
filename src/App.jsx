import {BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./pages/Home"
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./Componets/ProtectedRoute";
import './App.css'

function App() {

  return (
      
      <div>
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home/>}/>
         <Route path="/Success" element={<ProtectedRoute element={<Success/>}/>}/>
         <Route path="/*" element={<Error/>} />
       </Routes>
       </BrowserRouter>
      </div>
      
   
  )
}

export default App
