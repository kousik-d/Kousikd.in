import type { Metadata } from "next";
import LinkBinPrivacyPolicy from "@/components/site/LinkBinPrivacyPolicy";

const title = "LinkBin Privacy Policy";
const description =
  "Privacy Policy for LinkBin, a simple iOS app for saving links for later.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kousikd.in"),
  title,
  description,
  alternates: {
    canonical: "/linkbin/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "/linkbin/privacy",
    type: "website",
  },
};

export default function LinkBinPrivacyPage() {
  return <LinkBinPrivacyPolicy />;
}
