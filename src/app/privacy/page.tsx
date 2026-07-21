import type { Metadata } from "next";
import PrivacyPolicy from "@/components/site/PrivacyPolicy";

const title = "Privacy Policy • Across Time – Beyond Time";
const description =
  "Privacy Policy for Across Time – Beyond Time, an iOS application developed by Kousik Dasari.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kousik.in"),
  title,
  description,
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
