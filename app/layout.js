import { DM_Sans } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ChatbotWidget from "@/components/ChatbotWidget";
import AccessibilityTools from "@/components/AccessibilityTools";
import ScrollToTop from "@/components/ScrollToTop";

const dmsans = DM_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"], // Or other subsets as needed
});

export const metadata = {
  title: "Aarupadai Veedu Medical College & Hospital",
  description: "Shaping Future Leaders in Medicine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmsans.variable} antialiased`}>
        <Topbar />
        <Header />
        {children}
        <AccessibilityTools />
        <Footer />
        <WhatsAppWidget />
        <ChatbotWidget />
        <ScrollToTop />
      </body>
    </html>
  );
}
