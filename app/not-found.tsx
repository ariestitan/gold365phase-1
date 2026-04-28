import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found-section">
      <div className="not-found-content">
        <div className="not-found-number">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-message">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link href="/" className="not-found-btn">
          <i className="fas fa-home" style={{ marginRight: "8px" }}></i>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
