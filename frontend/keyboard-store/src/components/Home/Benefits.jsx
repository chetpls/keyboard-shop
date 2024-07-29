import "../../styles/HomePage.css"
import { FaShippingFast, FaUndoAlt, FaHeadset, FaLock } from "react-icons/fa";

function Benefits() {
    return (
      <div className="">
        <div className="relative text-black flex flex-col items-center w-full gap-10 bg-[#f1ede9] px-2 pb-52">
        <h2 className="uppercase text-5xl font-bold mt-10 text-center">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-center gap-5">
        <div className="flex flex-col items-center gap-2 box-border p-4">
          <FaShippingFast size={150} />
          <p>Free Shipping</p>
        </div>
        <div className="flex flex-col items-center gap-2 box-border p-4">
          <FaUndoAlt size={150}/>
          <p>30-Day Returns</p>
        </div>
        <div className="flex flex-col items-center gap-2 box-border p-4">
          <FaHeadset size={150}/>
          <p>24/7 Customer Support</p>
        </div>
        <div className="flex flex-col items-center gap-2 box-border p-4">
          <FaLock size={150}/>
          <p>Secure Payments</p>
        </div>
        </div>
      </div>
      </div>
    );
  }

  export default Benefits;