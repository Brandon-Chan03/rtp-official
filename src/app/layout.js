import { Irish_Grover, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/global/Navbar";

// import Footer from "@/components/global/Footer";

const irishGrover = Irish_Grover({
  subsets: ["latin"],
  variable: "--font-irish-grover",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  description: "Fan Made Sequel to Viva Pinata",
  title: "Return To Paradise",
};

const RootLayout = ({ children }) => {
  return (
    <html className="bg-primary-background" lang="en">
      <body className={`${irishGrover.className} ${inter.className}`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
