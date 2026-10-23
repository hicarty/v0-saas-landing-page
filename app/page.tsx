const services = [
  { modifier: "assembly", label: <>PCB &amp;<br />Assembly</>, title: "PCB & Electronics Assembly", description: "Through-hole and SMT assembly of prototype boards, wire harnesses and mechanical sub-assemblies. Single units to short batches, with BOM management and component sourcing." },
  { modifier: "qa", label: <>QA &amp;<br />Testing</>, title: "Quality Assurance & Testing", description: "Functional testing against your spec, visual inspection to IPC-A-610, environmental stress screening, defect logging and root-cause failure analysis." },
  { modifier: "firmware", label: <>Firmware<br />Bring-up</>, title: "Firmware Flashing & Bring-up", description: "First flash, hardware bring-up and first-boot validation of embedded boards, through to a connected unit talking to your cloud." },
  { modifier: "dfm", label: <>DFM &amp;<br />Enclosures</>, title: "DFM & Enclosure Review", description: "Design-for-manufacture review of housings and connected hardware: tolerances, sealing, IP rating and assembly sequence for small-batch production." },
  { modifier: "sensors", label: <>Sensor<br />Prototyping</>, title: "Sensor Prototyping", description: "Smart-building controls, water quality, flow and environmental monitoring devices, assembled and calibrated for the field rather than the lab." },
  { modifier: "reports", label: <>Sample<br />Reports</>, title: "Sample Reports & Documentation", description: "Build records, test reports and handover packs for every batch, ready for investor review, certification or engineering sign-off." },
]

const steps = [
  { tag: "Scoping", title: "Brief & scope", description: "You walk us through the build, the BOM and what done looks like. We scope the days and confirm before any work starts." },
  { tag: "Build", title: "Assembly", description: "We assemble to your specification and flag component or design issues as they arise, not after the fact." },
  { tag: "Verify", title: "Test & QA", description: "Functional testing, inspection and defect resolution. Pass, fail and the path to resolution are all documented." },
  { tag: "Handover", title: "Report & sign-off", description: "The sample comes back with its BOM, QA report and build record, ready for the demo, field trial or certification." },
]

const convictions = [
  { title: "Connected, by design", description: "Devices only matter once they work together. Every sample is tested as part of the system it will live in, not as a board on a bench." },
  { title: "Collaboration for our ecosystem", description: "Haven works inside your team: your standups, your tools, your suppliers. What we learn on the build is shared, not held back." },
  { title: "Water and sustainability", description: "Monitoring and conserving the UK and Ireland's waters is where Cluster is most at home, and where we prioritise our time." },
]

const testimonials = [
  { quote: "Haven integrated into our engineering team within a day. The QA reports were cleaner than anything we'd produced internally, and the build turned around in half the time we'd budgeted.", initials: "SD", name: "Software Director", company: "Transpose Software" },
  { quote: "The sensor prototype came back with a test report I could put in front of our investor. Every failure was documented. Every fix was explained.", initials: "HL", name: "Hardware Lead", company: "Environmental Monitoring Startup" },
]

const rates = [
  { title: "Assembly", description: "PCB, harness and mechanical builds" },
  { title: "QA & Testing", description: "Functional, inspection and failure analysis" },
  { title: "Documentation", description: "Build records and test reports" },
]

function Check({ className = "w-5 h-5 text-accent" }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/cluster-logo.png" alt="Cluster Technology" width={40} height={40} className="object-contain" />
            <span className="text-lg font-semibold text-foreground">Cluster Technology</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process</a>
            <a href="#founder" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Founder</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Make an Enquiry
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden pt-32 pb-20 py-24 px-6 bg-cover bg-center diagonal-stripes">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/untitled-design.gif"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Firefly A cluster of light blue lines glide softly across the screen diagonal, like shooting stars. .mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Assembly &amp; QA · Engineering Samples
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground text-center leading-tight tracking-tight mb-6 text-balance">
            Engineering Samples<br />
            <span className="text-muted-foreground">for the Connected World</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Cluster Technology is one engineering agency, founded by Haven Carty. We assemble, test and quality-assure engineering samples for teams researching and designing connected devices.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check />
              Transparent £280/day
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check />
              Documented QA on every build
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check />
              UK &amp; Ireland on-site
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-16">
            <a href="#contact" className="w-full sm:w-auto text-center bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
              Make an Enquiry
            </a>
            <a href="#pricing" className="w-full sm:w-auto text-center bg-card text-foreground border border-border px-8 py-3 rounded-full text-sm font-medium hover:bg-muted transition-colors whitespace-nowrap">
              See Pricing
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl shadow-sm border border-border">
              <img src="/smart-home-thermostat-display-showing-temperature-.jpg" alt="Connected thermostat sample" className="w-full h-48 object-cover rounded-xl" />
            </div>
            <div className="bg-card rounded-2xl shadow-sm border border-border">
              <img src="/modern-home-heating-control-panel-with-touchscreen.jpg" alt="Connected control panel sample" className="w-full h-48 object-cover rounded-xl" />
            </div>
            <div className="bg-card rounded-2xl shadow-sm border border-border">
              <img src="/white-honeywell-smart-radiator-valve-device-with-d.jpg" alt="Connected radiator valve sample" className="w-full h-48 object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="founder" className="founder-section">
        <div className="founder-inner">
          <p className="eyebrow">About the founder</p>
          <h2>Haven Carty</h2>
          <p className="founder-role">Founder &amp; prototype engineer, Cluster Technology</p>
          <p>Haven started Cluster Technology because connected hardware needs someone who works inside the problem, not around it. Haven joins your R&amp;D team, builds the sample, and proves it works before it goes in front of investors, field trials or certification.</p>
          <p>Passionate about Ireland and the UK&apos;s waters, Haven works at the intersection of open-water swimming, surfing, and ecosystem sustainability.</p>
          <div className="founder-convictions">
            {convictions.map((conviction) => (
              <div key={conviction.title} className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{conviction.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{conviction.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="services-kicker">What we do</p>
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Our Services</h2>
            <p className="text-lg text-primary-foreground/70">Hands-on research and design support for connected devices, from first board to signed-off sample.</p>
          </div>

          <div className="services-grid services-grid--three">
            {services.map((service) => (
              <article key={service.modifier} className="service-item">
                <div className={`service-cube service-cube--${service.modifier}`}>
                  <div className="service-cube__stage"><div className="service-cube__body"><div className="service-cube__face service-cube__face--front">{service.label}</div><div className="service-cube__face service-cube__face--top" /><div className="service-cube__face service-cube__face--right" /></div></div>
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mt-8 mb-2">{service.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">From Brief to Signed-off Sample</h2>
            <p className="text-lg text-muted-foreground">A four-step model built around your engineering cadence, not ours</p>
          </div>

          <ol className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <li key={step.title} className="bg-background rounded-2xl p-8 border border-border">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold mb-6">{index + 1}</div>
                <p className="eyebrow mb-2">{step.tag}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-6 bg-background bg-[url('/images/Untitled design.gif')] bg-cover bg-center diagonal-stripes-strong">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Built With Teams Who Ship Real Hardware</h2>
            <p className="text-lg text-muted-foreground">Engineering samples for connected products across the UK and Ireland</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.initials} className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <blockquote className="text-foreground text-lg mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-muted-foreground">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">One Day Rate, Every Service</h2>
            <p className="text-lg text-muted-foreground">£280 a day across all engineering sample work. Scoped upfront, no variable billing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {rates.map((rate) => (
              <div key={rate.title} className="bg-background rounded-2xl p-8 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">{rate.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{rate.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">£280</span>
                  <span className="text-muted-foreground">/day</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    Scoped before work starts
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    Daily progress on request
                  </li>
                </ul>
                <a href="#contact" className="block w-full py-3 text-center rounded-full border border-border text-foreground font-medium hover:bg-muted transition-colors">Make an Enquiry</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-background bg-[url('/images/Untitled design.gif')] bg-cover bg-center diagonal-stripes">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Tell Us About<br /><span className="text-muted-foreground">Your Build</span></h2>
          <p className="text-lg text-muted-foreground mb-10">Whether you have a BOM ready or just a sketch on paper, get in touch. We&apos;ll come back with a realistic scope and a clear day-rate breakdown before any work starts.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8">
            <a href="mailto:havencarty@proton.me?subject=Engineering%20sample%20enquiry" className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">Email havencarty@proton.me</a>
          </div>
          <p className="text-sm text-muted-foreground">UK &amp; Ireland · On-site available · £280/day</p>
        </div>
      </section>

      <footer className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/cluster-logo.png" alt="Cluster Technology" width={40} height={40} className="object-contain brightness-0 invert" />
                <span className="text-lg font-semibold">Cluster Technology</span>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">Engineering sample assembly and QA for the research and design of connected devices.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Sample Assembly</a></li>
                <li><a href="#services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">QA &amp; Testing</a></li>
                <li><a href="#services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Firmware Bring-up</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#founder" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Founder</a></li>
                <li><a href="#process" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Process</a></li>
                <li><a href="#contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">&copy; 2026 Haven Carty · Cluster Technology. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
