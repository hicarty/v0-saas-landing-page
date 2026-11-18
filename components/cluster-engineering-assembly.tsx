import Link from "next/link"
import { clusterDivisions } from "@/lib/cluster-divisions"

const latticePositions = ["lattice-community", "lattice-learning", "lattice-experiences", "lattice-research", "lattice-consultancy", "lattice-business", "lattice-product"]

export function ClusterEngineeringAssembly() {
  return (
    <section id="what-we-do" className="assembly-section" aria-labelledby="assembly-title">
      <div className="assembly-intro">
        <p className="assembly-eyebrow">Cluster Engineering Sample Assembly</p>
        <h2 id="assembly-title">Not a solo star. A constellation.</h2>
        <p>We coordinate across Cluster&apos;s talent studio: seven divisions, connected by shared purpose and brought together around the work that matters.</p>
      </div>
      <div className="lattice-wrap">
        <div className="division-lattice" aria-label="Cluster divisions">
          {clusterDivisions.map((division, index) => (
            <Link
              key={division.slug}
              href={`/divisions/${division.slug}`}
              className={`lattice-cube ${latticePositions[index]} lattice-cube--${division.color}${division.central ? " lattice-cube--central" : ""}`}
              aria-label={`${division.name}: view division details`}
            >
              <span className="lattice-cube__face" />
              <span className="lattice-cube__label">{division.shortName}</span>
              {division.central && <span className="lattice-cube__influence">The kingdom · Cluster</span>}
            </Link>
          ))}
        </div>
        <aside className="lattice-caption">
          <span className="lattice-caption__mark" aria-hidden="true">+</span>
          <p><strong>One connected studio.</strong> Select a division to explore its work and follow through to its live destination.</p>
        </aside>
      </div>
    </section>
  )
}

export default ClusterEngineeringAssembly
