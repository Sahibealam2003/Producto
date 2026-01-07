import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";


const Checkout = () => {

  const navigate = useNavigate();

  return (
    
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 px-4">
      
    
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 text-center max-w-lg w-full">
        
        
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

       
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Thank You for Shopping! 🎉
        </h1>

        
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully.  
          We’ll send you a confirmation email shortly.
        </p>

       
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          
          <button
            onClick={() => {
              navigate("/")
            }}
            className="cursor-pointer w-full md:w-auto bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
