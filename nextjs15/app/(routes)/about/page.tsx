import type { Metadata } from "next";
import { siteMetadata } from "../../../lib/siteMetadata";
import { title } from "process";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: `About | ${siteMetadata.title}`, // sadece bu sayfada override ediyor
  description: "About page description goes here", // istediğin description
  openGraph: {
    title: `About | ${siteMetadata.title}`,
    description: "About page description goes here",
    url: `${siteMetadata.siteUrl}/about`, // sayfaya özel OG url
    images: [
      {
        url: siteMetadata.socialBanner,
        width: 1200,
        height: 630,
        alt: "About page image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About | ${siteMetadata.title}`,
    description: "About page description goes here",
    images: [siteMetadata.socialBanner],
  },
};

type Post = {
  id: number;
  title: string;
  content: string;
};

const AboutPage = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });
  const posts: Post[] = await res.json();

  const jsonLd = posts.map((post) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: post.id.toString(),
    title: post.title,
    description: post.content,
  }));

  console.log(posts);

  return (
    <section>
      <div>
        {jsonLd.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
