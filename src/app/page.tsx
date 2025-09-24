"use client"

import VerticalNav from "@/components/vertical-nav"
import SocialIcons from "@/components/social-icons"
import Hero from "@/components/hero"
import Music from "@/components/music"
import Merch from "@/components/merch"
import Shows from "@/components/shows"
import BandMembers from "@/components/band-members"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import About from "@/components/about"
import Contact from "@/components/contact"
import UpcomingMusic from "@/components/upcoming-music"


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Film grain noise overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' result='noise' seed='1'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          mixBlendMode: 'screen'
        }}
      />
      <div 
        className="fixed inset-0 pointer-events-none opacity-30" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence type='turbulence' baseFrequency='1.5' numOctaves='1' result='noise' seed='5'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise2)' opacity='0.6'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply'
        }}
      />
      <VerticalNav />
      <SocialIcons />

      <main>
        <section id="home">
          <Hero />
        </section>

        {/* <section id="merch" className="py-16">
          <Merch />
        </section> */}
        {/* <motion.section 
          id="band" 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={sectionVariants}
        >
          <BandMembers />
        </section> */}

        {/* <motion.section 
          id="shows" 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Shows />
        </section> */}

<section 
          id="about" 
          className="py-12 md:py-20"
        >
          <About />
        </section>

        <section 
          id="music" 
          className="py-12 md:py-20"
        >
          <Music />
        </section>

        <section 
          id="upcoming-music" 
          className="py-12 md:py-20"
        >
          <UpcomingMusic />
        </section>

        {/* <motion.section 
          id="newsletter" 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Newsletter />
        </section> */}
        <section 
          id="contact" 
          className="py-12 md:py-20"
        >
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}