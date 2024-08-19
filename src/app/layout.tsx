import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./Components/Navbar";
// import Sidebar from "./Components/Sidebar";
// import Chat from "./Components/Chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tenbot",
  description: "Created by Tensors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      
      <body className={inter.className}>
      {/* <Navbar/>
      <div className="flex flex-row flex-1 overflow-hidden">
      <Sidebar/>
      <Chat/>

      </div> */}
      
        {children}
        </body>
    </html>
  );
}
