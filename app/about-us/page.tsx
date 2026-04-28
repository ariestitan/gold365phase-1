import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Gold365 – India's Trusted Sports Gaming Platform",
  description:
    "Gold365 is India's secure online sports gaming platform. Bet on cricket, football & casino games with UPI payments, 256-bit encryption & 24/7 expert support.",
  keywords:
    "about Gold365, Gold365 India, trusted sports gaming, Gold365 cricket betting, Gold365 ID, online gaming platform India, UPI betting India",
  authors: [{ name: "Gold365" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://gold365online.com/about-us",
  },
  openGraph: {
    title: "About Gold365 – India's Trusted Sports Gaming Platform",
    description:
      "Gold365 is India's secure online sports gaming platform. Bet on cricket, football & casino games with UPI payments, 256-bit encryption & 24/7 expert support.",
    url: "https://gold365online.com/about-us",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gold365online.com/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://gold365online.com/about-us" },
  ],
};

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1 className="about-hero-title">ABOUT GOLD365</h1>
          <p className="about-hero-subtitle">Where you can become a legend…</p>
          <p className="about-hero-subtitle">
            Gold365 is an internet paste, sports production, and gaming platform
            that majorly targets players in India. It is considered a one-stop
            destination for production on the most played and popular sports.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content-section">
        <div className="about-container">

          {/* Introduction */}
          <div className="about-text-content">
            <h2>Welcome to the Arena of Champions</h2>
            <p>
              Gold365 is an internet-based sports prediction and gaming platform
              that majorly targets players in India. It is considered a one-stop
              destination for predictions on the most played and popular sports,
              such as cricket, football, tennis, kabaddi, and many more.
            </p>
            <p>
              It also provides you a variety of games like slots, Teen Patti,
              Andar Bahar, blackjack, and crash games and also provides you live
              dealer tables.
            </p>
            <p>
              Gold 365 is predominantly web-based, where a user can access it
              via desktop browser and also via mobile, often using local payment
              methods like UPI and other Indian payment methods.
            </p>
            <p>
              Gold 365 is presented as one of the handiest, most user-friendly
              and accessible, and fun ways for users to engage with gaming and
              sports. Where instead of just watching matches, players can place
              a real-time prediction and potentially win financial-based outcomes.
            </p>
          </div>

          {/* Core Services */}
          <h2 className="about-section-title">CORE SERVICES AND OFFERINGS</h2>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-futbol"></i>
              </div>
              <h3>Sports Prediction</h3>
              <p>
                The first and foremost pillar of Gold365 is sports wagering.
                Includes predictions on major sporting events with real-time
                updates and competitive odds.
              </p>
              <ul>
                <li>Pre-match and live prediction on major cricket events like IPL, World Cup, T20s, ODIs and tests</li>
                <li>Predictions on English Premier League (EPL), La Liga, UEFA competitions, and more</li>
                <li>Place bets on ATP and WTA league matches and kabaddi tournaments in real time</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-dice"></i>
              </div>
              <h3>Games of Chance</h3>
              <p>
                Beyond sports platforms, it offers a wide variety of games of
                chance or games of fate, powered by random number generators
                (RNG) for fair outcomes.
              </p>
              <ul>
                <li>Themed slot machines, crash games like Aviator and JetX, and quick-play titles</li>
                <li>Teen patti, blackjack, and andar bahar with professional interfaces</li>
                <li>Enjoy live dealer games, real-time cards, and live streams for amazing play</li>
              </ul>
            </div>
          </div>

          {/* Bonuses Section */}
          <div className="about-text-content" style={{ marginTop: "60px" }}>
            <h2>Bonuses and Promotions</h2>
            <p>
              Gold365 often markets itself with welcoming ongoing bonuses to
              attract enthusiast players:
            </p>
            <ul>
              <li><strong>Welcome bonus</strong> on first deposit</li>
              <li><strong>Deposit matches</strong> and cashback offers</li>
              <li>
                <strong>Seasonal promotions</strong> during major sporting times
                like IPL and tournament seasons
              </li>
              <li><strong>Referral rewards</strong> for inviting friends</li>
              <li><strong>Loyalty bonus</strong> for regular players</li>
            </ul>
            <p>
              Promotions are a major part of the platform designed to entice
              users and encourage them to play consistently.
            </p>
          </div>

          {/* User Experience & Technology */}
          <h2 className="about-section-title" style={{ marginTop: "80px" }}>
            USER EXPERIENCE AND TECHNOLOGY
          </h2>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-user-plus"></i>
              </div>
              <h3>Easy Onboarding</h3>
              <p>
                Signing up is quick and user-friendly, typically done with a
                mobile number instead of lengthy KYC forms.
              </p>
              <ul>
                <li>OTP-based registration</li>
                <li>No app download required</li>
                <li>Multiple Indian language support (Hindi, English, Bengali, Marathi)</li>
                <li>Browser-based access</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Fast Payments</h3>
              <p>
                One of the most highlighted features of GOLD365 is its fast
                deposit and withdrawal system.
              </p>
              <ul>
                <li>Indian-based payment methods (UPI, Paytm, PhonePe, net banking)</li>
                <li>Near-instant processing</li>
                <li>Minimum deposit threshold around ₹500</li>
                <li>Quick payout times</li>
                <li>Attractive for beginners and experienced players alike</li>
              </ul>
            </div>
          </div>

          {/* Interface & Support */}
          <div className="about-text-content" style={{ marginTop: "60px" }}>
            <h2>Interface and Accessibility</h2>
            <p>
              The user interface is reported to be clean and user-friendly and
              optimized across devices like tablets, desktops, and mobiles. A
              responsive design lets the player switch devices without
              distracting their experience.
            </p>
            <p>
              <strong>No app needed:</strong> The site works in a browser, which
              eventually reduces any technical barrier for many users.
            </p>

            <h2 style={{ marginTop: "40px" }}>Customer Support</h2>
            <p>Gold365 focuses on 24/7 customer support through multiple channels:</p>
            <ul>
              <li><strong>WhatsApp Support:</strong> Instant messaging for quick queries</li>
              <li><strong>Email Support:</strong> Detailed issue resolution</li>
              <li><strong>Live Chat:</strong> Real-time assistance on the platform</li>
              <li><strong>Telegram Support Channel:</strong> Alternative communication channel</li>
            </ul>
            <p>
              The platform provides full-fledged support by handling issues
              ranging from account problems to payment queries.
            </p>
          </div>

          {/* Security Section */}
          <div className="security-section">
            <h2 className="about-section-title">SECURITY AND SAFETY</h2>
            <p style={{ textAlign: "center", fontSize: "20px", marginBottom: "40px", color: "#555" }}>
              Gold365 promotes comprehensive security measures to protect user
              data and transactions
            </p>
            <div className="security-grid">
              <div className="security-item">
                <div className="security-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>256-bit Encryption</h3>
                <p>Military-grade encryption for all transactions and data transmission</p>
              </div>
              <div className="security-item">
                <div className="security-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <h3>Secure Payment Gateway</h3>
                <p>Protected payment processing with trusted Indian payment partners</p>
              </div>
              <div className="security-item">
                <div className="security-icon">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3>Anti-Fraud Systems</h3>
                <p>Advanced protection and anti-cheat systems to ensure fair play</p>
              </div>
              <div className="security-item">
                <div className="security-icon">
                  <i className="fas fa-key"></i>
                </div>
                <h3>Two-Factor Authentication</h3>
                <p>Optional 2FA for enhanced account security</p>
              </div>
            </div>
          </div>

          {/* Regulatory Info */}
          <div className="about-text-content">
            <h2>REALITY AND REGULATORY ISSUES</h2>
            <p>
              One of the most important facts to understand is that online gaming
              remains a complex legal area in India. The platform claims to
              operate with an international gaming license, which is common for
              offshore prediction sites.
            </p>
            <p>
              <strong>Important Note:</strong> Indiaapos;s prediction law is
              primarily at the world and state levels. Make sure if you are
              entering into the platform, you should verify that the prediction
              platform works legally in your state.
            </p>
            <p>
              Gold365 claims secure licensing within the gaming license framework
              and operates with transparency regarding its regulatory compliance.
            </p>
          </div>

          {/* Back to Home */}
          <div className="back-to-home">
            <Link href="/" className="home-btn">
              <i className="fas fa-home"></i> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
