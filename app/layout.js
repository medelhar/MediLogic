import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Medilogic",
  description: "Caring for You, Connected by Us",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
        baseTheme: dark,
      }}>
      <html lang="en" suppressHydrationWarning className="dark">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
          <FooterSection />
        </body>
      </html>
    </ClerkProvider>
  );
}
