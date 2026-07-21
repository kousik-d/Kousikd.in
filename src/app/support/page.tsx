import type { Metadata } from "next";
import Support from "@/components/site/Support";

const title = "Support • Across Time – Beyond Time";
const description = "Official support page for Across Time – Beyond Time.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kousik.in"),
  title,
  description,
  alternates: {
    canonical: "/support",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "/support",
    type: "website",
  },
};

export default function SupportPage() {
  return <Support />;
}
