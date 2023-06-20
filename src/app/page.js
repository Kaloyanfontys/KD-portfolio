"use client"
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import LatestWork from "./components/LatestWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Advice from "./components/Advice";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <LatestWork/>
      <Contact/>
      <Advice/>
      <Footer/>
    </div>
  );
}
