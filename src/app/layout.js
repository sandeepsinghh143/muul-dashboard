import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MobileDrawer from "@/components/MobileSidebar";
import { StoreProvider } from "@/redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <MobileDrawer />
          <Navbar />
          <div>
            <div className="flex">
              <Sidebar />
              <div className="w-full lg:w-[calc(100%-64px)]">{children}</div>
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
