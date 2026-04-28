import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Gold365 – 24/7 Customer Support",
  description:
    "Contact Gold365 support team via WhatsApp, email, or live chat. We're available 24/7 to help with your account, payments, and gaming queries.",
  keywords:
    "Gold365 contact, Gold365 support, Gold365 WhatsApp number, Gold365 email, Gold365 contact no, Gold365 customer care",
  authors: [{ name: "Gold365" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://gold365online.com/contact-us",
  },
  openGraph: {
    title: "Contact Gold365 – 24/7 Customer Support",
    description:
      "Contact Gold365 support team via WhatsApp, email, or live chat. We're available 24/7 to help.",
    url: "https://gold365online.com/contact-us",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gold365online.com/" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://gold365online.com/contact-us" },
  ],
};

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            Get in touch with our support team. We&apos;re here to help you 24/7
            with any questions or concerns.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content-section">
        <div className="contact-container">
          <div className="contact-grid">

            {/* Contact Information */}
            <div className="contact-info-card">
              <h2>Get in Touch</h2>
              <p style={{ color: "#555", fontSize: "16px", marginBottom: "25px", lineHeight: "1.7" }}>
                Looking for the official <strong>Gold365 Contact No</strong>,{" "}
                <strong>Gold365 Email Address</strong>, or{" "}
                <strong>Gold365 WhatsApp Number</strong>? You&apos;re in the right
                place. Our support team is available 24/7 to assist you with
                account, payment, and gaming queries.
              </p>

              <div className="contact-methods">
                <div className="contact-method-item">
                  <div className="contact-method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-method-details">
                    <h3>Gold365 Email Address</h3>
                    <p><a href="mailto:support@gold365online.com">support@gold365online.com</a></p>
                    <p style={{ fontSize: "15px", color: "#777" }}>Response within 24 hours</p>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="contact-method-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="contact-method-details">
                    <h3>Gold365 WhatsApp Number</h3>
                    <p><a href="https://tinyurl.com/r32dj69c" target="_blank" rel="noopener noreferrer">+91 84779 48072</a></p>
                    <p style={{ fontSize: "15px", color: "#777" }}>Instant replies on WhatsApp</p>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="contact-method-icon">
                    <i className="fas fa-comments"></i>
                  </div>
                  <div className="contact-method-details">
                    <h3>Live Chat</h3>
                    <p>Available 24/7 on our website</p>
                    <a href="https://tinyurl.com/r32dj69c" style={{ color: "#FFD700", fontWeight: 600 }}>
                      Start Chat <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="contact-method-icon">
                    <i className="fab fa-telegram"></i>
                  </div>
                  <div className="contact-method-details">
                    <h3>Telegram Channel</h3>
                    <p><a href="#">@GOLD365_Support</a></p>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="contact-method-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-method-details">
                    <h3>Gold365 Contact No</h3>
                    <p><a href="https://tinyurl.com/r32dj69c">+91 84779 48072</a></p>
                    <p style={{ fontSize: "15px", color: "#777" }}>Mon-Sat, 10AM - 8PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links-section">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-telegram"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="hours-card">
                <h3><i className="fas fa-clock"></i> Business Hours</h3>
                <div className="hours-grid">
                  <div className="hours-item">
                    <span className="hours-day">Monday - Friday</span>
                    <span className="hours-time">9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="hours-day">Saturday</span>
                    <span className="hours-time">10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="hours-day">Sunday</span>
                    <span className="hours-time">12:00 PM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="hours-day">24/7 Support</span>
                    <span className="hours-time">Live Chat &amp; WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>

          {/* Map Section */}
          <div className="map-section">
            <div className="map-container">
              <h2>Our Location</h2>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.6789!2d88.6138!3d27.3389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDIwJzIwLjAiTiA4OMKwMzYnNDkuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gold365 Office Location"
                />
              </div>
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="faq-preview">
            <h2>Have More Questions?</h2>
            <p>
              Check out our frequently asked questions for quick answers to
              common queries about Gold365.
            </p>
            <Link href="/#faq" className="faq-preview-btn">
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
