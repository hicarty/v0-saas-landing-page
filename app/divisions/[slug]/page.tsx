import Link from "next/link"
import { notFound } from "next/navigation"
import { clusterDivisions } from "@/lib/cluster-divisions"

export function generateStaticParams() {
  return clusterDivisions.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const division = clusterDivisions.find((item) => item.slug === slug)
  return { title: division ? `${division.name} | Cluster Technology` : "Division | Cluster Technology" }
}

export default async function DivisionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const division = clusterDivisions.find((item) => item.slug === slug)
  if (!division) notFound()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3 text-foreground no-underline">
            <img src="/images/cluster-logo.png" alt="" width={40} height={40} className="object-contain" />
            <span className="text-lg font-semibold">Cluster Technology</span>
          </Link>
          <Link href="/#what-we-do" className="text-sm text-muted-foreground transition-colors hover:text-foreground">All divisions</Link>
        </nav>
      </header>
      <main className={`division-detail division-detail--${division.color}`}>
      <div className="division-detail__inner">
        <Link className="division-detail__back" href="/#what-we-do">← All Cluster divisions</Link>
        <p className="division-detail__eyebrow">Cluster Technology · Division</p>
        <h1>{division.name}</h1>
        <p className="division-detail__description">{division.description}</p>
        <div className="division-detail__actions">
          {division.externalUrl ? (
            <a href={division.externalUrl} target="_blank" rel="noopener noreferrer" className="division-detail__primary">Visit {division.name}<span aria-hidden="true"> ↗</span></a>
          ) : (
            <Link href="/#process" className="division-detail__primary">Explore sample assembly</Link>
          )}
          <Link href="/#contact" className="division-detail__secondary">Make an enquiry</Link>
        </div>
        {division.services?.length ? (
          <section className="division-detail__section" aria-labelledby="division-services-title">
            <h2 id="division-services-title">{division.servicesHeading}</h2>
            <div className="division-detail__services">
              {division.services.map((service) => (
                <article className="division-detail__service" key={service.title}>
                  <span>{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
        {division.prices?.length ? (
          <section className="division-detail__section" aria-labelledby="division-pricing-title">
            <h2 id="division-pricing-title">Transparent pricing</h2>
            <div className="division-detail__prices">
              {division.prices.map((price) => (
                <article className="division-detail__price" key={`${price.amount}-${price.label}`}>
                  <strong>{price.amount}</strong><span>{price.unit}</span><p>{price.label}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
        {division.process ? (
          <section className="division-detail__section" aria-labelledby="division-process-title">
            <h2 id="division-process-title">{division.process.heading}</h2>
            <ol className="division-detail__steps">
              {division.process.steps.map((step, index) => (
                <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>
              ))}
            </ol>
          </section>
        ) : null}
        <p className="division-detail__note">This division is part of Cluster&apos;s connected talent studio: seven disciplines working together, not in isolation.</p>
      </div>
      </main>
    </>
  )
}
