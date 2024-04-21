import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomSidebar from "@/components/CustomSidebar";
import SubmoduleContainer from "@/components/SubmoduleContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + " h-full flex"}>
        <div className="h-screen fixed top-0 left-0">
          <CustomSidebar />
        </div>
        <div className="w-full ml-96 my-5 mr-5">
          <SubmoduleContainer>
            {children}
          </SubmoduleContainer>
        </div>
      </body>
    </html>
  );
}
