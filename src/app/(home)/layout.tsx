import "../globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import Navbar from "@/components/navbar";
import Footer from "@/components/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | VEC SKILL",
    default: "VEC SKILL",
    description: "VEC Skill",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster expand visibleToasts={4} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
