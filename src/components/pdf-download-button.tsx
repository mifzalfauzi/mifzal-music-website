"use client"

import { useState } from "react"
import { Download, ExternalLink } from "lucide-react"

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
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="bg-background text-white rounded-lg p-6 w-[90%] max-w-md">
            <h2 className="text-lg font-bold mb-4">EPK PDF</h2>
            <p className="mb-6">
              Would you like to view the EPK in a new tab or download it directly?
            </p>

            <div className="flex justify-end space-x-3">
              {/* Cancel Button */}
              <button
                className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
                onClick={closeModal}
              >
                Cancel
              </button>

              {/* View in New Tab */}
              <a
                href="/_EPK.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition flex items-center space-x-1"
                onClick={closeModal}
              >
                <span>View in New Tab</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Direct Download */}
              <a
                href="/Mifzal_EPK.pdf"
                download="Mifzal_EPK.pdf"
                className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 transition flex items-center space-x-1"
                onClick={closeModal}
              >
                <span>Download</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
