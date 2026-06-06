import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar"; // Adjust this import path based on where your Navbar is saved
import Footer from "@/components/Footer"; // Adjust this import path based on where your Footer is saved

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030303] text-white min-h-screen flex flex-col antialiased">
        {/* Universal Sticky Top/Bottom Responsive Navigation */}
        <Navbar />

        {/* Main Content Wrapper 
          pb-24 on mobile ensures elements never get cut off or hidden behind 
          the native application bottom navigation bar.
        */}
        <main className="grow pb-24 md:pb-0">
          {children}
        </main>

        {/* Premium Structural Footer Layer */}
        <Footer />

        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={3000}
        />
      </body>
    </html>
  );
}