import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme.png'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'





const Contact = () => {
  

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f60278cd-f8c1-4f40-90cb-8621bdf173f6");
    
        const urlEncoded = new URLSearchParams(formData).toString();
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", // Required content type
              Accept: "application/json"
            },
            body: urlEncoded, // Send the URL-encoded data
            
          }).then((res) => res.json()); // Parse the JSON response
        
          // Handle response
          if (res.success) {
            alert("Message has been sent successfully");
          } else {
            console.error("Error submitting form", res);
            alert("Error submitting the message");
          }
          
        };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available you can reach out to me anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>kankipatiarya@gmail.com</p>
                        </div>
                       
                        <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Illinois, US</p>

                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right"  method="POST">
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name'/>
                    <label htmlFor="">Your email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message</label>
                    <textarea name="message"  id="" rows={8} placeholder='Enter your text'></textarea>
                    <button type='submit' className="contact-submit">Submit</button>
                </form>
            </div>

        </div>
    )
}


export default Contact