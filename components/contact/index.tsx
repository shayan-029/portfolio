"use client"
import './style.css';
import { useContact } from '@/hooks/contact';

export const Contact = () => {

  const { handleChange, handleSubmit, options, values, isSent } = useContact();

  return (
    <section className="contact" id="contact">
      <div className="section-tag">Get In Touch</div>
      <div className="section-title" style={{ textAlign: "center" }}>
        Ready to Grow Your Business?
      </div>
      <p
        className="section-sub"
        style={{ margin: "0 auto 3rem", textAlign: "center" }}
      >
        Tell me about your project and let&apos;s make it happen. I&apos;ll get back to you
        within 24 hours.
      </p>
      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your name"
                required
                name='name'
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone / WhatsApp</label>
              <input
                type="tel"
                className="form-input"
                placeholder="+92 300 0000000"
                required
                name='phone'
                value={values.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              placeholder="you@example.com"
              required
              name='email'
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">What do you need?</label>
            <select
              className="form-input"
              value={values.service}
              name='service'
              onChange={handleChange}
              required
            >
              <option value="">Select a service...</option>
              {options.map((option) => (
                <option key={option.id} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Tell me about your project</label>
            <textarea
              className="form-input"
              placeholder="Describe your business and what you're looking for..."
              required
              value={values.detail}
              name='detail'
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={`btn-primary ${isSent ? 'success' : ''}`}>
            {isSent ? "Message Sent! ✓" : "Send Message →"}
          </button>
        </form>
      </div>
    </section>

  )
}