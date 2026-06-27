import axios from "axios";
import { useState ,useEffect } from "react";
function App(){
const [products , setProducts]= useState([]);
const [search ,setSearch] = useState("");
const [category ,setCategory]=useState("all");
useEffect(()=>{
  axios
  .get("https://fakestoreapi.com/products")
  .then((res)=>{
    setProducts(res.data);
    })
    .catch((err)=>{
      console.log(err);
    });
}, []);


return(
  
  <div className="min-h-screen bg-gray-100">
    <div className="bg-white shadow-md p-5 ">
      <h1 className="text-3xl font-bold text-center">Mini Store</h1>
    </div>

    {/* search  */}
    <div className="max-w-6xl mx-auto p-5 flex flex-col ">
      <input 
      type="text"
      placeholder="Search Products"
      value={search}
      onChange={(e)=>
        setSearch(e.target.value)
      }

      className="flex-1 p-3 border rounded-lg outline-none"
      />


      <select value={category}
      onChange={(e)=>
        setCategory(e.target.value)
      } 
      className="p-3 border rounded-lg"
      >
        <option value="all">All Category</option>
         <option value="cloths">Clothig</option>
          <option value="electronics">Electronics</option>
           <option value="womens cloting">womens Clothing</option>

      </select>

    </div>

    {/* products */}
  <div className="max-w-6xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {products.map((item)=>(
      <div key={item.id} 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition"
      >
        <div className="h-52 flex justify-center items-center p-4 ">
          <img
          src={item.image}
          alt={item.title}
           className="h-40 w-full object-contain "
          />
        </div>
<div className="p-4">
              <h2 className="font-semibold h-14 overflow-hidden">
                {item.title}
              </h2>

              <p className="text-green-600 text-xl font-bold mt-2">
                ₹ {item.price}
              </p>

              <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                Add To Cart
              </button>
            </div>
      </div>
    ))}
  </div>
  </div>
)}

export default App;