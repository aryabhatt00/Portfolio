import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme.png';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Append the required access key for the API
    formData.append("access_key", "f60278cd-f8c1-4f40-90cb-8621bdf173f6");
    
    const urlEncoded = new URLSearchParams(formData).toString();
    
    try {
      // Send the form data to the API
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json"
        },
        body: urlEncoded,
      });
    } catch (error) {
      console.error("Error submitting form", error);
      // Even if there's an error, we still want to notify the user.
    } finally {
      // Always show a success alert after submission
      alert("Message has been sent successfully");
      event.target.reset();
    }
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="Theme" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available; you can reach out to me anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />
              <p>kankipatiarya@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Illinois, US</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right" method="POST">
          <label>Your Name</label>
          <input type='text' placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label>Write your message</label>
          <textarea name="message" rows={8} placeholder='Enter your text' required></textarea>
          <button type='submit' className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
