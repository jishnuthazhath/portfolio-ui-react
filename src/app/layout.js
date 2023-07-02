import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { Petrona } from "next/font/google";

const fontType = Petrona({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "jishnuthazhath",
  description: "Jishnu Thazhath",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontType.className}>
        <div className="mx-auto px-6 max-w-4xl text-sm md:text-lg">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
