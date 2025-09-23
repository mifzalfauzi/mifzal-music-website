"use client"

import { Document, Page, Text, View, StyleSheet, Link, Image } from '@react-pdf/renderer'

const upcomingReleases = [
  {
    title: "Tales of Sapphire",
    type: "Multi-track Single",
    expectedDate: "TBC",
    status: "In Production",
    description: "An instrumental progressive track blending cinematic textures, melodic guitar work, and neoclassical influences which exists together as a conceptual suite version that flows seamlessly from start to finish.",
    genre: "Progressive/Orchestral",
    duration: "~9:00",
    tracks: ["Pieces of The Vague Ceremony", "Sapphire", "Vita (Reimagined)"],
    individualDuration: ["0:00 - 1:47", "1:48 - 5:47", "5:48 - 8:32"]
  },
]

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 12,
    lineHeight: 1.4,
    color: '#222'
  },
  header: {
    textAlign: 'center',
    marginBottom: 25,
    paddingBottom: 15,
    borderBottom: '1px solid #222'
  },
  artistName: {
    fontSize: 32,
    fontWeight: 300,
    letterSpacing: 3,
    margin: '8px 0',
    color: '#222',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: 14,
    color: '#333',
    margin: '4px 0'
  },
  section: {
    marginBottom: 18
  },
  sectionSmall: {
    marginBottom: 12
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    borderBottom: '1px solid #ccc',
    paddingBottom: 4,
    color: '#222'
  },
  content: {
    fontSize: 11,
    lineHeight: 1.5,
    color: '#222'
  },
  paragraph: {
    marginBottom: 8
  },
  trackItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 8,
    border: '1px solid #eee',
    marginBottom: 8
  },
  qrPlaceholder: {
    width: 80,
    height: 80,
    border: '2px dashed #333',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 8,
    color: '#333',
    flexShrink: 0
  },
  qrText: {
    fontSize: 7,
    marginTop: 2
  },
  trackContent: {
    flex: 1,
    fontSize: 10
  },
  contactGrid: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 15
  },
  contactColumn: {
    flex: 1
  },
  trackListing: {
    marginTop: 10
  },
  trackRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '4px 0',
    borderBottom: '1px solid #eee'
  },
  link: {
    color: '#222',
    textDecoration: 'underline',
    fontSize: 10
  },
  disclaimer: {
    fontStyle: 'italic',
    color: '#333',
    fontSize: 9,
    marginTop: 8
  },
  footer: {
    textAlign: 'center',
    fontSize: 9,
    color: '#333',
    paddingTop: 15,
    borderTop: '1px solid #eee',
    marginTop: 'auto'
  },
  artistPhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 15,
    border: '2px solid #222'
  },
  bold: {
    fontWeight: 'bold'
  },
  trackTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8
  },
  trackListTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6
  }
})

export const EPKPDFDocument = () => (
  <Document>
    {/* Page 1: Cover & Artist Overview */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>Electronic Press Kit</Text>
        <Text style={styles.artistName}>MIFZAL</Text>
        <Text style={styles.subtitle}>Cinematic Progressive Composer</Text>
      </View>

      <Image 
        src="/mifzal.jpg" 
        style={styles.artistPhoto}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Artist Overview</Text>
        <View style={styles.content}>
          <Text>
            Mifzal, 23, is an emerging composer from Malaysia, crafting cinematic progressive music that blends atmospheric textures with melodic guitar-driven and orchestral compositions. His work explores the intersection of ambient soundscapes and intricate progressive arrangements, creating immersive musical narratives.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Musical Vision</Text>
        <View style={styles.content}>
          <Text style={styles.paragraph}>
            Mifzal creates music that transcends traditional genre boundaries, by weaving melodic guitar techniques with cinematic orchestrations to craft atmospheric and emotionally resonant pieces.
          </Text>
          <Text style={styles.paragraph}>
            The pinnacle of his artistic vision is "Sapphire", a musical exploration of cinematic melodies, orchestral arrangements and atmospherical textures. "Tales of Sapphire" represents this vision in its fullest form: a multi-movement suite that flows seamlessly from intimate guitar passages to sweeping orchestral arrangements, telling a complete narrative through instrumental composition alone.
          </Text>
          <Text>
            Through this conceptual framework, Mifzal aims to create music that serves as both technical showcase and emotional journey, inviting listeners into carefully crafted sounds with each listen.
          </Text>
        </View>
      </View>

      <View style={styles.sectionSmall}>
        <Text style={styles.sectionTitle}>For Fans Of</Text>
        <View style={styles.content}>
          <Text>David Maxim Micic, Plini, Ludovico Einaudi, Ludwig Göransson, and Aaron Hibell.</Text>
        </View>
      </View>
    </Page>

    {/* Page 2: Featured Music & Demo Tracks */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.artistName}>MIFZAL</Text>
        <Text style={styles.subtitle}>Featured Music & Demo Tracks</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Track</Text>
        <View style={styles.content}>
          <Text style={styles.trackTitle}>Sapphire (Demo)</Text>
          
          <View style={styles.trackItem}>
            <View style={styles.qrPlaceholder}>
              <Text style={{ fontSize: 8 }}>QR CODE</Text>
              <Text style={styles.qrText}>Scan to Listen</Text>
              <Text style={styles.qrText}>Sapphire Demo</Text>
            </View>
            <View style={styles.trackContent}>
              <Text style={styles.paragraph}>
                <Text style={styles.bold}>"Sapphire"</Text> is a cinematic, progressive guitar-driven track that blends atmospheric textures with melodic phrasing. The piece explores the emotional depth of natural imagery through intricate guitar layers, subtle percussion, and evolving harmonies.
              </Text>
              <Text>
                This track is the centerpiece of a larger conceptual suite, <Text style={styles.bold}>"Tales of Sapphire"</Text>, with supporting movements that extend the narrative into a full journey.
              </Text>
            </View>
          </View>
          <Text style={styles.disclaimer}>
            * This track is in demo form and has not yet been professionally mixed or mastered.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Extended Concept</Text>
        <View style={styles.content}>
          <Text style={styles.trackTitle}>Tales of Sapphire - Complete Suite (Demo)</Text>
          
          <View style={styles.trackItem}>
            <View style={styles.qrPlaceholder}>
              <Text style={{ fontSize: 8 }}>QR CODE</Text>
              <Text style={styles.qrText}>Scan to Listen</Text>
              <Text style={styles.qrText}>Complete Suite</Text>
            </View>
            <View style={styles.trackContent}>
              <Text>
                This conceptual suite includes the main single <Text style={styles.bold}>"Sapphire"</Text> and supporting movements <Text style={styles.bold}>"Pieces of The Vague Ceremony"</Text> and <Text style={styles.bold}>"Vita"</Text>, which extend the narrative into a full immersive journey.
              </Text>
            </View>
          </View>

          <View style={styles.trackListing}>
            <Text style={styles.trackListTitle}>Track Listing:</Text>
            {upcomingReleases[0].tracks.map((track, index) => (
              <View key={index} style={styles.trackRow}>
                <Text style={{ fontSize: 10 }}>
                  {String(index + 1).padStart(2, '0')}. {track}
                </Text>
                <Text style={{ fontSize: 9, color: '#333' }}>
                  {upcomingReleases[0].individualDuration[index]}
                </Text>
              </View>
            ))}
          </View>
          
          <Text style={styles.disclaimer}>
            * These tracks are in demo form and have not yet been professionally mixed or mastered.
          </Text>
        </View>
      </View>

      <View style={styles.sectionSmall}>
        <Text style={styles.sectionTitle}>Released Tracks</Text>
        <View style={styles.content}>
          <Text>For previously released tracks and full discography, visit the Music section at <Text style={styles.bold}>mifzal.co</Text></Text>
        </View>
      </View>
    </Page>

    {/* Page 3: Contact & Links */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.artistName}>MIFZAL</Text>
        <Text style={styles.subtitle}>Contact & Links</Text>
      </View>

      <View style={styles.contactGrid}>
        <View style={[styles.section, styles.contactColumn]}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <View style={styles.content}>
            <View style={{ marginBottom: 12 }}>
              <Text style={styles.bold}>Email:</Text>
              <Link src="mailto:mifzalmusic@gmail.com" style={styles.link}>
                mifzalmusic@gmail.com
              </Link>
            </View>
            <View style={{ marginBottom: 12 }}>
              <Text style={styles.bold}>Website:</Text>
              <Link src="https://www.mifzal.co" style={styles.link}>
                www.mifzal.co
              </Link>
            </View>
          </View>
        </View>

        <View style={[styles.section, styles.contactColumn]}>
          <Text style={styles.sectionTitle}>Social Media & Streaming</Text>
          <View style={styles.content}>
            <View style={{ marginBottom: 8 }}>
              <Text style={styles.bold}>Instagram: </Text>
              <Link src="https://instagram.com/mifzalv" style={styles.link}>
                @mifzalv
              </Link>
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text style={styles.bold}>YouTube: </Text>
              <Link src="https://youtube.com/@mifzals" style={styles.link}>
                @mifzals
              </Link>
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text style={styles.bold}>Spotify: </Text>
              <Link src="https://open.spotify.com/artist/3HqfM3Xk0a0J6xZJvjQfkj" style={styles.link}>
                Mifzal
              </Link>
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text style={styles.bold}>Bandcamp: </Text>
              <Link src="https://mifzal.bandcamp.com/" style={styles.link}>
                mifzal.bandcamp.com
              </Link>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sectionSmall}>
        <Text style={styles.sectionTitle}>Press Photos</Text>
        <View style={styles.content}>
          <Text>High-resolution press photos available upon request.</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>For label consideration only. Please do not share this link.</Text>
        <Text>Generated: {new Date().toLocaleDateString()}</Text>
      </View>
    </Page>
  </Document>
)