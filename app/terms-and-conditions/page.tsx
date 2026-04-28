import type { Metadata } from "next";
import Link from "next/link";
import PolicySections from "@/components/PolicySections";

export const metadata: Metadata = {
  title: "Terms and Conditions – Gold365 Online Gaming Platform",
  description:
    "Read Gold365's Terms and Conditions. By using our platform you agree to our terms covering eligibility, responsible gaming, payments, and user guidelines.",
  keywords:
    "Gold365 terms and conditions, Gold365 terms of service, Gold365 rules, Gold365 user agreement",
  authors: [{ name: "Gold365" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://gold365online.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions – Gold365 Online Gaming Platform",
    description:
      "Read Gold365's Terms and Conditions covering eligibility, responsible gaming, payments, and user guidelines.",
    url: "https://gold365online.com/terms-and-conditions",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gold365online.com/" },
    { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: "https://gold365online.com/terms-and-conditions" },
  ],
};

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <p>
        By visiting and using our website, you acknowledge that you have read,
        understood, and agreed to these Terms and Conditions. If you do not
        agree, you must stop using the website immediately.
      </p>
    ),
  },
  {
    title: "2. Modifications to the Terms",
    content: (
      <p>
        GOLD365 reserves the right to modify these Terms and Conditions at any
        time. Updates will be posted on this page, and continued use of the
        website constitutes acceptance of the revised terms.
      </p>
    ),
  },
  {
    title: "3. Use of the Website",
    content: (
      <>
        <p>You agree to:</p>
        <ul>
          <li>Use the website only for lawful purposes.</li>
          <li>Not engage in any activity that disrupts or interferes with website functionality.</li>
          <li>Refrain from attempting unauthorized access to systems or data.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Intellectual Property",
    content: (
      <p>
        All content on this website, including text, images, logos, graphics,
        and layout, is the intellectual property of GOLD365 unless otherwise
        stated. Unauthorized copying, reproduction, or distribution is strictly
        prohibited without prior written consent.
      </p>
    ),
  },
  {
    title: "5. User-Generated Content Guidelines",
    content: (
      <>
        <p>
          To have your content displayed on GOLD365, users must submit content
          by email following these guidelines:
        </p>
        <ul>
          <li>Content must be between 800–1200 words.</li>
          <li>Submission must be in DOC file format.</li>
          <li>Content must be original and must not infringe third-party rights.</li>
          <li>Users grant GOLD365 a non-exclusive, royalty-free, perpetual license to use, modify, and display the content.</li>
          <li>Content must be submitted to support@gold365online.com.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Age Restriction Clause",
    content: (
      <>
        <ul>
          <li>Users must be at least 18 years old or meet the legal age requirement in their jurisdiction.</li>
          <li>By registering, users confirm that all provided information is accurate and current.</li>
          <li>GOLD365 reserves the right to suspend or terminate accounts that violate eligibility criteria.</li>
        </ul>
        <div className="policy-highlight">
          <p>
            <i className="fas fa-exclamation-triangle"></i>{" "}
            <strong>Age Restriction:</strong> You must be 18+ to use this
            platform. Underage gambling is illegal and strictly prohibited.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "7. Responsible Gambling Disclaimer",
    content: (
      <>
        <p>GOLD365 promotes responsible gambling. Users are advised to consider the following:</p>
        <ul>
          <li>Bet responsibly and avoid excessive or impulsive gambling.</li>
          <li>Betting should not be treated as a source of income or financial investment.</li>
          <li>Self-exclusion options are available for users who require assistance.</li>
          <li>If you experience gambling-related issues, contact GOLD365 24/7 Support.</li>
        </ul>
        <div className="warning-box">
          <p>
            <i className="fas fa-heart"></i>{" "}
            <strong>Play Responsibly:</strong> Gambling can be addictive. Please
            play responsibly and know your limits. If you need help, contact our
            support team 24/7.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "8. Links to Third-Party Websites",
    content: (
      <p>
        The website may contain links to third-party websites. GOLD365 is not
        responsible for the content, policies, or practices of external sites.
        Accessing third-party links is done at the user&apos;s own risk.
      </p>
    ),
  },
  {
    title: "9. Limitation of Liability",
    content: (
      <p>
        GOLD365 shall not be liable for any financial losses, betting outcomes,
        damages, or consequences arising from the use of the platform. All
        participation is at the user&apos;s own risk.
      </p>
    ),
  },
  {
    title: "10. Legal Disclaimer",
    content: (
      <>
        <p>
          GOLD365 operates as an offshore online platform providing sports
          exchange and gaming-related services under international licensing
          jurisdictions. The services offered on this website are intended for
          users who are legally permitted to participate in such activities
          under the laws applicable in their respective regions.
        </p>
        <p>
          Online betting and gaming laws in India are not uniform and may vary
          from state to state. It is the sole responsibility of users to ensure
          that accessing, using, or participating in any services available on
          this platform complies with the laws and regulations of their local
          jurisdiction. GOLD365 does not encourage or promote participation in
          any activity that is prohibited by law.
        </p>
        <p>
          <strong>Users accessing this website do so at their own discretion and risk.</strong>{" "}
          GOLD365 shall not be held liable for any legal consequences arising
          from the use of this website or its services in regions where such
          activities are restricted or prohibited.
        </p>
        <p>
          By using this website, you acknowledge that you have read, understood,
          and agreed to this disclaimer and accept full responsibility for
          ensuring compliance with applicable laws.
        </p>
      </>
    ),
  },
  {
    title: "11. Governing Law",
    content: (
      <p>
        These Terms and Conditions are governed by the laws of India. Any
        disputes shall be subject to the exclusive jurisdiction of courts under
        the Government of India.
      </p>
    ),
  },
  {
    title: "12. Termination",
    content: (
      <p>
        GOLD365 reserves the right to suspend or terminate access without prior
        notice for violations of these Terms. Users will be notified via
        registered contact details. Appeals may be submitted to customer support
        within 7 days of termination and will be reviewed within a reasonable
        timeframe.
      </p>
    ),
  },
  {
    title: "13. Modification of Policies",
    content: (
      <p>
        GOLD365 may update these terms, policies, and guidelines at any time.
        Users are responsible for reviewing the latest version to remain
        informed.
      </p>
    ),
  },
  {
    title: "14. Contact Us",
    content: (
      <>
        <p>If you have any questions regarding these Terms and Conditions, please contact us:</p>
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

export default function TermsAndConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="policy-hero-section">
        <div className="policy-hero-content">
          <h1 className="policy-hero-title">Terms and Conditions</h1>
          <p className="policy-hero-subtitle">
            Welcome to GOLD365! By accessing or using our website located at
            www.gold365.com, you agree to be bound by these Terms and
            Conditions.
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
            <PolicySections sections={termsSections} />
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
