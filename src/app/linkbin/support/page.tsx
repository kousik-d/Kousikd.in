import type { Metadata } from "next";
import LinkBinSupport from "@/components/site/LinkBinSupport";

const title = "LinkBin Support";
const description =
  "Get help with LinkBin, including saving links, the Share Extension, opening links, copying links, and managing saved links.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kousikd.in"),
  title,
  description,
  alternates: {
    canonical: "/linkbin/support",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "/linkbin/support",
    type: "website",
  },
};

export default function LinkBinSupportPage() {
  return <LinkBinSupport />;
}
