import Image from "next/image";
import Link from "next/link";
import { getPackage, packages } from "../../data/packages";

export function generateStaticParams() { return packages.map(({ slug }) => ({ slug })); }

export default async function PackageDetailPage({ params }) {
  const { slug } = await params;
  const item = getPackage(slug);
  if (!item) return <main className="package-not-found"><h1>Collection not found.</h1><Link href="/packages">BACK TO PACKAGES</Link></main>;
  return <main className="package-detail"><header className="inner-topbar inner-topbar-light"><Link className="wordmark" href="/"><Image className="brand-logo" src="/storieshouse-white-cropped.png" alt="Stories House" width={160} height={69} priority /></Link><nav className="site-nav" aria-label="Main navigation"><Link href="/">HOME</Link><Link href="/#studio-experience">EXPERIENCE</Link><Link href="/packages">PACKAGES</Link><Link href="/contact">CONTACT</Link></nav></header><section className="package-detail-hero"><Image src={item.image} alt={`${item.name} wedding photography`} fill priority sizes="100vw" /><div className="package-detail-shade" /><div className="package-detail-hero-copy"><p className="eyebrow">STORIES HOUSE COLLECTION</p><h1>{item.name}</h1><p>{item.description}</p></div></section><section className="package-detail-intro"><div><p className="eyebrow">THE COLLECTION</p><h2>A story with<br /><em>room to unfold.</em></h2></div><div><p>{item.longDescription}</p><dl><div><dt>STARTING AT</dt><dd>{item.price}</dd></div><div><dt>IDEAL FOR</dt><dd>{item.name} celebrations</dd></div></dl><Link className="button" href={`/contact?package=${encodeURIComponent(item.name)}`}>ENQUIRE ABOUT THIS PACKAGE ↗</Link></div></section><section className="package-detail-inclusions"><p className="eyebrow">WHAT&apos;S INCLUDED</p><div>{item.inclusions.map((inclusion, index) => <p key={inclusion}><span>0{index + 1}</span>{inclusion}</p>)}</div></section><p className="package-detail-back"><Link href="/packages">← VIEW ALL PACKAGES</Link></p></main>;
}
