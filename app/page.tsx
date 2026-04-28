import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";
import GamesSlider from "@/components/GamesSlider";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Gold365: Cricket Betting & Casino | Gold 365 Official",
  description:
    "Play on Gold365 — India's trusted cricket betting & live casino. Fast ₹500 min deposit, instant UPI withdrawals, 24/7 support. Get your Gold365 ID now",
  keywords:
    "Gold365, Gold365 ID, Gold365 login, cricket betting India, online sports gaming, IPL betting, casino games India, UPI betting",
  authors: [{ name: "Gold365" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://gold365online.com/",
  },
  openGraph: {
    title: "Gold365 – Online Cricket Exchange & Sports Prediction India",
    description:
      "Play on Gold365 — India's trusted cricket betting & live casino. Fast ₹500 min deposit, instant UPI withdrawals, 24/7 support. Get your Gold365 ID now",
    url: "https://gold365online.com/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["EntertainmentBusiness", "Organization"],
              "@id": "https://gold365online.com/#organization",
              "name": "Gold365",
              "alternateName": [
                "Gold 365", "365Gold", "Golden 365", "Gold365 Green",
                "Win 365", "Play Gold 365Gold", "Gold365.win",
                "365 Gold", "Gold 365 Online"
              ],
              "url": "https://gold365online.com",
              "foundingDate": "2019",
              "logo": {
                "@type": "ImageObject",
                "url": "https://gold365online.com/images/logo.png",
                "width": 512,
                "height": 512
              },
              "description": "Gold365 is India's trusted online cricket betting and casino gaming platform, operating since 2019 under Curacao e-gaming licence.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "bestRating": "5",
                "ratingCount": "2841",
                "reviewCount": "2841"
              },
              "sameAs": [
                "https://t.me/gold365official",
                "https://www.instagram.com/gold365win/",
                "https://twitter.com/gold365win"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "availableLanguage": ["English", "Hindi"],
                "contactOption": "TollFree"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://gold365online.com/#website",
              "url": "https://gold365online.com",
              "name": "Gold365",
              "alternateName": [
                "Gold 365", "365Gold", "Golden 365",
                "Gold365 Green", "Gold365.win"
              ],
              "description": "Play cricket betting, live casino, Teen Patti & Andar Bahar on Gold365 — India's most trusted online gaming platform.",
              "publisher": { "@id": "https://gold365online.com/#organization" },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://gold365.win/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://gold365online.com/#webpage",
              "url": "https://gold365online.com",
              "name": "Gold365: Cricket Betting & Casino | Gold 365 Official",
              "description": "Play on Gold365 — India's trusted cricket betting & live casino. Fast Rs.500 min deposit, instant UPI withdrawals, 24/7 support. Get your Gold365 ID now.",
              "isPartOf": { "@id": "https://gold365online.com/#website" },
              "about": { "@id": "https://gold365online.com/#organization" },
              "keywords": "gold365, gold 365, 365gold, golden 365, gold365.win, gold365 green, play gold 365gold, win 365, gold365 id, cricket betting india, online casino india, live teen patti, andar bahar online, kabaddi betting, IPL betting",
              "inLanguage": "en-IN",
              "dateModified": "2026-01-01"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I get my Gold365 ID?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Visit gold365online.com, click Register, enter your name and mobile number, verify via OTP. Your Gold365 ID is created instantly and is free."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Gold365 legal in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Online betting sits in a legal grey area in India. Gold365 operates under a Curacao e-gaming licence from offshore. Regulations vary by state — always check local laws before registering."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the minimum deposit on Gold365?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The minimum deposit on Gold365 is Rs.500. UPI deposits are credited instantly to your Gold365 wallet."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast are Gold365 withdrawals?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most UPI and bank transfer withdrawals are processed within 30 minutes to a few hours. KYC verification is required for first withdrawals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What sports can I bet on at Gold365?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gold365 covers cricket (IPL, T20 World Cup, Tests, ODIs), football (EPL, ISL, Champions League), kabaddi (Pro Kabaddi League), tennis, basketball, and horse racing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are Gold365, 365Gold, Golden 365 and Gold365 Green the same platform?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Gold365, 365Gold, Golden 365, Gold365 Green, Win 365, and Play Gold 365Gold all refer to the same platform at gold365online.com."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Gold365 have a mobile app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. A mobile web platform and downloadable Android APK are available at gold365 app. iOS users can access the full platform via mobile browser."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What casino games are on Gold365?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gold365 live casino includes Live Teen Patti (Classic, Muflis, AK47, One-Day), Andar Bahar, Rummy, Roulette, Baccarat, and Blackjack — all with live dealers 24/7."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://gold365online.com/"
                }
              ]
            }
          ])
        }}
      />

      {/* Login Section */}
      <section className="login-section" id="login">
        <div className="container">
          <div className="login-container">
            <div className="login-box">
              <div className="at-login">Login</div>
              <LoginForm />
              <div className="recaptcha-notice">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="content-section">

        {/* Hero Section */}
        <section className="hero-section" id="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>
                  Gold365 — Get Your ID,{" "}
                  <span>– Place Your Bet, Win Today</span>.
                </h1>
                <p>
                  If you've been searching for Gold365 — whether as Gold 365, 365Gold, Golden 365, or any other name the community calls it, you're in exactly the right place. Gold365 is India's trusted online cricket betting and casino platform, built for Indian players who want fast action, honest odds, and withdrawals that actually arrive.
                </p>
                <p>
                  Thousands of players across India log into Gold365 every single day. They come for the live cricket markets during IPL and World Cup season. They stay for the seamless Teen Patti tables, the football betting, and the instant UPI payouts. And they keep coming back because this platform has been running reliably since 2019, long enough to have earned trust the hard way.
                </p>
                <p>
                  Getting started is simple: create your Gold365 ID in under two minutes, fund your account from as little as ₹500, and you're inside one of India's most complete online betting experiences. This page covers everything — how to get your ID, what you can bet on, how payments work, and why Gold365 stands apart from the rest.
                </p>
                <p className="highlight">
                  ⚠️ Gold365 is intended for players aged 18 and above. Online betting operates in a legal grey area in India — please check your state's local laws before registering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* All-in-One Gaming Platform */}
        <section className="feature-image-text" id="features">
          <div className="image-content">
            <Image
              src="/images/gold365-01.webp"
              alt="All-in-One Gaming Platform"
              width={600}
              height={400}
            />
          </div>
          <div className="text-content">
            <h2>What Is Gold365? India's Premier Online Betting Platform</h2>
            <p>
              Gold365 (also widely known as 365Gold, Golden 365, Gold 365, Gold365 Green, and Win 365 across community forums and Telegram groups) is an established offshore betting and casino platform specifically designed for the Indian market. It has been operating since 2019 under a Curacao e-gaming licence and serves hundreds of thousands of Indian players across cricket betting, live casino, card games, and more.
            </p>
            <p>
              What sets Gold365 apart isn't just the game selection — it's the infrastructure. Indian payments via UPI, PhonePe, and Paytm. INR-denominated wallets. Hindi and English support. Withdrawal speeds that match what Indian players actually need. These aren't afterthoughts on Gold365 — they're core to how the platform was designed from day one.
            </p>
          </div>
        </section>

        {/* Designed for Indian Users */}
        <section className="feature-image-text reverse">
          <div className="image-content">
            <Image
              src="/images/gold365-02.webp"
              alt="Indian User Experience"
              width={600}
              height={400}
            />
          </div>
          <div className="text-content">
            <h2>Gold365 operates on three non-negotiable principles:</h2>
            <p>
              <strong>Speed</strong> — From your ₹500 minimum deposit to the moment you withdraw, everything on Gold365 is built for speed. No 3-day waiting periods. No unexplained holds on your winnings.
            </p>
            <p>
              <strong>Fairness</strong> — Every market on Gold365 uses real-time data and transparent odds. You see exactly what you're betting on and what you stand to win before you confirm.
            </p>
            <p>
              <strong>Trust</strong> — Gold365 has been in the Indian market since 2019. Thousands of players have come back season after season. That kind of loyalty doesn't happen on platforms that don't deliver.
            </p>
            <p>
              Whether you've arrived searching for "gold 365," "365gold," "play gold 365gold," "win 365," or "gold365.win" — you're now at the home base.
            </p>
          </div>
        </section>

        {/* 3rd Section */}
        <section className="feature-image-text" id="features">
          <div className="image-content">
            <Image
              src="/images/gold365-01.webp"
              alt="All-in-One Gaming Platform"
              width={600}
              height={400}
            />
          </div>
          <div className="text-content">
            <h2>Get Your Gold365 ID — Your Key to the Platform</h2>
            <p>
              In the Indian online betting world, your betting account is commonly called your "ID" — and your Gold365 ID is what unlocks the entire platform. With your Gold365 ID, you can access every cricket market, live casino table, card game, and sports betting feature available on gold 365.
            </p>
            <p>
              Creating your Gold365 ID takes under two minutes and is completely free. Here's how it works:
            </p>
            <ul>
              <li>1. Visit gold 365 and click on the Register or Sign Up button</li>
              <li>2. Enter your name, mobile number, and set a secure password.</li>
              <li>3. Verify your mobile number via OTP — one text message, one click.</li>
              <li>4. Your Gold365 ID is now active. You're in.</li>
              <li>5. Make your first deposit from as little as ₹500 via UPI, and claim your welcome bonus.</li>
            </ul>
            <p>
              Once your Gold365 ID is set up, it becomes your single login for everything: cricket betting, IPL markets, Teen Patti, Andar Bahar, roulette, slots, and all sports events. You can also access Gold365 via your ID on the mobile app or through Gold365 Green on supported devices.
            </p>
            <p>
              Lost your Gold365 ID login details? Use the Forgot Password option on the login page and recover access via your registered mobile number in seconds.
            </p>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Everything You Can Bet On with Gold365</h2>
            <p className="features-section-paragraph">
              Gold365 is not a one-trick pony. The platform covers cricket, football, kabaddi, tennis, virtual sports, live casino, card games, and slots — all accessible with a single Gold365 ID. <br /> <br />
            </p>
            <h3 className="heading-3">Cricket Betting — The Heartbeat of Gold365</h3>
            <p className="key-features-paragraph">
              Cricket in India isn't just a sport. It's a shared emotion felt by hundreds of millions every match day. Gold365 turns that emotion into action with one of the deepest cricket betting platforms available to Indian players.
            </p>
            <div className="features-grid">
              <div className="feature-card">
                <h3>
                  <i className="fas fa-mobile-alt"></i> Tournaments & Formats Covered:
                </h3>
                <ul>
                  <li>
                    IPL (Indian Premier League) — Gold365's biggest season. Live ball-by-ball betting, match winner, top batsman, top bowler, Power Play scores, six markets, and total fours. Dozens of markets per match.
                  </li>
                  <li>
                    T20 World Cup & Asia Cup — Full international T20 coverage with pre-match and in-play markets.
                  </li>
                  <li>
                    Test Matches & ODIs — Session betting, day result, innings totals, and long-form wagering for the purist.
                  </li>
                  <li>
                    Domestic Leagues — BBL (Australia), PSL (Pakistan), CPL (Caribbean), The Hundred (England), ISL — all covered.
                  </li>
                </ul>
              </div>
              <div className="feature-card">
                <h3>
                  <i className="fas fa-sign-in-alt"></i> Cricket Betting Markets on Gold365:
                </h3>
                <ul>
                  <li>Match Winner — Bet on which team wins the match outright.</li>
                  <li>Toss Betting — One of India's most popular markets. Predict the toss result before the match starts.</li>
                  <li>Over/Under Runs — Bet whether the total runs in an over or session will be over or under a given line.</li>
                  <li>Session Betting — Predict the run total for a specific batting session (1st 6 overs, 10 overs, etc.).</li>
                  <li>Top Batsman / Top Bowler — Which player will score the most or take the most wickets?</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Rich Text Content */}
        <div className="container">
          <div className="rich-text-content">
            <h3>Football Betting on Gold365</h3>
            <p>
              Football is the second-biggest betting sport on Gold365 after cricket. The platform covers all major global leagues and international competitions:
            </p>
            <ul>
              <li>English Premier League (EPL) — All 380 matches per season with full match and live betting markets.</li>
              <li>Indian Super League (ISL) — Follow Indian club football with full market coverage.</li>
              <li>UEFA Champions League — Cup winner bets and in-play markets for Europe's biggest club competition.</li>
              <li>La Liga, Serie A, Bundesliga, Ligue 1 — Major European leagues fully covered.</li>
              <li>FIFA World Cup & AFC Asian Cup — International tournament betting with extended markets.</li>
            </ul>

            <h3>Kabaddi & Other Sports</h3>
            <p>
              Gold365 covers kabaddi — a sport with a huge and growing betting fanbase in India. Pro Kabaddi League matches are listed with match winner and points-based markets. The platform also covers:
            </p>
            <ul>
              <li>Tennis — Grand Slams (Wimbledon, US Open, Australian Open, French Open), ATP & WTA tours, set betting and match winner.</li>
              <li>Basketball (NBA) — Points spreads and match totals.</li>
              <li>Horse Racing — Gold365 betting ID includes horse racing markets for international tracks.</li>
            </ul>

            <h3>Virtual Sports</h3>
            <p>
              Between live matches, Gold365 offers virtual cricket and virtual football through its exchange platform. These are simulated events that run 24/7, with results determined by certified RNG algorithms. Virtual cricket matches complete in minutes, making them ideal for players who want fast-paced action outside live match schedules.
            </p>
          </div>
        </div>

        {/* Live Casino */}
        <section className="feature-image-text">
          <div className="image-content">
            <Image
              src="/images/gold365-03.webp"
              alt="Customer Support"
              width={600}
              height={400}
            />
          </div>
          <div className="text-content">
            <h2>Live Casino — Real Tables, Real Dealers, Real Money</h2>
            <p>
              Gold365's live casino brings HD-streamed professional dealers directly to your screen. Available 24 hours a day, 7 days a week.
            </p>
            <h3>Most Popular Live Casino Games on Gold365:</h3>
            <ul>
              <li>Live Teen Patti — India's favourite card game with multiple variants: Classic, Muflis, AK47, Joker, and One-Day Teen Patti.</li>
              <li>Live Andar Bahar — Fast-paced, intuitive, and wildly popular. Simple rules, real stakes.</li>
              <li>Live Rummy — The classic Indian card game with real dealers and real opponents.</li>
              <li>Live Roulette — European and Lightning Roulette variants. Spin the wheel alongside your cricket action.</li>
              <li>Live Baccarat — Multiple tables at different stake levels. Strategy-friendly and elegant.</li>
              <li>Live Blackjack — Beat the dealer and win. Gold365's blackjack tables carry strong RTP percentages.</li>
            </ul>
            <h3 style={{ marginTop: "30px", color: "#2b0057" }}>
              Slots & Virtual Games
            </h3>
            <ul>
              <li>
                Hundreds of titles from top game providers — 3-reel classics, 5-reel video slots with bonus rounds, cascading reels, and progressive jackpots. Perfect for downtime between live matches.
              </li>
            </ul>
            <h3 style={{ marginTop: "30px", color: "#2b0057" }}>
              Betting Exchange
            </h3>
            <ul>
              <li>
                For advanced players, Gold365's betting exchange lets you bet against other players rather than against the house. Back your selection or lay against it — exchange betting typically offers better odds and more flexibility than traditional fixed-odds markets.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5 - Why Gold365 */}
        <div className="container">
          <div className="rich-text-content">
            <h2>Why Gold365 Is India's #1 Trusted Betting Platform</h2>
            <p>
              Ask any player who's been on Gold365 for more than one IPL season why they stay — the answer is almost always the same: reliability. Here's what the Gold365 community consistently highlights:
            </p>
            <h3>Lightning-Fast Withdrawals in INR</h3>
            <p>
              Your winnings are yours. Gold365 processes withdrawal requests in minutes for UPI and bank transfers. Whether it's ₹1,000 or ₹1,00,000 — withdrawals go through the same fast channel. No arbitrary 48-hour windows. No unexplained pending states. On Gold365, your money moves when you ask it to.
            </p>
            <h3>Minimum Deposit: Just ₹500</h3>
            <p>
              You don't need a large bankroll to start on Gold365. The platform accepts deposits from as little as ₹500, making it accessible whether you're testing the platform for the first time or you're a high-volume player adding funds mid-match.
            </p>
            <h3>Competitive, Real-Time Odds</h3>
            <p>
              Gold365 operates tight spreads across cricket, football, kabaddi, and all casino games. Better odds mean more of your money stays with you over time. During IPL and World Cup season, Gold365 also offers odds boosts and special markets that you won't find on generic platforms.
            </p>
            <h3>All Indian Payment Methods Supported</h3>
            <p>
              Gold365 is built for India. Accepted deposit and withdrawal methods include: UPI (Google Pay, PhonePe, Paytm, BHIM), IMPS, NEFT, Net Banking from all major Indian banks, Amazon Pay, and cryptocurrency for players who prefer that route. Deposits are near-instant across all supported methods. You can access your account and manage payments anytime at gold365.win.
            </p>
            <h3>Mobile-First Platform</h3>
            <p>
              The majority of Gold365 players are on their phones during match time — and the platform is optimised for that reality. Fast loading on 4G, clean mobile layout, one-tap bet placement, and full live casino streaming from your Android or iOS device. A dedicated Android APK is available at gold365online.com/app for players who prefer a native app experience.
            </p>
            <h3>24/7 Customer Support via WhatsApp</h3>
            <p>
              Gold365's support team is reachable around the clock via live chat on the site and WhatsApp. Real people, fast responses. Whether it's a deposit delay, a query about your Gold365 ID, or a general question — the team is there.
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <section className="feature-image-text reverse">
          <div className="image-content">
            <Image
              src="/images/gold365-02.webp"
              alt="Indian User Experience"
              width={600}
              height={400}
            />
          </div>
          <div className="text-content">
            <h2>Gold365 Register & Login: From Sign-Up to First Bet in 10 Minutes</h2>
            <p>
              Getting your Gold365 ID and logging in for the first time is straightforward. Here's the full process:
            </p>
            <ul>
              <li>Visit gold365online.com — Open the official Gold365 website on your browser or download the app from gold365 app</li>
              <li>Click Register / Sign Up — Fill in your name, mobile number, and password. This takes under 2 minutes.</li>
              <li>OTP Verification — You'll receive a one-time password (OTP) on your mobile. Enter it to verify and activate your Gold365 ID.</li>
              <li>First Deposit — Fund your wallet via UPI or any other supported method. Minimum deposit is ₹500. Funds appear instantly.</li>
              <li>Claim Welcome Bonus — New Gold365 IDs are eligible for a welcome bonus. Check gold365 promotions before depositing to opt in.</li>
              <li>Place Your First Bet — Head to cricket, football, live casino, or any other section. Your dashboard shows your balance, active bets, and history in one clean view.</li>
            </ul>
            <h3>Gold365 Login for Returning Players:</h3>
            <p>
              Returning to Gold365? Go to gold 365, click Log In, enter your registered mobile number and password. Two-factor authentication (2FA) is available for added security. Forgot your password? Use the Forgot Password link to recover via OTP in under a minute.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="feature-image-text" id="features">
          <div className="image-content">
            <Image
              src="/images/gold365-01.webp"
              alt="All-in-One Gaming Platform"
              width={600}
              height={400}
            />
          </div>
          <div className="text-content">
            <h2>Is Gold365 Safe? Security, Licensing, and Your Protection</h2>
            <p>
              Gold365 operates under a Curacao e-gaming licence — one of the most established offshore licences available to international gaming platforms. This licence requires the platform to maintain fair game standards, secure payment processing, and responsible gaming provisions.
            </p>
            <p>On the technical side, Gold365 protects every player with:</p>
            <ul>
              <li>256-bit SSL Encryption — Every data transmission between your device and Gold365 servers is encrypted end-to-end.</li>
              <li>PCI-DSS Compliant Payment Processing — Your financial data is handled under international payment security standards.</li>
              <li>Two-Factor Authentication (2FA) — Enable this in your account settings for extra login protection.</li>
              <li>KYC Verification — Know Your Customer checks protect both players and the platform from fraud and identity misuse.</li>
              <li>Session Timeout Controls — Automatic session expiry after inactivity keeps your account safe if you step away.</li>
              <li>Suspicious Login Alerts — Real-time notifications if an unusual login attempt is detected on your Gold365 ID.</li>
            </ul>
            <p>
              Gold365 undergoes regular third-party security audits and updates its infrastructure continuously. Your protection isn't an afterthought on this platform — it's built into every layer of how the site operates.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <div className="about-text-content">
          <h2>Is Gold365 Legal in India? Understanding the Landscape</h2>
          <p>This is a question every new player should ask — and you deserve a straight answer.</p>
          <p>
            Online sports betting in India sits in a legal grey area. There is no central federal law that explicitly bans online betting on offshore platforms. However, individual states have varying regulations. States like Goa and Sikkim have licensed certain forms of gaming, while states like Telangana and Andhra Pradesh have stricter local laws prohibiting online gambling.
          </p>
          <p>
            Gold365 operates as an offshore platform — registered and licensed in Curacao, outside Indian jurisdiction. Thousands of Indian players use such platforms daily. However, since the legal landscape varies by state and continues to evolve, Gold365 strongly recommends that every player:
          </p>
          <ul>
            <li>Check the specific gambling and gaming laws applicable in their home state before registering.</li>
            <li>Consult a qualified legal professional if unsure about local regulations.</li>
            <li>Use the responsible gaming tools provided on the platform to stay in control.</li>
          </ul>
          <p>
            This section is provided for informational purposes only and does not constitute legal advice. If you are unsure about the regulations in your state, consult a qualified legal professional before registering on any online betting platform.
          </p>
        </div>

        {/* Section 9 */}
        <div className="about-text-content">
          <h2>Gold365 Bonuses: Real Value, Clear Terms</h2>
          <p>
            Bonuses in online gaming can be misleading — complex wagering requirements, impossible unlock conditions, expiry dates buried in fine print. Gold365 takes a different approach: straightforward bonuses with terms that make sense for real players.
          </p>
          <ul>
            <li>Welcome Deposit Bonus — A bonus on your first deposit credited to your Gold365 ID. Check gold365 promotions for the current offer before depositing.</li>
            <li>Weekly Reload Bonus — Regular players receive a weekly reload to keep the action going. More consistent play = better reload offers.</li>
            <li>Refer & Earn — Share your Gold365 referral link with a friend. When they register and deposit, you earn a bonus directly to your wallet.</li>
            <li>IPL & Tournament Specials — Every major cricket season brings Gold365-exclusive offers: free bets, cashback, enhanced odds, and special markets.</li>
            <li>VIP Program — High-volume players get access to the Gold365 VIP tier: dedicated account manager, faster withdrawal lanes, exclusive odds, and personalised offers.</li>
          </ul>
          <p>
            Always check current terms at gold365online.com/promotions — offers are updated regularly. You can also visit gold365.win directly to see the latest active promotions before depositing. 18+ only. Terms and wagering requirements apply.
          </p>
        </div>

        {/* Games Slider */}
        <GamesSlider />

        {/* How it Works */}
        <section className="how-it-works-section" id="how-it-works">
          <div className="container">
            <h2 className="section-title">Smart Betting Tips for Gold365 Players</h2>
            <div className="title-bar"></div>
            <p className="section-intro">
              Gold365 is a platform that rewards knowledge, discipline, and smart bankroll management. Here are five principles that separate long-term winning players from casual ones:
            </p>
            <div className="how-it-works">
              <div className="step">
                <div className="step-number">1</div>
                <p><strong>Bet What You Know</strong>If cricket is your sport, stick to cricket markets. The more you know about a sport, a team's form, and pitch conditions, the better your edge. Generic football bets with no research are just guesswork.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <p><strong>Use Live Betting Smartly</strong>Gold365's in-play market is powerful but fast-moving. Watch the first 3–4 overs before placing a live bet. You'll have context the pre-match bettor didn't have.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <p><strong>Set a Session Budget</strong>Decide before you log in how much you're comfortable losing in that session. Stick to it. Gold365's deposit limit tools make this easy to enforce from your account settings.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <p><strong>Avoid Chasing Losses</strong>The most common mistake on any betting platform. A bad over does not predict the next over. Each bet is independent. Take a break, recalibrate, come back fresh.</p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <p><strong>Take Advantage of Exchange Odds</strong>For cricket especially, Gold365's exchange often has better odds than the standard sportsbook. If you're placing larger bets, compare both before confirming.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Play Smart: Gold365's Commitment to Responsible Gaming</h2>
              <p>
                Online gaming is entertainment. For the vast majority of players on Gold365, it stays that way — an exciting extension of cricket fandom and a way to engage with the matches they love. But we also know that for some players, gaming can become a problem.
              </p>
              <p>Gold365 provides practical tools to help every player stay in control:</p>
              <div className="tools-grid">
                <div className="tool-card">
                  <strong>Daily, Weekly &amp; Monthly Deposit Limits</strong>
                  <span>Set your own limits from account settings. Once set, they cannot be immediately increased — a cooling-off period is built in by design.</span>
                </div>
                <div className="tool-card">
                  <strong>Reality Checks</strong>
                  <span>Optional reminders showing how long you've been playing and your total session wager.</span>
                </div>
                <div className="tool-card">
                  <strong>Self-Exclusion</strong>
                  <span>Block access to your Gold365 ID for 30 days, 90 days, 6 months, or permanently. Contact support to activate.</span>
                </div>
                <div className="tool-card">
                  <strong>18+ Only</strong>
                  <span>Gold365 is strictly for adults. Age verification is part of the KYC process.</span>
                </div>
                <div className="tool-card full">
                  <strong>Support Resources</strong>
                  <span>Players in India seeking help with gambling-related concerns can contact iCall (iCall.tiss.edu) or the Vandrevala Foundation Helpline (1860-2662-345) for free, confidential support.</span>
                </div>
              </div>
              <p>
                If your Gold365 usage feels out of control, reach out to the support team. You'll be handled with sensitivity, no judgement, and no questions about your account standing.
              </p>
              <Link href="#login" className="cta-button">Start Playing Now</Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialSection />

        {/* FAQ */}
        <FaqSection />
      </div>
    </>
  );
}