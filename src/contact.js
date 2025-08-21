 const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Use this form to get in touch </p>
      <form className="contact-form">
        <div className="form-container">
        <div className="first-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"  required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone"  required />
        </div>
      </div>
      <div className="second-row" >
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"  required />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject"  required />
        </div>
    </div>
        <div className="form-group">
            <div className="message">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5"  required></textarea>
           </div>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
