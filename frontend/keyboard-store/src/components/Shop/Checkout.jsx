import React, { useState, useContext } from 'react';
import OrderSummary from './OrderSummary';
import InputField from '../Contact/InputField';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

function Modal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-[#141414] p-5 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-green">Thank You for Your Purchase!</h2>
        <button className="px-4 py-2 bg-green text-black rounded-md hover:bg-black" onClick={onConfirm}>
          <h1 glitch="HOME">HOME</h1>
        </button>
      </div>
    </div>
  );
}

function Checkout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    clearCart();
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-[#141414] p-5 text-green">
      <div className="flex flex-col w-full px-10 pt-20 gap-5">
        <h2 className="text-center text-5xl uppercase font-bold">Checkout</h2>
        <div className="flex flex-col lg:flex-row gap-10 box-border justify-center">
          <div className="">
            <form className="flex flex-col gap-5 items-center" onSubmit={(e) => {e.preventDefault(); openModal();}}>
              <h3>Contact Information</h3>
              <InputField
                type="email"
                name="email"
                id="checkout-email"
                placeholder=""
                label="Email"
              />
              <h3>Shipping Information</h3>
              <div className="flex flex-col lg:flex-row gap-5">
                <InputField
                  type="text"
                  name="firstName"
                  id="checkout-firstName"
                  placeholder=""
                  label="First Name"
                />
                <InputField
                  type="text"
                  name="lastName"
                  id="checkout-lastName"
                  placeholder=""
                  label="Last Name"
                />
              </div>
              <InputField
                type="number"
                name="phone"
                id="checkout-phone"
                placeholder=""
                label="Phone Number"
              />
              <InputField
                type="text"
                name="address"
                id="checkout-address"
                placeholder=""
                label="Address Line 1"
              />
              <InputField
                type="text"
                name="address2"
                id="checkout-address2"
                placeholder=""
                label="Address Line 2"
                required={false}
              />
              <label htmlFor="underline_select" className="sr-only">
                Underline select
              </label>
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
                <select
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option className="text-black" selected>Choose a country</option>
                  <option className="text-black" value="US">United States</option>
                  <option className="text-black" value="CA">Canada</option>
                  <option className="text-black" value="FR">France</option>
                  <option className="text-black" value="DE">Germany</option>
                </select>
                <InputField
                  type="text"
                  name="city"
                  id="checkout-city"
                  placeholder=""
                  label="City"
                />
                <InputField
                  type="text"
                  name="state"
                  id="checkout-state"
                  placeholder=""
                  label="State"
                />
                <InputField
                  type="number"
                  name="postal"
                  id="checkout-postal"
                  placeholder=""
                  label="Postal Code"
                />
              </div>
              <h3>Payment</h3>
              <h4 className="text-gray-400">Visa, Mastercard, American Express</h4>
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
                <InputField
                  type="number"
                  name="cardNumber"
                  id="checkout-cardNumber"
                  placeholder=""
                  label="Card Number"
                />
                <InputField 
                  type="text"
                  name="cardName"
                  id="checkout-nameCard"
                  placeholder=""
                  label="Name On The Card"
                />
                <InputField 
                  type="month"
                  name="date"
                  id="checkout-date"
                  placeholder=""
                  label="Expiry Date"
                />
                <InputField 
                  type="number"
                  name="csv"
                  id="checkout-csv"
                  placeholder=""
                  label="CSV"
                />
              </div>
              <button type="submit" className="px-7 py-2 mb-2 rounded-md bg-green text-black hover:bg-black lg:w-fit">
                <h3 glitch="CONFIRM PURCHASE">CONFIRM PURCHASE</h3>
              </button>
            </form>
          </div>
          <OrderSummary checkout={false}/>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleConfirm} />
    </div>
  );
}

export default Checkout;
