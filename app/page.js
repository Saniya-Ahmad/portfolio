'use client'
import Navbar from "@/components/Navbar";

import "./globals.css";
import Header from "@/components/header";
import About from "@/components/About";
import Mywork from "@/components/Mywork";
import Contact from "@/components/Contact";

export default function Home() {
  return (
  <>
 <Navbar/>
 <Header/>
 <About/>
 <Mywork/>
 <Contact/>
  </>
  );
}
