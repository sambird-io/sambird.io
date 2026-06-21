import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sam Bird — cloud, platform and data engineering, mentoring, or speaking. Open to senior & staff engineering roles.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
