"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className={`main-header${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            <img
              src="/images/gold365-logo.png"
              alt="Gold365 - Official Gold365 ID Login & Online Sports Gaming Platform"
              width="160"
              height="50"
            />
          </Link>

          <button
            className={`mobile-menu-btn${menuOpen ? " active" : ""}`}
            id="mobileMenuBtn"
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          <nav
            className={`nav-links${menuOpen ? " active" : ""}`}
            id="navLinks"
            role="navigation"
          >
            <Link href="/" className={isActive("/") ? "active" : ""}>
              Home
            </Link>
            <Link href="/about-us" className={isActive("/about-us") ? "active" : ""}>
              About Us
            </Link>
            <Link href="/terms-and-conditions" className={isActive("/terms-and-conditions") ? "active" : ""}>
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy-policy" className={isActive("/privacy-policy") ? "active" : ""}>
              Privacy Policy
            </Link>
            <Link href="/contact-us" className={isActive("/contact-us") ? "active" : ""}>
              Contact Us
            </Link>
            <Link href="/blog" className={isActive("/blog") ? "active" : ""}>
              Blog
            </Link>
          </nav>
        </div>
      </div>

      <div
        className={`mobile-menu-overlay${menuOpen ? " active" : ""}`}
        id="mobileMenuOverlay"
        style={{ display: menuOpen ? "block" : "none" }}
        onClick={handleOverlayClick}
      />
    </header>
  );
}
