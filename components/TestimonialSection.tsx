"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    text: "\"I've tried multiple gaming platforms, but GOLD365 stands out with its seamless interface and quick withdrawals. The cricket predictions are spot-on, especially during IPL season. Made my first ₹50,000 within a month!\"",
    name: "Rahul Sharma.,Mumbai",
    role: "Cricket Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "\"As someone who values security, I was hesitant about online gaming. But GOLD365's encryption and UPI payments made me feel safe. The 24/7 customer support is fantastic - they resolved my query in minutes!\"",
    name: "Priya Patel.,Delhi",
    role: "Casual Gamer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "\"No app download needed! I love that I can access GOLD365 directly from my browser. The welcome bonus was generous, and the referral program helped me earn extra while playing with friends.\"",
    name: "Amit Kumar.,amritsar",
    role: "Football Strategist",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    text: "\"The real-time odds and predictions are incredibly accurate. I've been using GOLD365 for football betting and the interface makes it so easy to track live matches. Withdrawals via UPI are lightning fast!\"",
    name: "Vikram Singh",
    role: "Sports Analyst",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const ratingBars = [
  { label: "5★", width: 85, count: "85%" },
  { label: "4★", width: 12, count: "12%" },
  { label: "3★", width: 2, count: "2%" },
  { label: "2★", width: 0.5, count: "1%" },
  { label: "1★", width: 0.5, count: "1%" },
];

export default function TestimonialSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate testimonial cards on scroll
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              (entry.target as HTMLElement).classList.add("visible");
            }, index * 200);
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    // Animate rating bars
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLElement;
            const width = bar.getAttribute("data-width");
            if (width) {
              setTimeout(() => {
                bar.style.width = width + "%";
              }, 300);
            }
            barObserver.unobserve(bar);
          }
        });
      },
      { threshold: 0.5 }
    );

    barsRef.current.forEach((bar) => {
      if (bar) barObserver.observe(bar);
    });

    return () => {
      cardObserver.disconnect();
      barObserver.disconnect();
    };
  }, []);

  return (
    <section className="gold365-testimonial-section" id="testimonials">
      <div className="gold365-testimonial-container">
        <h2 className="gold365-testimonial-title">What Our Players Say</h2>
        <p className="gold365-testimonial-subtitle">
          Join thousands of satisfied players who have experienced the thrill of
          winning with GOLD365. Read their stories and see why we&apos;re the
          preferred gaming platform.
        </p>

        {/* Desktop Cards */}
        <div className="gold365-testimonial-cards">
          {testimonials.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="gold365-testimonial-card"
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <div className="gold365-quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="gold365-testimonial-text">{item.text}</p>
              <div className="gold365-user-info">
                <div className="gold365-user-avatar">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={70}
                    height={70}
                    loading="lazy"
                  />
                </div>
                <div className="gold365-user-details">
                  <h4 className="gold365-user-name">{item.name}</h4>
                  <p className="gold365-user-role">{item.role}</p>
                  <div className="gold365-user-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="gold365-star">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <MobileTestimonialSlider testimonials={testimonials} />

        {/* Rating Summary */}
        <div className="gold365-rating-summary">
          <div className="gold365-summary-content">
            <div className="gold365-overall-rating">
              <div className="gold365-rating-number">4.8</div>
              <div className="gold365-rating-stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <div className="gold365-rating-label">Overall Rating</div>
              <div className="gold365-rating-count">Based on 2,847 reviews</div>
            </div>
            <div className="gold365-rating-details">
              {ratingBars.map((bar, index) => (
                <div key={index} className="gold365-rating-bar">
                  <span className="gold365-rating-label-small">{bar.label}</span>
                  <div className="gold365-bar-container">
                    <div
                      className="gold365-bar-fill"
                      data-width={bar.width}
                      ref={(el) => {
                        if (el) barsRef.current[index] = el;
                      }}
                    />
                  </div>
                  <span className="gold365-bar-count">{bar.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="gold365-testimonial-cta">
          <Link href="#login" className="gold365-cta-button">
            <i className="fas fa-play-circle gold365-cta-icon"></i>
            Join Our Winning Community
          </Link>
        </div>
      </div>
    </section>
  );
}

interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatar: string;
}

function MobileTestimonialSlider({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const currentSlideRef = useRef(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth > 768) return;

    const slides = wrapperRef.current?.querySelectorAll(".gold365-swiper-slide");
    const pagination = paginationRef.current;

    if (!slides || !pagination) return;

    const totalSlides = slides.length;
    pagination.innerHTML = "";

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(i));
      pagination.appendChild(dot);
    }

    function goToSlide(index: number) {
      currentSlideRef.current = index;
      slides!.forEach((slide) => {
        (slide as HTMLElement).style.transform = `translateX(${-index * 100}%)`;
      });
      const dots = pagination!.querySelectorAll("span");
      dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    }

    intervalRef.current = setInterval(() => {
      const next = (currentSlideRef.current + 1) % totalSlides;
      goToSlide(next);
    }, 5000);

    goToSlide(0);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="gold365-testimonial-slider">
      <div className="gold365-swiper-container">
        <div className="gold365-swiper-wrapper" ref={wrapperRef}>
          {testimonials.map((item, index) => (
            <div key={index} className="gold365-swiper-slide">
              <div className="gold365-quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="gold365-testimonial-text">{item.text}</p>
              <div className="gold365-user-info">
                <div className="gold365-user-avatar">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </div>
                <div className="gold365-user-details">
                  <h4 className="gold365-user-name">{item.name}</h4>
                  <p className="gold365-user-role">{item.role}</p>
                  <div className="gold365-user-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="gold365-star">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="gold365-swiper-pagination" ref={paginationRef}></div>
      </div>
    </div>
  );
}
