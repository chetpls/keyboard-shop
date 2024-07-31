import React, {useContext} from "react"
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
function OrderSummary({checkout=false}){
    const { total, tax, grandTotal } = useContext(CartContext);
    const navigate = useNavigate();
    const handleCheckout= () =>{
      navigate("/checkout")
    }
    return(
        <div className="items-center w-96 lg:w-1/3 p-5 border border-green rounded-lg h-fit flex self-center flex-col bg-[#262626] lg:self-start">
        <h2 className="font-bold uppercase text-3xl">Order Summary</h2>
        <div className="flex justify-between mb-2 w-full">
          <span className="font-bold">Sub Total:</span>
          <span className="text-right">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2 w-full">
          <span className="font-bold">Tax &#40;8%&#41;:</span>
          <span className="text-right">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2 w-full">
          <span className="orderSummaryLabel">Shipping:</span>
          <span className="text-right">Free</span>
        </div>
        <div className="flex justify-between mb-2 w-full">
          <span className="font-bold">Total:</span>
          <span className="text-right">${grandTotal.toFixed(2)}</span>
        </div>
        {checkout &&(
            <button className="bg-green text-lg font-semibold px-5 py-2 text-black hover:bg-black  rounded-md" onClick={handleCheckout}><h3 glitch="CHECKOUT">CHECKOUT</h3></button>
        )}
        
      </div>
    );
};


export default OrderSummary;