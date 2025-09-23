"use client"

import { Download } from "lucide-react"
import { useState, useEffect } from "react"

export default function PDFDownloadButton() {
  const [isClient, setIsClient] = useState(false)
  const [PDFDownloadLink, setPDFDownloadLink] = useState<any>(null)
  const [EPKPDFDocument, setEPKPDFDocument] = useState<any>(null)

  useEffect(() => {
    setIsClient(true)
    
    // Dynamic import to avoid SSR issues
    const loadPDFComponents = async () => {
      try {
        const { PDFDownloadLink: PDFLink } = await import('@react-pdf/renderer')
        const { EPKPDFDocument: PDFDoc } = await import('@/components/epk-pdf-renderer')
        
        setPDFDownloadLink(() => PDFLink)
        setEPKPDFDocument(() => PDFDoc)
      } catch (error) {
        console.error('Failed to load PDF components:', error)
      }
    }

    loadPDFComponents()
  }, [])

  if (!isClient || !PDFDownloadLink || !EPKPDFDocument) {
    return (
      <button
        className="flex items-center space-x-1 text-muted-foreground hover:text-white/80 transition-colors cursor-pointer"
        title="Download EPK as PDF"
        disabled
      >
        <span>Loading PDF...</span>
        <Download className="w-4 h-4" />
      </button>
    )
  }

  return (
    <PDFDownloadLink
      document={<EPKPDFDocument />}
      fileName="Mifzal_EPK.pdf"
      className="flex items-center space-x-1 text-muted-foreground hover:text-white/80 transition-colors cursor-pointer"
      title="Download EPK as PDF"
    >
      {({ blob, url, loading, error }: any) => (
        <>
          <span>{loading ? 'Generating PDF...' : 'Download EPK'}</span>
          <Download className="w-4 h-4" />
        </>
      )}
    </PDFDownloadLink>
  )
}