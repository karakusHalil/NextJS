import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created with Next.js.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
