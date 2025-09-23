"use client"

import { Document, Page, Text, View, StyleSheet, Link, Svg, Path, Circle, Rect } from '@react-pdf/renderer'

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
    backgroundColor: '#FAFAFA',
    padding: 0,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.5,
    color: '#1a1a1a'
  },
  // Header with gradient background
  heroSection: {
    backgroundColor: '#2D3748',
    background: 'linear-gradient(135deg, #2D3748 0%, #4A5568 50%, #2D3748 100%)',
    padding: 40,
    marginBottom: 0,
    position: 'relative'
  },
  contentSection: {
    padding: 30,
    backgroundColor: '#FFFFFF'
  },
  // Abstract decorative elements
  decorativeShape: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 100,
    height: 100,
    opacity: 0.1
  },
  gradientAccent: {
    height: 4,
    backgroundColor: '#4299E1',
    background: 'linear-gradient(90deg, #4299E1 0%, #9F7AEA 50%, #ED64A6 100%)',
    marginBottom: 20
  },
  // Typography hierarchy
  artistName: {
    fontSize: 42,
    fontWeight: 'normal',
    letterSpacing: 6,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
    textTransform: 'uppercase'
  },
  tagline: {
    fontSize: 16,
    color: '#A0AEC0',
    textAlign: 'center',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 20
  },
  epkLabel: {
    fontSize: 12,
    color: '#CBD5E0',
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 15
  },
  // Section styling
  section: {
    marginBottom: 25
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginLeft: 10
  },
  sectionAccent: {
    width: 30,
    height: 3,
    backgroundColor: '#4299E1',
    background: 'linear-gradient(90deg, #4299E1 0%, #9F7AEA 100%)'
  },
  // Content styling
  bodyText: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#4A5568',
    marginBottom: 12,
    textAlign: 'justify'
  },
  highlightText: {
    color: '#2D3748',
    fontWeight: 'bold'
  },
  // Track items with modern card design
  trackCard: {
    backgroundColor: '#F7FAFC',
    border: '1px solid #E2E8F0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 15
  },
  qrContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#FFFFFF',
    border: '2px solid #4299E1',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0
  },
  qrText: {
    fontSize: 8,
    color: '#4299E1',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  trackInfo: {
    flex: 1
  },
  trackTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 8
  },
  trackDescription: {
    fontSize: 10,
    color: '#4A5568',
    lineHeight: 1.5
  },
  // Track listing
  trackList: {
    backgroundColor: '#F7FAFC',
    borderRadius: 8,
    padding: 15,
    marginTop: 15
  },
  trackListTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  trackRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottom: '1px solid #E2E8F0'
  },
  trackNumber: {
    fontSize: 10,
    color: '#4A5568',
    minWidth: 20
  },
  trackName: {
    fontSize: 10,
    color: '#2D3748',
    flex: 1,
    marginLeft: 10
  },
  trackDuration: {
    fontSize: 9,
    color: '#718096'
  },
  // Contact section with cards
  contactGrid: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20
  },
  contactCard: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    padding: 20,
    border: '1px solid #E2E8F0'
  },
  contactTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  contactIcon: {
    width: 16,
    height: 16,
    backgroundColor: '#4299E1',
    borderRadius: 8,
    marginRight: 8
  },
  contactLabel: {
    fontSize: 9,
    color: '#718096',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2
  },
  contactValue: {
    fontSize: 10,
    color: '#2D3748',
    fontWeight: 'bold'
  },
  link: {
    color: '#4299E1',
    textDecoration: 'none',
    fontSize: 10,
    fontWeight: 'bold'
  },
  // Footer
  footer: {
    textAlign: 'center',
    fontSize: 9,
    color: '#718096',
    paddingTop: 20,
    borderTop: '1px solid #E2E8F0',
    marginTop: 30
  },
  disclaimer: {
    fontSize: 9,
    color: '#A0AEC0',
    fontStyle: 'italic',
    marginTop: 10,
    textAlign: 'center'
  },
  // Artistic elements
  visualElement: {
    alignSelf: 'center',
    marginVertical: 20
  },
  circlePattern: {
    width: 120,
    height: 120,
    position: 'relative'
  }
})

// Artistic visual element to replace photo
const ArtisticElement = () => (
  <View style={styles.visualElement}>
    <Svg width="120" height="120" style={styles.circlePattern}>
      {/* Gradient circles representing sound waves */}
      <Circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="#4299E1"
        strokeWidth="2"
        opacity="0.3"
      />
      <Circle
        cx="60"
        cy="60"
        r="35"
        fill="none"
        stroke="#9F7AEA"
        strokeWidth="2"
        opacity="0.5"
      />
      <Circle
        cx="60"
        cy="60"
        r="20"
        fill="none"
        stroke="#ED64A6"
        strokeWidth="3"
        opacity="0.7"
      />
      <Circle
        cx="60"
        cy="60"
        r="8"
        fill="#4299E1"
        opacity="0.8"
      />
      {/* Abstract lines representing music */}
      <Path
        d="M 30 40 Q 60 20 90 40 Q 60 60 90 80"
        fill="none"
        stroke="#9F7AEA"
        strokeWidth="2"
        opacity="0.4"
      />
      <Path
        d="M 30 80 Q 60 100 90 80 Q 60 60 90 40"
        fill="none"
        stroke="#ED64A6"
        strokeWidth="2"
        opacity="0.4"
      />
    </Svg>
  </View>
)

export const EPKPDFDocument = () => (
  <Document>
    {/* Page 1: Hero & Overview */}
    <Page size="A4" style={styles.page}>
      {/* Hero Section with Gradient */}
      <View style={styles.heroSection}>
        <Text style={styles.epkLabel}>Electronic Press Kit</Text>
        <Text style={styles.artistName}>MIFZAL</Text>
        <Text style={styles.tagline}>Cinematic Progressive Composer</Text>
        
        {/* Decorative SVG element */}
        <Svg width="100" height="100" style={styles.decorativeShape}>
          <Circle cx="25" cy="25" r="20" fill="#FFFFFF" opacity="0.1" />
          <Circle cx="75" cy="75" r="15" fill="#FFFFFF" opacity="0.1" />
          <Path d="M 20 80 L 80 20" stroke="#FFFFFF" strokeWidth="2" opacity="0.1" />
        </Svg>
      </View>

      <View style={styles.contentSection}>
        <View style={styles.gradientAccent} />
        
        {/* Artistic Element replacing photo */}
        <ArtisticElement />
        
        {/* Artist Overview */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>Artist Overview</Text>
          </View>
          <Text style={styles.bodyText}>
            <Text style={styles.highlightText}>Mifzal, 23,</Text> is an emerging composer from Malaysia, crafting cinematic progressive music that blends atmospheric textures with melodic guitar-driven and orchestral compositions. His work explores the intersection of ambient soundscapes and intricate progressive arrangements, creating immersive musical narratives.
          </Text>
        </View>

        {/* Musical Vision */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>Musical Vision</Text>
          </View>
          <Text style={styles.bodyText}>
            Mifzal creates music that transcends traditional genre boundaries, weaving melodic guitar techniques with cinematic orchestrations to craft atmospheric and emotionally resonant pieces.
          </Text>
          <Text style={styles.bodyText}>
            The pinnacle of his artistic vision is <Text style={styles.highlightText}>"Sapphire"</Text>, a musical exploration of cinematic melodies, orchestral arrangements and atmospherical textures. <Text style={styles.highlightText}>"Tales of Sapphire"</Text> represents this vision in its fullest form: a multi-movement suite that flows seamlessly from intimate guitar passages to sweeping orchestral arrangements.
          </Text>
        </View>

        {/* For Fans Of */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>For Fans Of</Text>
          </View>
          <Text style={styles.bodyText}>
            <Text style={styles.highlightText}>David Maxim Micic • Plini • Ludovico Einaudi • Ludwig Göransson • Aaron Hibell</Text>
          </Text>
        </View>
      </View>
    </Page>

    {/* Page 2: Music & Tracks */}
    <Page size="A4" style={styles.page}>
      <View style={styles.contentSection}>
        <View style={styles.gradientAccent} />
        
        <View style={styles.sectionHeader}>
          <View style={styles.sectionAccent} />
          <Text style={styles.sectionTitle}>Featured Music</Text>
        </View>

        {/* Featured Track */}
        <View style={styles.trackCard}>
          <View style={styles.qrContainer}>
            <Text style={styles.qrText}>QR</Text>
            <Text style={styles.qrText}>SCAN</Text>
          </View>
          <View style={styles.trackInfo}>
            <Text style={styles.trackTitle}>Sapphire (Demo)</Text>
            <Text style={styles.trackDescription}>
              <Text style={styles.highlightText}>"Sapphire"</Text> is a cinematic, progressive guitar-driven track that blends atmospheric textures with melodic phrasing. The piece explores emotional depth through intricate guitar layers, subtle percussion, and evolving harmonies.
            </Text>
            <Text style={styles.disclaimer}>
              * Demo form - not professionally mixed or mastered
            </Text>
          </View>
        </View>

        {/* Extended Concept */}
        <View style={styles.trackCard}>
          <View style={styles.qrContainer}>
            <Text style={styles.qrText}>QR</Text>
            <Text style={styles.qrText}>SUITE</Text>
          </View>
          <View style={styles.trackInfo}>
            <Text style={styles.trackTitle}>Tales of Sapphire - Complete Suite</Text>
            <Text style={styles.trackDescription}>
              This conceptual suite includes the main single <Text style={styles.highlightText}>"Sapphire"</Text> and supporting movements <Text style={styles.highlightText}>"Pieces of The Vague Ceremony"</Text> and <Text style={styles.highlightText}>"Vita"</Text>, extending the narrative into a full immersive journey.
            </Text>

            {/* Track Listing */}
            <View style={styles.trackList}>
              <Text style={styles.trackListTitle}>Track Listing</Text>
              {upcomingReleases[0].tracks.map((track, index) => (
                <View key={index} style={styles.trackRow}>
                  <Text style={styles.trackNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </Text>
                  <Text style={styles.trackName}>{track}</Text>
                  <Text style={styles.trackDuration}>
                    {upcomingReleases[0].individualDuration[index]}
                  </Text>
                </View>
              ))}
            </View>
            <Text style={styles.disclaimer}>
              * Demo tracks - not professionally mixed or mastered
            </Text>
          </View>
        </View>

        {/* Released Tracks */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>Released Tracks</Text>
          </View>
          <Text style={styles.bodyText}>
            For previously released tracks and full discography, visit <Link src="https://www.mifzal.co" style={styles.link}>mifzal.co</Link>
          </Text>
        </View>
      </View>
    </Page>

    {/* Page 3: Contact & Links */}
    <Page size="A4" style={styles.page}>
      <View style={styles.contentSection}>
        <View style={styles.gradientAccent} />
        
        <View style={styles.sectionHeader}>
          <View style={styles.sectionAccent} />
          <Text style={styles.sectionTitle}>Contact & Links</Text>
        </View>

        <View style={styles.contactGrid}>
          {/* Contact Information */}
          <View style={styles.contactCard}>
            <Text style={styles.contactTitle}>Contact</Text>
            
            <View style={styles.contactItem}>
              <View style={styles.contactIcon} />
              <View>
                <Text style={styles.contactLabel}>Email</Text>
                <Link src="mailto:mifzalmusic@gmail.com" style={styles.link}>
                  mifzalmusic@gmail.com
                </Link>
              </View>
            </View>
            
            <View style={styles.contactItem}>
              <View style={styles.contactIcon} />
              <View>
                <Text style={styles.contactLabel}>Website</Text>
                <Link src="https://www.mifzal.co" style={styles.link}>
                  www.mifzal.co
                </Link>
              </View>
            </View>
          </View>

          {/* Social & Streaming */}
          <View style={styles.contactCard}>
            <Text style={styles.contactTitle}>Platforms</Text>
            
            <View style={styles.contactItem}>
              <View style={[styles.contactIcon, { backgroundColor: '#E1306C' }]} />
              <View>
                <Text style={styles.contactLabel}>Instagram</Text>
                <Link src="https://instagram.com/mifzalv" style={styles.link}>
                  @mifzalv
                </Link>
              </View>
            </View>
            
            <View style={styles.contactItem}>
              <View style={[styles.contactIcon, { backgroundColor: '#FF0000' }]} />
              <View>
                <Text style={styles.contactLabel}>YouTube</Text>
                <Link src="https://youtube.com/@mifzals" style={styles.link}>
                  @mifzals
                </Link>
              </View>
            </View>
            
            <View style={styles.contactItem}>
              <View style={[styles.contactIcon, { backgroundColor: '#1DB954' }]} />
              <View>
                <Text style={styles.contactLabel}>Spotify</Text>
                <Link src="https://open.spotify.com/artist/3HqfM3Xk0a0J6xZJvjQfkj" style={styles.link}>
                  Mifzal
                </Link>
              </View>
            </View>
            
            <View style={styles.contactItem}>
              <View style={[styles.contactIcon, { backgroundColor: '#408294' }]} />
              <View>
                <Text style={styles.contactLabel}>Bandcamp</Text>
                <Link src="https://mifzal.bandcamp.com/" style={styles.link}>
                  mifzal.bandcamp.com
                </Link>
              </View>
            </View>
          </View>
        </View>

        {/* Press Photos */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>Press Materials</Text>
          </View>
          <Text style={styles.bodyText}>
            High-resolution press photos and additional promotional materials available upon request.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text>For label consideration only. Please do not share this link.</Text>
          <Text>Generated: {new Date().toLocaleDateString()}</Text>
        </View>
      </View>
    </Page>
  </Document>
)