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
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Clients</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <a href="#waitlist" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Join Waitlist
          </a>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 diagonal-stripes">
        <video playsinline autoplay muted loop poster="public/images/Untitled design.gif" id="bgvid">
          <source src="public/videos/Firefly A cluster of light blue lines glide softly across the screen diagonal, like shooting stars. .mp4" type="video/mp4" />
        </video>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Now accepting early access signups
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground text-center leading-tight tracking-tight mb-6 text-balance">
            Cloud to Embedded<br />
            <span className="text-muted-foreground">Smart Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Bridging Azure cloud infrastructure with Platform.io embedded systems. We deliver end-to-end IoT solutions for smart offices and property management.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Innovation First
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Reliable Systems
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Sustainable Tech
            </div>
          </div>

          <form id="waitlist" className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-16">
            <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 px-5 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
            <button type="submit" className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
              Join the Waitlist
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
              <img src="/smart-home-thermostat-display-showing-temperature-.jpg" alt="Smart Thermostat" className="w-full h-48 object-cover rounded-xl" />
            </div>
            <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
              <img src="/modern-home-heating-control-panel-with-touchscreen.jpg" alt="Control Panel" className="w-full h-48 object-cover rounded-xl" />
            </div>
            <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
              <img src="/white-honeywell-smart-radiator-valve-device-with-d.jpg" alt="Smart Valve" className="w-full h-48 object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Full-stack IoT development from cloud infrastructure to embedded firmware</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Azure Cloud Development</h3>
              <p className="text-muted-foreground leading-relaxed">Scalable cloud infrastructure using Microsoft Azure IoT Hub, Functions, and data analytics pipelines for real-time device management.</p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Embedded Firmware</h3>
              <p className="text-muted-foreground leading-relaxed">Custom firmware development with Platform.io for ESP32, STM32, and Nordic chips. OTA updates and secure boot implementations.</p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Signal Protocols</h3>
              <p className="text-muted-foreground leading-relaxed">Implementation of MQTT, CoAP, and custom signal initiation protocols. Secure device-to-cloud communication with TLS encryption.</p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">System Integration</h3>
              <p className="text-muted-foreground leading-relaxed">End-to-end integration connecting smart meters, sensors, and actuators with building management and property systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-6 bg-background diagonal-stripes-strong">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-muted-foreground">Smart solutions powering property management and office automation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-center gap-1 mb-6">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              <blockquote className="text-foreground text-lg mb-6 leading-relaxed">&ldquo;Cluster Technology transformed our property portfolio with their smart metering solution. Energy costs down 34% across 200+ residential units.&rdquo;</blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-muted-foreground">PM</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Patrick Morrison</div>
                  <div className="text-sm text-muted-foreground">CTO, PROPEX Property Management</div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-center gap-1 mb-6">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              <blockquote className="text-foreground text-lg mb-6 leading-relaxed">&ldquo;The smart office integration was seamless. Occupancy sensors and climate control now work in perfect harmony. Our team loves the automated environment.&rdquo;</blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-muted-foreground">SK</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sarah Kennedy</div>
                  <div className="text-sm text-muted-foreground">Facilities Director, Smart Offices Dublin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">Choose the plan that fits your project scale</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Starter</h3>
              <p className="text-muted-foreground text-sm mb-6">For pilot projects and prototypes</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$2,500</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Up to 100 devices
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Azure IoT Hub setup
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Basic firmware template
                </li>
              </ul>
              <a href="#waitlist" className="block w-full py-3 text-center rounded-full border border-border text-foreground font-medium hover:bg-muted transition-colors">Get Started</a>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-medium">Most Popular</div>
              <h3 className="text-lg font-semibold mb-2">Professional</h3>
              <p className="text-primary-foreground/70 text-sm mb-6">For growing deployments</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$7,500</span>
                <span className="text-primary-foreground/70">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-primary-foreground/90">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Up to 1,000 devices
                </li>
                <li className="flex items-center gap-3 text-sm text-primary-foreground/90">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Custom firmware development
                </li>
                <li className="flex items-center gap-3 text-sm text-primary-foreground/90">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  OTA update infrastructure
                </li>
              </ul>
              <a href="#waitlist" className="block w-full py-3 text-center rounded-full bg-primary-foreground text-primary font-medium hover:opacity-90 transition-opacity">Get Started</a>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Enterprise</h3>
              <p className="text-muted-foreground text-sm mb-6">For large-scale operations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Unlimited devices
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Dedicated engineering team
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Custom protocol development
                </li>
              </ul>
              <a href="#contact" className="block w-full py-3 text-center rounded-full border border-border text-foreground font-medium hover:bg-muted transition-colors">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-background diagonal-stripes">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Ready to Transform Your<br /><span className="text-muted-foreground">Infrastructure?</span></h2>
          <p className="text-lg text-muted-foreground mb-10">Join our waitlist to be first in line when we launch. Early adopters receive exclusive pricing and priority onboarding.</p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 px-5 py-3.5 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
            <button type="submit" className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">Join the Waitlist</button>
          </form>
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
              <p className="text-primary-foreground/70 text-sm leading-relaxed">Bridging cloud and embedded systems for the smart building industry.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Azure Development</a></li>
                <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Firmware Engineering</a></li>
                <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Signal Protocols</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</a></li>
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
            <p className="text-sm text-primary-foreground/60">&copy; 2026 Cluster Technology. All rights reserved.</p>
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
