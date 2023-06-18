// // SubscriptionsPage.js
// import {React, useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth } from './firebase';
// import './SubscriptionPage.css'; // Import CSS file for styling

// function SubscriptionsPage() {
//   const navigate = useNavigate();

//   const signOut = () => {
//     auth
//       .signOut()
//       .then(() => {
//         navigate('/');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const Home = ()=>{
//     navigate('/homepage')
//   }

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
//     script.setAttribute('data-payment_button_id', 'pl_M33n1MGXYqxs8s');
//     script.async = true;

//     const razorpayForm = document.getElementById('razorpay-form');
//     razorpayForm.appendChild(script);

//     return () => {
//       razorpayForm.removeChild(script);
//     };
//   }, []);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
//     script.setAttribute('data-payment_button_id', 'pl_M34apl0slLu22J');
//     script.async = true;

//     const razorpayForm = document.getElementById('razorpay-form2');
//     razorpayForm.appendChild(script);

//     return () => {
//       razorpayForm.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="subscriptions-page">
//       <h1 className="subscriptions-title">Subscriptions</h1>

//       <div className="subscriptions-container">
//         <div className="subscription-plan">
//           <h2 className="plan-title">Basic Plan</h2>
//           <ul className="plan-features">
//             <li>Watch in Mobile Only</li>
//             <li>Resolution - 720p</li>
//             <li>Price - ₹200</li>
//           </ul>
//             <form id='razorpay-form' className='razorpay'>
//             {/* Razorpay payment button script will be added dynamically */}
//             </form>
//         </div>

//         <div className="subscription-plan">
//           <h2 className="plan-title">Premium Plan</h2>
//           <ul className="plan-features">
//             <li>Watch in Mobile and Laptop</li>
//             <li>Resoltion - 4K HDR</li>
//             <li>Price - ₹500</li>
//           </ul>
//           <form id='razorpay-form2' className='razorpay'>
//             {/* Razorpay payment button script will be added dynamically */}
//             </form>
//         </div>
//       </div>

//       <button className="sign-out-button" onClick={signOut}>
//         Sign Out
//       </button>

//       <button className="sign-out-button" onClick={Home}>
//         Home
//       </button>
//     </div>
//   );
// }

// export default SubscriptionsPage;




// SubscriptionsPage.js
import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './SubscriptionPage.css'; // Import CSS file for styling

function SubscriptionsPage() {
  const navigate = useNavigate();
  const [razorpayClicked, setRazorpayClicked] = useState(false);

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Home = () => {
    if (razorpayClicked) {
      navigate('/section-selection');
    }
  };

  const handleRazorpayClick = () => {
    setRazorpayClicked(true);
  };

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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_M34apl0slLu22J');
    script.async = true;

    const razorpayForm = document.getElementById('razorpay-form2');
    razorpayForm.appendChild(script);

    return () => {
      razorpayForm.removeChild(script);
    };
  }, []);

  return (
    <div className="subscriptions-page">
      <h1 className="subscriptions-title">Subscriptions</h1>

      <div className="subscriptions-container">
        <div className="subscription-plan">
          <h2 className="plan-title">Basic Plan</h2>
          <ul className="plan-features">
            <li>Watch in Mobile Only</li>
            <li>Resolution - 720p</li>
            <li>Price - ₹200</li>
          </ul>
          <form id="razorpay-form" className="razorpay" onClick={handleRazorpayClick}>
            {/* Razorpay payment button script will be added dynamically */}
          </form>
        </div>

        <div className="subscription-plan">
          <h2 className="plan-title">Premium Plan</h2>
          <ul className="plan-features">
            <li>Watch in Mobile and Laptop</li>
            <li>Resoltion - 4K HDR</li>
            <li>Price - ₹500</li>
          </ul>
          <form id="razorpay-form2" className="razorpay" onClick={handleRazorpayClick}>
            {/* Razorpay payment button script will be added dynamically */}
          </form>
        </div>
      </div>

      <button className="sign-out-button" onClick={signOut}>
        Sign Out
      </button>

      <button className="sign-out-button" onClick={Home}>
        Home
      </button>
    </div>
  );
}

export default SubscriptionsPage;

