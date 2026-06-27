// import React from 'react'

// function Products({setCartCount , setCartItems}){
//     const products=[
//         {
//             id:1,
//             name:"laptop",
//             price:"$999",
//             //  image: "https://via.placeholder.com/250"
//         },
//         {
//             id:2,
//             name:"smart phone",
//             price:"$888",
//             // image:"https://via.placeholder.com/250"
//         },
//         {
//             id:3,
//             name:"smart watch",
//             price:"$399",

//         },
//         {
//             id:5,
//             name:"smart phone",
//             price:"$888",
//             // image:"https://via.placeholder.com/250"
//         },
//         {
//             id:4,
//             name:"smart watch",
//             price:"$399",

//         },
//         {
//             id:6,
//             name:"smart watch",
//             price:"$399",

//         }

//     ]
//   return (
//     <div>
// <h2>Products</h2>
// <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//     {products.map((product) => (
//         <div className='border rounded -lg p-4 shadow'
//          key={product.id}
//          >
//            <img
//            src={product.image}
//            alt={product.name}
//            />

//            <h3 className='text-xl font-semibold mt-3 '>{product.name}</h3>
//            <p className='my-2'>{product.price}</p>
//            <button className='bg-black text-blue-700 px-4 py-2 rounded'
//            onClick={()=>{
//             setCartCount((prev)=>prev+1);

//             setCartItems(prev=>[
//                 ...prev,
//                 product
//             ]);
//            }}
//            >Add To Cart</button>

//         </div>
//     ))}
// </div>
//     </div>
//   )
// }

// export default Products