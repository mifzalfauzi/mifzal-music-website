export default function TermsOfService() {
  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-4">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
        
        <div className="  rounded-lg p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              By accessing this website, you agree to be bound by these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Use License</h2>
            <p className="text-sm leading-relaxed text-muted-foreground mb-3">
              Personal, non-commercial use is permitted. You may not:
            </p>
            <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
              <li>• Copy or modify content</li>
              <li>• Use for commercial purposes</li>
              <li>• Remove copyright notices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Music & Content</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              All music and creative content is the exclusive property of Mifzal. Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Disclaimer</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Content is provided "as is" without warranties. We disclaim all implied warranties of merchantability or fitness.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Limitations</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We are not liable for damages arising from website use, including data loss or business interruption.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Questions? Contact us through this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}