"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-form-card">
      <h2>Send us a Message</h2>

      {submitted && (
        <div
          style={{
            background: "rgba(255,215,0,0.15)",
            border: "1px solid #FFD700",
            borderRadius: "12px",
            padding: "16px 20px",
            marginBottom: "20px",
            color: "#2b0057",
            fontWeight: 600,
          }}
        >
          <i className="fas fa-check-circle" style={{ color: "#FFD700", marginRight: "8px" }}></i>
          Message sent successfully! We&apos;ll get back to you soon.
        </div>
      )}

      <form id="contactForm" onSubmit={handleSubmit} autoComplete="off">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              autoComplete="given-name"
              suppressHydrationWarning
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              autoComplete="family-name"
              suppressHydrationWarning
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contactEmail">Email Address *</label>
          <input
            type="email"
            id="contactEmail"
            name="email"
            placeholder="Enter your email address"
            autoComplete="email"
            suppressHydrationWarning
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            autoComplete="tel"
            suppressHydrationWarning
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <select id="subject" name="subject" suppressHydrationWarning required>
            <option value="" disabled>Select a subject</option>
            <option value="account">Account Support</option>
            <option value="payment">Payment Issue</option>
            <option value="technical">Technical Support</option>
            <option value="feedback">Feedback</option>
            <option value="partnership">Partnership Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            suppressHydrationWarning
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          <i className="fas fa-paper-plane" style={{ marginRight: "10px" }}></i>
          Send Message
        </button>
      </form>
    </div>
  );
}
