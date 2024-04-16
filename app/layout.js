import { Space_Grotesk, Elsie, Elsie_Swash_Caps } from "next/font/google";
import "./globals.css";
import Footer from './sharedComponents/Footer'
import Navigation from './sharedComponents/Navigation'

const space = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk', 
  display: 'swap',
});

const elsie = Elsie({ 
  subsets: ["latin"],
  weight: '400',
  variable: '--font-elsie', 
  display: 'swap',
});

const elsieCaps = Elsie_Swash_Caps({ 
  subsets: ["latin"],
  weight: '400',
  variable: '--font-elsie-swash-caps', 
  display: 'swap',
});

export const metadata = {
  title: "NurseBloc",
  description: "Community based, direct, home nursing care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${space.variable} ${elsie.variable} ${elsieCaps.variable}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
