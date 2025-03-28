'use client'
import Navbar from "@/components/Navbar";

import "./globals.css";
import Header from "@/components/Header";
import About from "@/components/About";
import Mywork from "@/components/Mywork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect,useState } from "react";

export default function Home() {
  
  return (
  <>
 <Navbar/>
 <Header/>
 <About/>
 <Mywork/>
 <Contact/>
 <Footer/>
  </>
  );
}
