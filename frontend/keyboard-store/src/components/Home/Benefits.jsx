import "../../styles/HomePage.css"
import { FaShippingFast, FaUndoAlt, FaHeadset, FaLock } from "react-icons/fa";

function Benefits() {
    return (
      <div className="benefitsSection">
        <h2>Why Shop With Us?</h2>
        <div className="benefitCards">
        <div className="benefitCard">
          <FaShippingFast size={150} />
          <p>Free Shipping</p>
        </div>
        <div className="benefitCard">
          <FaUndoAlt size={150}/>
          <p>30-Day Returns</p>
        </div>
        <div className="benefitCard">
          <FaHeadset size={150}/>
          <p>24/7 Customer Support</p>
        </div>
        <div className="benefitCard">
          <FaLock size={150}/>
          <p>Secure Payments</p>
        </div>
        </div>
      </div>
    );
  }

  export default Benefits;