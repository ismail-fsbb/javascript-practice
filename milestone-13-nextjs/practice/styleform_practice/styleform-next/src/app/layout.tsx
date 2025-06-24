import type { Metadata } from "next";
import { Orbitron, Saira } from "next/font/google";
import "@/assets/css/global.css";
import Favicon from "@/assets/images/logo/favicon.png";
// import ClientWrapper from "@/components/shared/client-wrapper";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

export const metadata: Metadata = {
  robots: "noindex, nofollow",
  icons: {
    icon: Favicon.src
  },
  openGraph: {
    title: "Styleform - Premium Fashion Website NextJS Template",
    description: "NextJS Fashion Template- launch your fashion brand online with Styleform - Premium Fashion Website NextJS Template. Purchase now!",
    images: [
      {
        url: "https://designtocodes.com/wp-content/uploads/2025/05/Styleform-Premium-Fashion-Website-NextJS-Template.jpg",
      },
    ],
  },
  title: "Styleform - Premium Fashion Website NextJS Template",
  description: "NextJS Fashion Template- launch your fashion brand online with Styleform - Premium Fashion Website NextJS Template. Purchase now!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${orbitron.variable} ${saira.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* <ClientWrapper> */}
          {children}
        {/* </ClientWrapper> */}
      </body>
    </html>
  );
}





/* 
    Template Name: Styleform - Premium Fashion Website NextJS Template
    Template URL: https://designtocodes.com/product/styleform-premium-fashion-website-nextjs-template
    Description: NextJS Fashion Template- launch your fashion brand online with Styleform - Premium Fashion Website NextJS Template. Purchase now!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: Style Form | Next.js | Portfolio Template
*/