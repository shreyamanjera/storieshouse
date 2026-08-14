import Image from "next/image";
import Link from "next/link";
import { packages } from "../data/packages";

export const metadata = { title: "Packages — Stories House" };

export default function PackagesPage() {
  return <main className="packages-page"><header className="inner-topbar"><Link className="wordmark" href="/"><Image className="brand-logo" src="/storieshouse-black-cropped.png" alt="Stories House" width={160} height={69} priority /></Link><nav className="site-nav" aria-label="Main navigation"><Link href="/">HOME</Link><Link href="/#studio-experience">EXPERIENCE</Link><Link href="/packages">PACKAGES</Link><Link href="/contact">CONTACT</Link></nav></header><section className="packages-page-hero"><p className="eyebrow">STORIES HOUSE COLLECTIONS</p><h1>Every chapter,<br /><em>beautifully held.</em></h1><p>Thoughtful photography collections for every moment that brings your people together.</p></section><section className="packages-page-grid" aria-label="Photography package collection">{packages.map((item) => <Link key={item.slug} href={`/packages/${item.slug}`} className="packages-page-card"><Image src={item.image} alt={`${item.name} photography`} fill sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 25vw" /><span className="packages-page-card-overlay" /><div><p>PHOTOGRAPHY PACKAGE</p><h2>{item.name}</h2><span>EXPLORE ↗</span></div></Link>)}</section></main>;
}
