"use client"

import { motion } from "framer-motion"
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

// Animation variants for sections
const sectionVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
        </motion.section> */}

        {/* <motion.section 
          id="shows" 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Shows />
        </motion.section> */}

<motion.section 
          id="about" 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={sectionVariants}
        >
          <About />
        </motion.section>

        <motion.section 
          id="music" 
          className="py-8 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Music />
        </motion.section>

        <motion.section 
          id="upcoming-music" 
          className="py-8 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={sectionVariants}
        >
          <UpcomingMusic />
        </motion.section>

        {/* <motion.section 
          id="newsletter" 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Newsletter />
        </motion.section> */}
        <motion.section 
          id="contact" 
          className="py-8 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
