"use client";
import { useEffect } from "react";
export default function GamesSlider() {
  useEffect(() => {
    // Wait for Swiper to be available from CDN script
    const initSwiper = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        new (window as any).Swiper(".swiper", {
          slidesPerView: 1,
          spaceBetween: 25,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          },
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          loop: true,
        });
      } else {
        setTimeout(initSwiper, 300);
      }
    };
    initSwiper();
  }, []);
  const slides = [
    {
      image: "/images/cricket-prediction.png",
      title: "Cricket Predictions",
      description:
        "Special focus on IPL with real-time odds and market predictions. Bet on your favorite teams and players.",
    },
    {
      image: "/images/football-predictions.png",
      title: "Football Predictions",
      description:
        "Major leagues and tournaments with extensive betting markets. From Premier League to Champions League.",
    },
    {
      image: "/images/casino-games.png",
      title: "Casino Games",
      description:
        "Teen Patti, Roulette, BlackJack, Slots and many more exciting games. Experience the thrill of the casino.",
    },
    {
      image: "/images/tennis-kabaddi.png",
      title: "Tennis & Kabaddi",
      description:
        "Wide range of sports predictions with real-time updates. Bet on matches as they happen.",
    },
  ];
  return (
    <section className="games-slider" id="games">
      <div className="container">
        <h2 className="section-title">Games &amp; Predictions</h2>
        <div className="swiper">
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div className="swiper-slide" key={index}>
                <div
                  style={{ display: "block", textDecoration: "none", color: "inherit" }}
                >
                  <div
                    className="slide-image"
                    style={{ backgroundImage: `url('${slide.image}')` }}
                  />
                  <div className="slide-content">
                    <h4>{slide.title}</h4>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}