import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Cloud Engineer",
    "Platform Engineering",
    "Data Engineering",
    "Kubernetes",
    "Terraform",
    "Google Cloud",
    "AWS",
    "CI/CD",
    "DevOps",
    "Engineering Leadership",
    "Sam Bird",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} · ${site.role}`,
    description: site.tagline,
    siteName: site.name,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: site.tagline,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: site.company },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Yorkshire",
    addressCountry: "GB",
  },
  sameAs: [site.links.linkedin, site.links.github],
  knowsAbout: [
    "Cloud Engineering",
    "Platform Engineering",
    "Data Engineering",
    "Kubernetes",
    "Terraform",
    "Google Cloud",
    "Amazon Web Services",
    "CI/CD",
    "Infrastructure as Code",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Nav />
          <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
