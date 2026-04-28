import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold365 Blog – Cricket Tips, Match Predictions & Guides",
  description:
    "Get expert cricket predictions, IPL tips, T20 match analysis & sports betting guides on Gold365 Blog. Daily updates on pitch reports, toss & match previews.",
  keywords:
    "Gold365 blog, cricket prediction today, IPL tips 2026, T20 match prediction India, cricket betting tips, pitch report today, toss prediction, Gold365 cricket guides",
  authors: [{ name: "Gold365" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://gold365online.com/blog",
  },
  openGraph: {
    title: "Gold365 Blog – Cricket Tips, Match Predictions & Guides",
    description:
      "Expert cricket predictions, IPL tips, T20 match analysis & sports betting guides on Gold365 Blog.",
    url: "https://gold365online.com/blog",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gold365online.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://gold365online.com/blog" },
  ],
};

const blogPosts = [
  {
    slug: "icc-t20-world-cup-2026-today-match-prediction",
    image: "/images/blog1.png",
    fallbackEmoji: "🏏",
    tag: "Cricket",
    title: "ICC T20 World Cup 2026 Today Match Prediction",
    excerpt:
      "Get today's ICC T20 World Cup 2026 match prediction. Detailed analysis covering pitch report, toss prediction, key players, head to head record and fantasy cricket picks for today's big match.",
  },
  {
    slug: "india-vs-west-indies-toss-prediction-pitch-report",
    image: "/images/blog2.png",
    fallbackEmoji: "🏆",
    tag: "Cricket",
    title: "India vs West Indies Toss Prediction and Pitch Report",
    excerpt:
      "Complete India vs West Indies match preview with toss prediction, detailed pitch report, weather conditions, key players to watch, head to head stats and our final match winner prediction.",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <div className="blog-hero">
        <h1>Our Blog</h1>
        <p>Cricket predictions, match previews & sports insights</p>
        <span className="blog-hero-bar"></span>
      </div>

      {/* Blog Grid */}
      <section className="blog-section">
        <div className="blog-section-inner">
          <p className="blog-section-label">Latest Posts</p>
          <h2 className="blog-section-title">
            Latest <span>Blogs</span>
          </h2>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div className="blog-card" key={post.slug}>
                <div className="blog-card-img-wrap">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={550}
                    height={220}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-tag">
                    <i className="fa fa-cricket-bat-ball"></i> {post.tag}
                  </span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <div className="blog-card-divider"></div>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-read-more"
                  >
                    Read More <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
