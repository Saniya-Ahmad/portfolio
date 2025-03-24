import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  
  subsets: ["latin"],weight:["400","500","600","700"]
});

const ovo = Ovo({
  
  subsets: ["latin"],weight:["400"]
});

export const metadata = {
  title: "Portfolio",
  description: "Porfolio using Nextjs and TalwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
