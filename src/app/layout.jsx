import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "HeHeAnimeList",
  description: "Anime List Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressContentEditableWarning={true}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
