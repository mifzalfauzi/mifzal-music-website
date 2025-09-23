"use client"

import { useState } from "react"
import { Download, ExternalLink, X } from "lucide-react"

export default function PDFDownloadButton() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      {/* Main Button */}
      <button
        onClick={openModal}
        className="flex items-center space-x-1 text-muted-foreground hover:text-white/80 transition-colors cursor-pointer"
        title="Download EPK as PDF"
      >
        <span>Download EPK</span>
        <Download className="w-4 h-4" />
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-background border border-border rounded-xl shadow-2xl p-0 w-[90%] max-w-md overflow-hidden">
            {/* Header with close button */}
            <div className="relative bg-background border-b border-border p-6">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted/20 transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-bold tracking-wide text-foreground">EPK PDF Options</h2>
              <p className="text-muted-foreground text-sm mt-1">Choose how you'd like to access the EPK</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 bg-background">
              {/* View in New Tab */}
              <a
                href="/_EPK.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 bg-muted/10 border border-border rounded-lg hover:bg-muted/20 transition-all group cursor-pointer"
                onClick={closeModal}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary rounded-lg">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">View in Browser</div>
                    <div className="text-sm text-muted-foreground">Open EPK in a new tab</div>
                  </div>
                </div>
                <div className="text-primary group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </a>

              {/* Direct Download */}
              <a
                href="/Mifzal_EPK.pdf"
                download="Mifzal_EPK.pdf"
                className="w-full flex items-center justify-between p-4 bg-muted/10 border border-border rounded-lg hover:bg-muted/20 transition-all group cursor-pointer"
                onClick={closeModal}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-foreground rounded-lg">
                    <Download className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Download PDF</div>
                    <div className="text-sm text-muted-foreground">Save EPK to your device</div>
                  </div>
                </div>
                <div className="text-foreground group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
