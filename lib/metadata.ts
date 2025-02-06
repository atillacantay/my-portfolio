import { Metadata } from "next";

interface MetadataProps {
  title: string;
  description: string;
  url: string;
  ogImageUrl: string;
}

export const generateMetadata = ({
  title,
  description,
  url,
  ogImageUrl,
}: MetadataProps): Metadata => {
  return {
    title: `${title} | Atilla Cantay Gül`,
    description,
    openGraph: {
      title: `${title} | Atilla Cantay Gül`,
      description,
      url,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Atilla Cantay Gül Portfolio",
        },
      ],
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};
