import type { Metadata } from "next";
import Link from "next/link";
import PolicySections from "@/components/PolicySections";

export const metadata: Metadata = {
  title: "Privacy Policy – Gold365 Online Gaming Platform",
  description:
    "Read Gold365's privacy policy to understand how we collect, use, and protect your personal data. Your security and privacy are our top priority.",
  keywords:
    "Gold365 privacy policy, Gold365 data protection, Gold365 user data, online gaming privacy India",
  authors: [{ name: "Gold365" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://gold365online.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy – Gold365 Online Gaming Platform",
    description:
      "Read Gold365's privacy policy to understand how we collect, use, and protect your personal data.",
    url: "https://gold365online.com/privacy-policy",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gold365online.com/" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://gold365online.com/privacy-policy" },
  ],
};

const privacySections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details.</li>
          <li><strong>Account Information:</strong> Login credentials, transaction history, and betting activity.</li>
          <li><strong>Device and Technical Information:</strong> IP address, browser type, and cookies to enhance user experience.</li>
          <li><strong>Communication Data:</strong> Customer support interactions, inquiries, and feedback.</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>The collected information is used for:</p>
        <ul>
          <li>Account registration and management, including verification and transaction processing.</li>
          <li>Security and fraud prevention to protect against unauthorized access.</li>
          <li>Personalized user experience, including tailored offers and promotions.</li>
          <li>Legal and regulatory compliance and dispute resolution.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Data Protection & Security",
    content: (
      <>
        <p>We implement strong security measures to safeguard your personal data, including:</p>
        <ul>
          <li><strong>SSL encryption</strong> for secure data transmission.</li>
          <li><strong>Two-Factor Authentication (2FA)</strong> for account protection.</li>
          <li><strong>Regular security audits</strong> to prevent unauthorized access.</li>
        </ul>
        <div className="policy-highlight">
          <p>
            <i className="fas fa-shield-alt"></i> Your security is our top
            priority. All transactions and data are protected with 256-bit
            encryption.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "4. Cookies and Tracking Technologies",
    content: (
      <ul>
        <li>Cookies are used to improve website performance and user experience.</li>
        <li>They help remember user preferences and deliver relevant content.</li>
        <li>Users can manage or disable cookies through browser settings.</li>
      </ul>
    ),
  },
  {
    title: "5. Third-Party Sharing & Disclosure",
    content: (
      <>
        <p>We do not sell, trade, or rent personal information to third parties. Information may be shared only with:</p>
        <ul>
          <li><strong>Payment processors</strong> for secure transaction handling.</li>
          <li><strong>Legal authorities</strong> when required by law or for fraud prevention.</li>
          <li><strong>Marketing partners</strong> to improve user experience with relevant promotions.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. User Rights & Control",
    content: (
      <>
        <p>Users have the following rights regarding their personal data:</p>
        <ul>
          <li>Access and update personal and account information.</li>
          <li>Request data deletion under applicable terms and conditions.</li>
          <li>Opt out of marketing and promotional communications.</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Retention Policy",
    content: (
      <p>
        We retain user data only for as long as necessary to fulfill legal,
        regulatory, and business obligations. After the retention period, data
        is securely deleted.
      </p>
    ),
  },
  {
    title: "8. GDPR & Compliance",
    content: (
      <p>
        For users located in the European Union, GOLD365 complies with GDPR
        principles, ensuring lawful and transparent data processing, the right
        to access or delete data, and secure handling of personal information.
      </p>
    ),
  },
  {
    title: "9. Updates to Privacy Policy",
    content: (
      <p>
        GOLD365 reserves the right to update this Privacy Policy at any time.
        Users are encouraged to review it periodically to stay informed of any
        changes.
      </p>
    ),
  },
  {
    title: "10. Contact Us",
    content: (
      <>
        <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
        <div className="contact-info-policy">
          <h3>Get in Touch</h3>
          <div className="contact-grid-policy">
            <div className="contact-item-policy">
              <div className="contact-icon-policy">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text-policy">
                <h4>Email</h4>
                <p><a href="mailto:support@gold365online.com">support@gold365online.com</a></p>
              </div>
            </div>
            <div className="contact-item-policy">
              <div className="contact-icon-policy">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="contact-text-policy">
                <h4>WhatsApp</h4>
                <p><a href="https://tinyurl.com/r32dj69c">+91 84779 48072</a></p>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="policy-hero-section">
        <div className="policy-hero-content">
          <h1 className="policy-hero-title">Privacy Policy</h1>
          <p className="policy-hero-subtitle">
            Welcome to GOLD365. We are committed to protecting your privacy and
            ensuring that your personal data is handled securely and
            transparently.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="policy-content-section">
        <div className="policy-container">
          <div className="policy-card">
            <div className="policy-last-updated">
              <i className="fas fa-calendar-alt"></i> Last Updated: February 2024
            </div>
            <PolicySections sections={privacySections} />
          </div>

          <div className="back-to-home-policy">
            <Link href="/" className="home-btn-policy">
              <i className="fas fa-home"></i> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
