import Link from "next/link";
import Image from "next/image";

const WHATSAPP_LINK = "https://tinyurl.com/r32dj69c";
const TINYURL_LINK = "https://tinyurl.com/r32dj69c";
const GET_ID_LINK = "https://tinyurl.com/r32dj69c";
const RESPONSIBLE_GAMING = "https://responsiblegambling.org/";
const PROHIBITED_TERRITORIES = "https://cloud.google.com/maps-platform/terms/maps-prohibited-territories";

export default function Footer() {
  return (
    <footer>
      <div className="footer-notice">
        <div className="container">
          <div className="notice-content">
            <div className="notice-logo">
              <Image src="/images/gold365-logo.png" alt="Gold365 Logo" width={140} height={55} />
            </div>
            <div className="notice-text">
              <p>
                <strong>GOLD365</strong> is a trusted online exchange platform.
                Users are advised to only register through the official website
                and use authorized payment channels. We ensure secure
                transactions and 24/7{" "}
                <Link href="/contact-us">customer support</Link> for all users.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main-content">
        <div className="container">
          <div className="footer-columns">

            <div className="footer-column about">
              <h3>About Gold365</h3>
              <p>
                Gold365 is India&apos;s premier online sports gaming and exchange
                platform. We offer a secure, exciting, and user-friendly
                experience for sports predictions, cricket betting, casino games,
                and more. Join thousands of players who trust us for fair play
                and instant payouts.
              </p>
              <div className="social-links">
                <a href={TINYURL_LINK} target="_blank" rel="noopener noreferrer" aria-label="Quora"><i className="fab fa-quora"></i></a>
                <a href={TINYURL_LINK} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href={TINYURL_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href={TINYURL_LINK} target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
                <a href={TINYURL_LINK} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>

            <div className="footer-column quick-links">
              <h3>Quick Links</h3>
              <ul className="footer-links-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li><a href={GET_ID_LINK} target="_blank" rel="noopener noreferrer">Login</a></li>
                <li><a href={GET_ID_LINK} target="_blank" rel="noopener noreferrer">Sign Up</a></li>
                <li><a href={GET_ID_LINK} target="_blank" rel="noopener noreferrer">Get ID</a></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>

            <div className="footer-column legal">
              <h3>Legal</h3>
              <ul className="footer-links-list">
                <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><a href={RESPONSIBLE_GAMING} target="_blank" rel="noopener noreferrer">Responsible Gaming</a></li>
                <li><a href={PROHIBITED_TERRITORIES} target="_blank" rel="noopener noreferrer">Prohibited Territories</a></li>
                <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Game Care</a></li>
              </ul>
            </div>

            <div className="footer-column support">
              <h3>Support</h3>
              <ul className="footer-links-list">
                <li><Link href="/contact-us">Contact Support</Link></li>
                <li><a href="mailto:support@gold365online.com">support@gold365online.com</a></li>
                <li><a href={GET_ID_LINK} target="_blank" rel="noopener noreferrer">Get ID Now</a></li>
                <li><a href={TINYURL_LINK} target="_blank" rel="noopener noreferrer">Help Center</a></li>
                <li><a href={TINYURL_LINK} target="_blank" rel="noopener noreferrer">Payment Methods</a></li>
                <li><a href={TINYURL_LINK} target="_blank" rel="noopener noreferrer">How to Play</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-keywords-block">
        <div className="container">
          <p>
            Gold365 | Goldbet365 | Gold365 Com | Gold365 Com Login | gold365.id | gold365.biz | gold365.green | gold365 green login | gold365.green login | Gold 365 | Gold bet 365 | gold365 link | gold365 website | gold365 online | gold365 live | gold365 phone number | Http Gold365 | Http M Gold 365 | Https M Gold 365 | M Gold365 | My Gold365 Game ID | Gold Bet 365 | Gold365 | Gold 365 | Gold365 App | Gold365 Login | M Gold365 Login | gold 365 club | www gold365 com login | gold365.green login | https gold365.win green | gold365 green login | www gold365 win login | gold365.club login | gold365 | welcome to gold365 | www gold365 com | Gold365 india | Gold365 Review | gold365.biz | gold365.green login | gold365.com login | goldbet365 | gold 365 com login | gold 365 login | goldbet 365.com | goldbett365 | gold365 आईडी लॉगिन | gold365.club | gold365 login | gold365 link login | gold 365.club | gold365.win login
          </p>
        </div>
      </div>

      <div className="footer-responsible-gaming">
        <div className="container">
          <div className="responsible-gaming-content">
            <h4>Play Responsibly</h4>
            <div className="responsible-links">
              <a href="https://responsiblegambling.org/" target="_blank" rel="noopener noreferrer">Responsible Gaming</a>
              <a href="https://cloud.google.com/maps-platform/terms/maps-prohibited-territories" target="_blank" rel="noopener noreferrer">Prohibited Territories</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Game Care</a>
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer">BeGambleAware</a>
             
            </div>
          </div>
        </div>
      </div>

      <div className="disclaimer">
        <div className="container">
          <div className="disclaimer-content">
            <p>
              <strong>Disclaimer:</strong> Gold365 operates under offshore
              licensing and provides online sports exchange and gaming services.
              Laws related to online betting and gaming vary by state in India.
              Users are responsible for ensuring compliance with their local laws
              before accessing or using this website. Participation is at the
              user&apos;s own discretion and risk.{" "}
              <Link href="/terms-and-conditions">Read our Terms and Conditions</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-address">
              <i className="fas fa-map-marker-alt"></i>
              <span>2nd floor - 31 Ranipool, Gangtok, Sikkim - 737135</span>
            </p>
            <p className="copyright">
              © 2024 Gold365. All rights reserved. This site is protected by
              reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
            <div className="footer-logo-bottom">
              <a href={GET_ID_LINK} target="_blank" rel="noopener noreferrer" aria-label="Get Gold365 ID">
                <Image src="/images/gold365-logo.png" alt="Gold365 footer logo" width={100} height={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
