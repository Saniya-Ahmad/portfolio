'use client'
import Navbar from "@/components/Navbar";

import "./globals.css";
import Header from "@/components/header";
import About from "@/components/About";
import Mywork from "@/components/Mywork";

export default function Home() {
  return (
  <>
 <Navbar/>
 <Header/>
 <About/>
 <Mywork/>
  </>
  );
}
