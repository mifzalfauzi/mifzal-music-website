export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
        
        <div className="  rounded-lg p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <p className="text-sm leading-relaxed text-muted-foreground mb-3">
              We collect information when you contact us, subscribe to our newsletter, or interact with our content:
            </p>
            <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
              <li>• Contact information (email, name)</li>
              <li>• Messages and feedback</li>
              <li>• Newsletter preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
            <p className="text-sm leading-relaxed text-muted-foreground mb-3">We use your information to:</p>
            <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
              <li>• Respond to inquiries</li>
             
              <li>• Improve our services</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Information Sharing</h2>
            <p className="text-sm leading-relaxed text-muted-foreground mb-3">
              We don't sell your personal information. We may share it only:
            </p>
            <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
              <li>• With your consent</li>
              <li>• To comply with legal obligations</li>
              <li>• To protect our rights and safety</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Cookies & Tracking</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may use cookies to enhance your browsing experience. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Our website links to music platforms (Spotify, YouTube, etc.) with their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Security</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We implement security measures to protect your information from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
            <p className="text-sm leading-relaxed text-muted-foreground mb-3">You have the right to:</p>
            <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
              <li>• Access your personal information</li>
              <li>• Correct inaccurate information</li>
                <li>• Request deletion of your information</li>
               
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This website is not intended for children under 13. We don't knowingly collect information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Policy Changes</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may update this policy occasionally. Changes will be posted here with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Questions about this Privacy Policy? Contact us through this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}