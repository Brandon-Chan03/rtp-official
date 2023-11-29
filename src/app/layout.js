import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/global/Navbar";

// import Footer from "@/components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description: "Fan Made Sequel to Viva Pinata",
  title: "Return To Paradise",
};

const RootLayout = ({ children }) => {
  return (
    <html className="bg-primary-background" lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
