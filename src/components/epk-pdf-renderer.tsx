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
    lineHeight: 1.6,
    color: '#222'
  },
  header: {
    textAlign: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottom: '2px solid #222'
  },
  artistName: {
    fontSize: 36,
    fontWeight: 300,
    letterSpacing: 4,
    margin: '10px 0',
    color: '#222'
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    margin: '5px 0'
  },
  section: {
    marginBottom: 25
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 2,
    borderBottom: '1px solid #ccc',
    paddingBottom: 5,
    color: '#222'
  },
  content: {
    fontSize: 12,
    lineHeight: 1.6,
    color: '#222'
  },
  trackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 10,
    border: '1px solid #eee',
    marginBottom: 10
  },
  qrPlaceholder: {
    width: 100,
    height: 100,
    border: '2px dashed #333',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
    color: '#333'
  },
  contactGrid: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20
  },
  contactColumn: {
    flex: 1
  },
  trackListing: {
    marginTop: 15
  },
  trackRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #eee'
  },
  link: {
    color: '#222',
    textDecoration: 'underline'
  },
  disclaimer: {
    fontStyle: 'italic',
    color: '#333',
    fontSize: 11,
    marginTop: 10
  },
  footer: {
    textAlign: 'center',
    fontSize: 10,
    color: '#333',
    paddingTop: 20,
    borderTop: '1px solid #eee',
    marginTop: 'auto'
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
          <Text style={{ marginBottom: 10 }}>
            Mifzal creates music that transcends traditional genre boundaries, by weaving melodic guitar techniques with cinematic orchestrations to craft atmospheric and emotionally resonant pieces.
          </Text>
          <Text style={{ marginBottom: 10 }}>
            The pinnacle of his artistic vision is "Sapphire", a musical exploration of cinematic melodies, orchestral arrangements and atmospherical textures. "Tales of Sapphire" represents this vision in its fullest form: a multi-movement suite that flows seamlessly from intimate guitar passages to sweeping orchestral arrangements, telling a complete narrative through instrumental composition alone.
          </Text>
          <Text>
            Through this conceptual framework, Mifzal aims to create music that serves as both technical showcase and emotional journey, inviting listeners into carefully crafted sounds with each listen.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
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
          <Text style={{ fontSize: 16, marginBottom: 15, fontWeight: 'bold' }}>Sapphire (Demo)</Text>
          
          <View style={styles.trackItem}>
            <View style={styles.qrPlaceholder}>
              <Text>QR CODE</Text>
              <Text>Scan to Listen</Text>
              <Text>Sapphire Demo</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>"Sapphire"</Text> is a cinematic, progressive guitar-driven track that blends atmospheric textures with melodic phrasing. The piece explores the emotional depth of natural imagery through intricate guitar layers, subtle percussion, and evolving harmonies.
              </Text>
              <Text>
                This track is the centerpiece of a larger conceptual suite, <Text style={{ fontWeight: 'bold' }}>"Tales of Sapphire"</Text>, with supporting movements that extend the narrative into a full journey.
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
          <Text style={{ fontSize: 16, marginBottom: 15, fontWeight: 'bold' }}>Tales of Sapphire - Complete Suite (Demo)</Text>
          
          <View style={styles.trackItem}>
            <View style={styles.qrPlaceholder}>
              <Text>QR CODE</Text>
              <Text>Scan to Listen</Text>
              <Text>Complete Suite</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text>
                This conceptual suite includes the main single <Text style={{ fontWeight: 'bold' }}>"Sapphire"</Text> and supporting movements <Text style={{ fontWeight: 'bold' }}>"Pieces of The Vague Ceremony"</Text> and <Text style={{ fontWeight: 'bold' }}>"Vita"</Text>, which extend the narrative into a full immersive journey.
              </Text>
            </View>
          </View>

          <View style={styles.trackListing}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 10 }}>Track Listing:</Text>
            {upcomingReleases[0].tracks.map((track, index) => (
              <View key={index} style={styles.trackRow}>
                <Text style={{ fontSize: 12 }}>
                  {String(index + 1).padStart(2, '0')}. {track}
                </Text>
                <Text style={{ fontSize: 11, color: '#333' }}>
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Released Tracks</Text>
        <View style={styles.content}>
          <Text>For previously released tracks and full discography, visit the Music section at <Text style={{ fontWeight: 'bold' }}>mifzal.co</Text></Text>
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
            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>Email:</Text>
              <Link src="mailto:mifzalmusic@gmail.com" style={styles.link}>
                mifzalmusic@gmail.com
              </Link>
            </View>
            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>Website:</Text>
              <Link src="https://www.mifzal.co" style={styles.link}>
                www.mifzal.co
              </Link>
            </View>
          </View>
        </View>

        <View style={[styles.section, styles.contactColumn]}>
          <Text style={styles.sectionTitle}>Social Media & Streaming</Text>
          <View style={styles.content}>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Instagram: </Text>
              <Link src="https://instagram.com/mifzalv" style={styles.link}>
                @mifzalv
              </Link>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>YouTube: </Text>
              <Link src="https://youtube.com/@mifzals" style={styles.link}>
                @mifzals
              </Link>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Spotify: </Text>
              <Link src="https://open.spotify.com/artist/3HqfM3Xk0a0J6xZJvjQfkj" style={styles.link}>
                Mifzal
              </Link>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Bandcamp: </Text>
              <Link src="https://mifzal.bandcamp.com/" style={styles.link}>
                mifzal.bandcamp.com
              </Link>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
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