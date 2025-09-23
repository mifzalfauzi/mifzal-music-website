"use client"

import { QrCode, Instagram, Youtube, ExternalLink } from "lucide-react"
import Image from "next/image"

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

export default function EPKPdf() {
  return (
    <div className="epk-pdf-container" style={{ display: 'none' }}>
      {/* CSS for PDF styling */}
      <style jsx>{`
        @media print {
          .epk-pdf-container {
            display: block !important;
          }
          .no-print {
            display: none !important;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            line-height: 1.4;
            color: #000;
            background: white;
          }
          .pdf-page {
            width: 21cm;
            min-height: 29.7cm;
            padding: 2cm;
            margin: 0 auto;
            background: white;
            box-shadow: none;
            page-break-after: always;
            display: flex;
            flex-direction: column;
          }
          .pdf-page:last-child {
            page-break-after: avoid;
          }
          .pdf-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #000;
          }
          .pdf-artist-name {
            font-size: 36px;
            font-weight: 300;
            letter-spacing: 4px;
            margin: 10px 0;
          }
          .pdf-subtitle {
            font-size: 16px;
            color: #666;
            margin: 5px 0;
          }
          .pdf-section {
            margin-bottom: 25px;
          }
          .pdf-section-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 2px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
          }
          .pdf-content {
            font-size: 12px;
            line-height: 1.6;
          }
          .qr-placeholder {
            width: 100px;
            height: 100px;
            border: 2px dashed #666;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px 0;
            flex-direction: column;
            font-size: 10px;
            text-align: center;
            color: #666;
          }
          .track-list {
            display: grid;
            gap: 15px;
            margin: 20px 0;
          }
          .track-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 10px;
            border: 1px solid #eee;
          }
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
          }
          .artist-photo-container {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto 20px;
            border: 2px solid #000;
          }
        }
      `}</style>

      {/* Page 1: Cover & Artist Overview */}
      <div className="pdf-page">
        <div className="pdf-header">
          <div className="pdf-subtitle">Electronic Press Kit</div>
          <h1 className="pdf-artist-name">MIFZAL</h1>
          <div className="pdf-subtitle">Cinematic Progressive Composer</div>
        </div>

        <div className="artist-photo-container">
          <Image
            src="/mifzal.jpg"
            alt="Mifzal - Artist Photo"
            width={150}
            height={150}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="pdf-section">
          <h2 className="pdf-section-title">Artist Overview</h2>
          <div className="pdf-content">
            <p>
              Mifzal, 23, is an emerging composer from Malaysia, crafting cinematic progressive music that blends atmospheric textures with melodic guitar-driven and orchestral compositions. His work explores the intersection of ambient soundscapes and intricate progressive arrangements, creating immersive musical narratives.
            </p>
          </div>
        </div>

        <div className="pdf-section">
          <h2 className="pdf-section-title">Musical Vision</h2>
          <div className="pdf-content">
            <p>
              Mifzal creates music that transcends traditional genre boundaries, by weaving melodic guitar techniques with cinematic orchestrations to craft atmospheric and emotionally resonant pieces.
            </p>
            <p>
              The pinnacle of his artistic vision is "Sapphire", a musical exploration of cinematic melodies, orchestral arrangements and atmospherical textures. "Tales of Sapphire" represents this vision in its fullest form: a multi-movement suite that flows seamlessly from intimate guitar passages to sweeping orchestral arrangements, telling a complete narrative through instrumental composition alone.
            </p>
            <p>
              Through this conceptual framework, Mifzal aims to create music that serves as both technical showcase and emotional journey, inviting listeners into carefully crafted sounds with each listen.
            </p>
          </div>
        </div>

        <div className="pdf-section">
          <h2 className="pdf-section-title">For Fans Of</h2>
          <div className="pdf-content">
            <p>David Maxim Micic, Plini, Ludovico Einaudi, Ludwig Göransson, and Aaron Hibell.</p>
          </div>
        </div>
      </div>

      {/* Page 2: Featured Music & Demo Tracks */}
      <div className="pdf-page">
        <div className="pdf-header">
          <h1 className="pdf-artist-name">MIFZAL</h1>
          <div className="pdf-subtitle">Featured Music & Demo Tracks</div>
        </div>

        <div className="pdf-section">
          <h2 className="pdf-section-title">Featured Track</h2>
          <div className="pdf-content">
            <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Sapphire (Demo)</h3>
            
            <div className="track-item">
              <div className="qr-placeholder">
                <QrCode size={40} />
                <div>Scan to Listen</div>
                <div>Sapphire Demo</div>
              </div>
              <div>
                <p><strong>"Sapphire"</strong> is a cinematic, progressive guitar-driven track that blends atmospheric textures with melodic phrasing. The piece explores the emotional depth of natural imagery through intricate guitar layers, subtle percussion, and evolving harmonies.</p>
                <p>This track is the centerpiece of a larger conceptual suite, <strong>"Tales of Sapphire"</strong>, with supporting movements that extend the narrative into a full journey.</p>
                <p style={{ fontStyle: 'italic', color: '#666', fontSize: '11px' }}>
                  * This track is in demo form and has not yet been professionally mixed or mastered.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pdf-section">
          <h2 className="pdf-section-title">Extended Concept</h2>
          <div className="pdf-content">
            <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Tales of Sapphire - Complete Suite (Demo)</h3>
            
            <div className="track-item">
              <div className="qr-placeholder">
                <QrCode size={40} />
                <div>Scan to Listen</div>
                <div>Complete Suite</div>
              </div>
              <div>
                <p>This conceptual suite includes the main single <strong>"Sapphire"</strong> and supporting movements <strong>"Pieces of The Vague Ceremony"</strong> and <strong>"Vita"</strong>, which extend the narrative into a full immersive journey.</p>
              </div>
            </div>

            {upcomingReleases.map((release, index) => (
              <div key={index}>
                {release.tracks && (
                  <div className="space-y-2 mt-4">
                    <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>Track Listing:</h4>
                    {release.tracks.map((track, trackIndex) => (
                      <div key={trackIndex} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
                        <span style={{ fontSize: '12px' }}>
                          {String(trackIndex + 1).padStart(2, '0')}. {track}
                        </span>
                        <span style={{ fontSize: '11px', color: '#666' }}>
                          {release.individualDuration[trackIndex]}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <p style={{ fontStyle: 'italic', color: '#666', fontSize: '11px' }}>
              * These tracks are in demo form and have not yet been professionally mixed or mastered.
            </p>
          </div>
        </div>

        <div className="pdf-section">
          <h2 className="pdf-section-title">Released Tracks</h2>
          <div className="pdf-content">
            <p>For previously released tracks and full discography, visit the Music section at <strong>mifzal.co</strong></p>
          </div>
        </div>
      </div>

      {/* Page 3: Contact & Links */}
      <div className="pdf-page">
        <div className="pdf-header">
          <h1 className="pdf-artist-name">MIFZAL</h1>
          <div className="pdf-subtitle">Contact & Links</div>
        </div>

        <div className="contact-grid">
          <div className="pdf-section">
            <h2 className="pdf-section-title">Contact Information</h2>
            <div className="pdf-content">
              <div style={{ marginBottom: '15px' }}>
                <strong>Email:</strong><br />
                mifzalmusic@gmail.com
              </div>
              <div style={{ marginBottom: '15px' }}>
                <strong>Website:</strong><br />
                www.mifzal.co
              </div>
            </div>
          </div>

          <div className="pdf-section">
            <h2 className="pdf-section-title">Social Media & Streaming</h2>
            <div className="pdf-content">
              <div style={{ marginBottom: '10px' }}>
                <strong>Instagram:</strong> @mifzalv
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong>YouTube:</strong> @mifzals
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong>Spotify:</strong> Mifzal
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong>Bandcamp:</strong> mifzal.bandcamp.com
              </div>
            </div>
          </div>
        </div>


        <div className="pdf-section">
          <h2 className="pdf-section-title">Press Photos</h2>
          <div className="pdf-content">
            <p>High-resolution press photos available upon request.</p>
          </div>
        </div>

        <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: '10px', color: '#666', paddingTop: '20px', borderTop: '1px solid #eee' }}>
          <p>For label consideration only. Please do not share this link.</p>
          <p>Generated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}