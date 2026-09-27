import { Contact } from "@/components/sections/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Sam Bird about cloud, platform and data engineering, mentoring, or speaking. Open to senior and staff engineering roles.",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
