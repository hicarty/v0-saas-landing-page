"use client"

import { useState } from "react"

const divisions = [
  { name: "Community", url: "https://cluster.church", description: "The central influence: community connects and coordinates the other six divisions through kingdom Cluster.", central: true },
  { name: "Consultancy", url: "https://havencarty.wordpress.com", description: "AgilePM consultancy for clear direction, practical delivery, and better decisions." },
  { name: "Learning & Development", url: "https://vle.havencarty.workers.dev", description: "Learning environments and development pathways that make capability shareable." },
  { name: "New Business", url: "https://hicarty.github.io/havencarty", description: "When given a clear budget and brief for production, we turn opportunity into a focused plan." },
  { name: "Product Delivery", url: "https://havencarty.havencarty.workers.dev", description: "From bedroom founder to coordinated industry rollout, we help products move with purpose." },
  { name: "Experiences & PR", url: "https://claude.ai/artifact/4n83Qy4GhM9B2BMfHqKqwk", description: "Experiences, storytelling, and public relations that bring people into the work." },
  { name: "Systems Integration", url: "https://cluster.church", description: "Cross-discipline systems thinking that helps the whole constellation work as one." },
]

export function ClusterEngineeringAssembly() {
  const [active, setActive] = useState(0)
  const selected = divisions[active]

  return (
    <section id="what-we-do" className="assembly-section" aria-labelledby="assembly-title">
      <div className="assembly-intro">
        <p className="eyebrow">Cluster Engineering Sample Assembly</p>
        <h2 id="assembly-title">Not a solo star. A constellation.</h2>
        <p>We coordinate across Cluster&apos;s talent studio: seven divisions, connected by shared purpose and brought together around the work that matters.</p>
      </div>
      <div className="assembly-layout">
        <div className="constellation" aria-label="Seven Cluster divisions">
          <div className="constellation-line line-one" aria-hidden="true" />
          <div className="constellation-line line-two" aria-hidden="true" />
          {divisions.map((division, index) => (
            <button
              key={division.name}
              type="button"
              className={`cube cube-${index + 1}${division.central ? " cube-community" : ""}${active === index ? " is-active" : ""}`}
              onClick={() => setActive(index)}
              onDoubleClick={() => window.open(division.url, "_blank", "noopener,noreferrer")}
              aria-pressed={active === index}
              aria-label={`${division.name}. Double click to open ${division.url}`}
            >
              <span className="cube-top" aria-hidden="true" />
              <span className="cube-front" aria-hidden="true" />
              <span className="cube-side" aria-hidden="true" />
              <span className="cube-label">{division.name}</span>
            </button>
          ))}
        </div>
        <article className="assembly-detail" aria-live="polite">
          <p className="eyebrow">Selected division</p>
          <h3>{selected.name}</h3>
          <p>{selected.description}</p>
          <p className="assembly-hint">Click to explore. Double click to visit.</p>
          <a href={selected.url} target="_blank" rel="noopener noreferrer">Open {selected.name} <span aria-hidden="true">↗</span></a>
        </article>
      </div>
    </section>
  )
}

export default ClusterEngineeringAssembly

