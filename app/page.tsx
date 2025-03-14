"use client";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
// import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative 
    bg-black flex justify-center 
    items-center flex-col overflow-hidden 
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={
          // [{name: 'Home', link: '/', icon: <FaHome />}]
          navItems
          }/>
        <Hero />
        <Experience />
        <RecentProjects />
        {/* <Grid /> */}
        <Footer />
      </div>
    </main>
  );
}
