import React, { useEffect } from 'react';

function Payments1() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_M33n1MGXYqxs8s');
    script.async = true;

    const razorpayForm = document.getElementById('razorpay-form');
    razorpayForm.appendChild(script);

    return () => {
      razorpayForm.removeChild(script);
    };
  }, []);

  return (
    <div className='payment'>
      <h2 className='heading'>Thanks For Choosing BasicPlan. Your Bill is $30</h2>
      <form id='razorpay-form'>
        {/* Razorpay payment button script will be added dynamically */}
      </form>
    </div>
  );
}

export default Payments1;
