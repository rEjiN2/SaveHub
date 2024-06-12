
"use client"
import { Kanit } from "next/font/google";
import { QueryClient, QueryClientProvider } from 'react-query';

import Navbar from "@/components/Navbar/Navbar";
import Footer from '@/components/footer/Footer' 


const kanit = Kanit({ subsets: ["latin"], weight: "500"  });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
            {children}
    </QueryClientProvider>
         
  );
}
