import { useEffect, useState } from "react";
import ShopSidebar from "./ShopSidebar";
import ShoesDetails from "./ShoesDetails";



const Shoes = () => {

    const [shoes, setShoes] = useState([])

    useEffect( () =>{
     
    fetch('shoes.json')
    .then(res => res.json())
    .then(data => setShoes(data))  
 
    } , [])


    return (
        <div>
        <div>
        <div className=" mt-20 mb-10 ml-10 mr-10 ">
        <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-5">
        <div>
        <ShopSidebar></ShopSidebar>
        </div>
        <div className=" flex justify-center ">
        <div className=" grid  md:grid-cols-3 gap-5 ">
        {
        shoes.map( shoes => <ShoesDetails shoes={shoes} ></ShoesDetails>  )
        }
        </div>
        </div>
        </div>
        </div>
        </div>
            
        </div>
    );
};

export default Shoes;