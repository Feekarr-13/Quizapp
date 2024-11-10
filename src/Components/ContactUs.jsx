import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container" id="contact" data-aos="fade-up">
      <h2>Contact Us</h2>
      <p className="contact-description">
        Got any questions about the product or scaling on our platform? We’re here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
      </p>

      <div className="contact-content">
        {/* Contact Form Section */}
        <div className="contact-form">
          {/* First Name and Last Name Fields */}
          <div className="input-group">
            <div className="input-field">
              <label>First Name</label>
              <input type="text" placeholder="First name" />
            </div>
            <div className="input-field">
              <label>Last Name</label>
              <input type="text" placeholder="Last name" />
            </div>
          </div>

          {/* Email Field */}
          <div className="input-field">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          {/* Message Field */}
          <div className="input-field">
            <label>Message</label>
            <textarea placeholder="Message..."></textarea>
          </div>

          {/* Send Button */}
          <button className="send-button">Send Message</button>
        </div>

        {/* Contact Info Section */}
        <div className="contact-info">
          <p>For further information, please contact the following:</p>
          <div className="info-item">
            <span className="icon">📧</span>
            <p>webapp@gmail.com</p>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <p>+62813929913</p>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <p>Jl. Kedungmundu<br />Kota Semarang, Jawa Tengah, 297832</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
