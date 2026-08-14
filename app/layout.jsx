import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Elara — Wedding Photography",
  description: "A fine-art wedding photography experience."
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}<footer className="site-footer"><div className="site-footer-frame"><div className="site-footer-brand">STORIES HOUSE PHOTOGRAPHY</div><nav className="site-footer-nav" aria-label="Footer navigation"><Link href="/">HOME</Link><a href="/#studio-experience">EXPERIENCE</a><Link href="/packages">PACKAGES</Link><Link href="/contact">CONTACT</Link></nav><div className="site-footer-contact"><a href="mailto:hello@storieshouse.events">hello@storieshouse.events</a><a href="tel:+919876543210">+91 98765 43210</a></div><a className="site-footer-instagram" href="https://instagram.com/storieshouse.events" target="_blank" rel="noreferrer">INSTAGRAM <span>@storieshouse.events</span> ↗</a><Link className="site-footer-book" href="/contact">BOOK YOUR DATE <span>↗</span></Link><p className="site-footer-credit">© {new Date().getFullYear()} STORIES HOUSE · ALL RIGHTS RESERVED</p></div></footer></body></html>;
}
