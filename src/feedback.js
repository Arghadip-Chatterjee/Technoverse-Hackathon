import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './feedback.css'; // Import the CSS file for styling
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these values with your own from Email.js
    const serviceId = 'service_p8xq9zr';
    const templateId = 'template_rxbanv5';
    const userId = '-2Nvpwixl1CNZg2R_';

    // Create the email template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: feedback,
    };

    // Send the email using Email.js
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Feedback sent!', response.status, response.text);
        // Reset the form fields
        setName('');
        setEmail('');
        setFeedback('');
      })
      .catch((error) => {
        console.error('Error sending feedback:', error);
      });
  };

  const handleSignOut = () => {
    // Add your sign out logic here
    auth
      .signOut()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('User signed out');
  };

  return (
    <div className="feedback-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>Feedback Form</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <button className="signout-button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default FeedbackForm;
