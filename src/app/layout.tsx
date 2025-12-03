// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import CustomCursor from "./components/ui/custom-cursor";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Matter Phnom Penh | You Matter Here",
//   description: "",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <CustomCursor />
//         {children}
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik, Playfair_Display_SC } from "next/font/google";   // ← Add Rubik here
import "./globals.css";
import CustomCursor from "./components/ui/custom-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const playfairSC = Playfair_Display_SC({
//   subsets: ["latin"],
//   weight: "700",                    // Only 700 is available for SC variant
//   style: "italic",                  // This gives you the true italic version
//   variable: "--font-playfair-sc",
//   display: "swap",
// });

const playfairSC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "700",
  style: ["normal", "italic"],        // ← load both!
  variable: "--font-playfair-sc",
  display: "swap",
});

// Add Rubik (Regular + optional weights)
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],        // Regular, Medium, Bold
  variable: "--font-rubik",             // CSS variable for easy use
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matter Phnom Penh | You Matter Here",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairSC.variable} ${rubik.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

