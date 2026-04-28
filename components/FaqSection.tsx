"use client";

import { useState } from "react";

const faqs = [
  {
    question: "1. What is Gold365 and how do I access it?",
    answer:
      " Gold365 (also known as 365Gold, and Golden 365) is an online sports betting and live casino platform. It has been operating since 2019 and is designed specifically for Indian players. Visit the website from any browser or download the Android app, register your Gold365 ID for free, and you’re ready to start.",
  },
  {
    question: "2. How do I get my Gold365 ID?",
    answer:
      "Getting your Gold365 ID is free and takes under 2 minutes. Visit gold365online.com, click Register, enter your name and mobile number, and verify via OTP. Your Gold365 ID is your account login, which gives you access to all cricket betting markets, live casino games, sports betting, and more. There is no charge to create your ID.",
  },
  {
    question: "3. Is Gold365 legal in India?",
    answer:
      "Online betting in India sits in a legal grey area. There is no central federal law banning offshore platforms, but individual states have their own regulations. Gold365 operates under a Curacao e-gaming licence from offshore. It is your responsibility to check your home state’s specific laws before registering. Gold365 recommends all players review local regulations and only bet amounts they can comfortably afford.",
  },
  {
    question: "4. Is Gold365 safe and legitimate?",
    answer:
      "Yes. Gold365 is a licensed platform (Curacao e-gaming) with 256-bit SSL encryption on all data transmissions and PCI-DSS compliant payment processing. The platform has been trusted by hundreds of thousands of Indian players since 2019 and is known for fair odds, fast withdrawals, and responsive WhatsApp support.",
  },
  {
    question: "5. What is the minimum deposit on Gold365?",
    answer:
      "The minimum deposit on Gold365 is ₹500. This low entry point makes the platform accessible whether you’re testing it for the first time or you’re an experienced player adding funds quickly before a live match. UPI deposits (Google Pay, PhonePe, Paytm) are credited instantly.",
  },
  {
    question: "6.  How fast are Gold365 withdrawals?",
    answer:
      "Gold365 is well-known for fast withdrawals in the Indian betting community. Most UPI and bank transfer withdrawal requests are processed within 30 minutes to a few hours. First-time withdrawals require KYC verification, after which repeat withdrawals are processed rapidly. There are no arbitrary holding periods on legitimate withdrawals.",
  },

  {
    question: "7.  What deposit methods does Gold365 accept?",
    answer:
      "Gold365 accepts all major Indian payment methods: UPI (Google Pay, PhonePe, Paytm, BHIM), IMPS, NEFT, Net Banking from all leading Indian banks, Amazon Pay, and cryptocurrency for eligible users. UPI deposits are credited instantly to your Gold365 wallet.",
  },

  {
    question: "8.   What cricket matches can I bet on at Gold365?",
    answer:
      "Gold365 covers the full global cricket calendar — IPL, T20 World Cup, Asia Cup, ODI World Cup, ICC Test Championships, and all major domestic T20 leagues (BBL, PSL, CPL, The Hundred). Cricket betting markets include match winner, toss betting, over/under runs, session betting, top batsman, top bowler, and live in-play ball-by-ball markets.",
  },
  {
    question: "9.   Does Gold365 cover football and other sports?",
    answer:
      "Yes. Gold365 covers football (EPL, ISL, Champions League, La Liga, Serie A, Bundesliga), kabaddi (Pro Kabaddi League), tennis (Grand Slams, ATP, WTA), basketball (NBA), and horse racing. Virtual sports including virtual cricket and football are also available 24/7 on the platform.",
  },
  {
    question: "10.   Does Gold365 have a mobile app?",
    answer:
      "Yes. Gold365 offers a fully optimised mobile web platform that works on any smartphone browser without requiring a download. A dedicated Android APK is also available for download at gold365online.com/app. The app supports live betting, casino games, deposits, withdrawals, and account management. An iOS-compatible experience is available through the mobile browser.",
  },
  {
    question: "11.   What casino games are available on Gold365?",
    answer:
      "Gold365’s live casino features Live Teen Patti (Classic, Muflis, AK47, One-Day), Live Andar Bahar, Live Rummy, Live Roulette (European and Lightning), Live Baccarat, and Live Blackjack — all streamed 24/7 with professional dealers. Hundreds of slots and virtual game titles are also available, including progressive jackpots.",
  },
  {
    question: "12.   Are Gold365, 365Gold, and Golden 365 the same platform?",
    answer:
      "Yes. Gold365, 365Gold, Golden 365, Gold 365, Gold365 Green, Win 365, and Play Gold 365Gold all refer to the same platform accessible at gold365online.com. These are different community names and search terms used across Telegram groups, Reddit, and Indian betting forums. The official URL is always gold365online.com.",
  },
  {
    question: "13.   What welcome bonus do new Gold365 players get?",
    answer:
      "Gold365 offers a welcome deposit bonus for all new players on their first deposit. The current offer is listed at gold365online.com/promotions — always check this page before making your first deposit to ensure you opt in. Standard wagering requirements and terms apply. 18+ only.",
  },
  {
    question: "14.  How do I contact Gold365 customer support?",
    answer:
      "Gold365 customer support is available 24/7 via: Live Chat on the website and app (typical response under 5 minutes), WhatsApp support, and email for non-urgent queries. The support team handles Gold365 ID queries, payment issues, bonus questions, responsible gaming requests, and technical issues.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item${activeIndex === index ? " active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
