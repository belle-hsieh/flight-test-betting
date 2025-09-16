import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});


const bitcount = localFont({
  src: [
    {
      path: './fonts/Bitcount_Grid_Double/static/BitcountGridDouble-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Bitcount_Grid_Double/static/BitcountGridDouble-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-bitcount',
  display: 'swap',
});

const pixelify = localFont({
  src: [
    {
      path: './fonts/Bitcount_Grid_Double,Pixelify_Sans/Pixelify_Sans/static/PixelifySans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Bitcount_Grid_Double,Pixelify_Sans/Pixelify_Sans/static/PixelifySans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pixelify',
  display: 'swap',
});

const minecraft = localFont({
  src: [
    {
      path: './fonts/Minecraft.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-minecraft',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Penn AiR Flight Test Betting",
  description: "Make flight tests fun by placing bets and competing with your friends!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.variable} ${bitcount.variable} ${pixelify.variable} ${minecraft.variable} font-sans antialiased`}
      >
        <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
