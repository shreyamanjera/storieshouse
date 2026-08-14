import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'Contact Elara — Wedding Photography' };

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-topbar"><Link className="wordmark" href="/"><Image className="brand-logo" src="/storieshouse-black-cropped.png" alt="Stories House" width={160} height={69} priority /></Link><Link className="contact-back" href="/">← BACK TO HOME</Link></header>
      <section className="contact-hero">
        <div className="contact-hero-copy"><p className="eyebrow">LET&apos;S CREATE SOMETHING BEAUTIFUL</p><h1>Tell me about<br /><em>your love story.</em></h1><p>Share the celebration you are dreaming about. I&apos;ll be in touch within two working days with availability and a tailored collection.</p><div className="contact-details"><a href="mailto:hello@elarastudio.com">hello@elarastudio.com</a><span>·</span><a href="tel:+919876543210">+91 98765 43210</a></div></div>
        <div className="contact-hero-image"><Image src="/package-complete-wedding.jpg" alt="Newlyweds walking beneath floral decorations" fill priority sizes="(max-width: 720px) 100vw, 45vw" /></div>
      </section>
      <section className="contact-form-section">
        <div><p className="eyebrow">ENQUIRY FORM</p><h2>A few lovely<br />details.</h2></div>
        <form className="contact-form">
          <label>Your name<input name="name" type="text" placeholder="Your full name" required /></label>
          <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
          <label>Phone number<input name="phone" type="tel" placeholder="+91" /></label>
          <label>Wedding date<input name="date" type="date" /></label>
          <label>Wedding location<input name="location" type="text" placeholder="City and venue, if known" /></label>
          <label>Package you&apos;re interested in<select name="package" defaultValue=""><option value="" disabled>Select a package</option><option>Sangeet</option><option>Haldi</option><option>Destination</option><option>Complete Wedding</option><option>Pre-Wedding</option><option>Custom collection</option></select></label>
          <label className="contact-form-wide">Tell us a little more<textarea name="details" rows="4" placeholder="Venue, guest count, your ideas, or anything else you would like us to know…" /></label>
          <button type="submit">SEND MY ENQUIRY <span>↗</span></button>
        </form>
      </section>
    </main>
  );
}
