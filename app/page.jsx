import Image from "next/image";
import Link from "next/link";
import DepthCarousel from "./components/DepthCarousel";
import PackagesCarousel from "./components/PackagesCarousel";
import { packages } from "./data/packages";

const imageProps = { sizes: "(max-width: 720px) 100vw, 50vw" };

const galleryItems = [
  { image: "/package-complete-wedding.jpg", alt: "Aditi and Rohan", title: "Aditi & Rohan", href: "/stories/aditi-rohan" },
  { image: "/client-story-hands.jpg", alt: "Ishita and Veer", title: "Ishita & Veer", href: "/stories/ishita-veer" },
  { image: "/package-engagement.jpg", alt: "Meera and Arjun", title: "Meera & Arjun", href: "/stories/meera-arjun" },
  { image: "/package-reception.jpg", alt: "Anaya and Karan", title: "Anaya & Karan", href: "/stories/anaya-karan" },
  { image: "/package-haldi-new.jpg", alt: "Riya and Kabir", title: "Riya & Kabir", href: "/stories/riya-kabir" }
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <a className="wordmark" href="#home"><Image className="brand-logo" src="/storieshouse-white-cropped.png" alt="Stories House" width={160} height={69} priority /></a>
        <nav className="site-nav" aria-label="Main navigation"><a href="#home">HOME</a><a href="#studio-experience">EXPERIENCE</a><Link href="/packages">PACKAGES</Link><Link href="/contact">CONTACT</Link></nav>
      </header>
      <main id="home">
        <section className="hero">
          <div className="hero-background"><Image src="/home-hero-clean.png" alt="Bride and groom celebrating their wedding ceremony" fill priority sizes="100vw" /></div>
          <div className="hero-copy"><p className="eyebrow">STORIES HOUSE WEDDINGS</p><h1>Every love story,<br />told in its own <em>way.</em></h1><p className="hero-description">Capturing Your Forever, One Frame at a Time</p></div>
        </section>
        <div className="hero-breath" aria-hidden="true" />
        <section className="experience" id="experience"><div className="experience-grid"><div className="frame experience-photo"><Image src="/venue.jpg" alt="Romantic wedding ceremony setting" fill {...imageProps} /></div><div className="experience-copy"><p className="eyebrow">THE EXPERIENCE</p><h2>For the love<br />that feels like <em>home.</em></h2><p className="body-copy">A relaxed, tailored experience for couples who care more about how a moment feels than how perfectly it is posed.</p></div></div></section>
        <section className="gallery-showcase gallery-showcase-stories" aria-labelledby="gallery-title">
          <div className="gallery-showcase-background" aria-hidden="true"><Image src="/packages-ceremony-background.png" alt="" fill sizes="100vw" /></div>
          <div className="gallery-showcase-content"><div className="gallery-showcase-heading"><p className="eyebrow">CLIENT STORIES</p><h2 id="gallery-title">Love, in<br /><em>motion.</em></h2><p>Browse a small selection of celebrations we have had the honour of documenting.</p></div>
          <div className="gallery-slider-wrap depth-gallery"><DepthCarousel items={galleryItems} depth={220} spread={90} tilt={22} tiltDirection="right" perspective={1400} visibleCards={4} falloff={0.2} blur={6} autoplay={false} loop cardWidth={240} cardHeight={310} radius={18} tint="#05060a" duration={700} ease="power3.out" autoplayDelay={3200} showControls showIndicators /></div></div>
        </section>
        <section className="packages" id="packages" aria-labelledby="packages-title">
          <div className="packages-heading"><div><p className="eyebrow">WAYS TO CELEBRATE</p><h2 id="packages-title">Packages for<br /><em>every chapter.</em></h2></div><p>Thoughtfully created coverage options for every beautiful part of your celebration. All packages can be tailored to your plans.</p></div>
          <PackagesCarousel packages={packages} />
          <p className="packages-note">All prices are starting estimates in INR and may vary by date, location and custom requirements.</p>
        </section>
        <section className="about-home" aria-labelledby="about-home-title">
          <div className="about-home-image"><Image src="/client-story-hands.jpg" alt="A close-up wedding photograph by Stories House" fill sizes="(max-width: 720px) 100vw, 50vw" /><p className="about-home-image-note">A storyteller at heart</p></div>
          <div className="about-home-copy"><p className="eyebrow">ABOUT THE PHOTOGRAPHER</p><h2 id="about-home-title">Pratik <em>Singh.</em></h2><p className="about-home-role">FOUNDER &amp; LEAD PHOTOGRAPHER · STORIES HOUSE</p><p>With over a decade behind the lens, Pratik has learned that the most powerful images are rarely planned. They live in the gentle pause before a ceremony, the warmth of a parent&apos;s embrace and the laughter shared after a long day.</p><div className="about-home-details"><div><p className="about-detail-title">THE PHILOSOPHY</p><p>Honest photographs over perfect poses. Every celebration should feel like yours—not a performance for the camera.</p></div><div><p className="about-detail-title">THE STORIES HOUSE WAY</p><p>A calm, observant presence that gives you room to be fully present, while no meaningful detail goes unseen.</p></div><div><p className="about-detail-title">WHERE WE TRAVEL</p><p>Mumbai · Delhi · Jaipur · Udaipur · Goa · Bengaluru · and celebrations across India.</p></div></div><div className="about-home-signoff"><span>Stories House</span><small>WEDDING PHOTOGRAPHY</small></div></div>
        </section>
        <div className="about-breath" aria-hidden="true" />
        <section className="studio-experience" id="studio-experience" aria-labelledby="studio-experience-title">
          <div className="studio-experience-intro"><p className="eyebrow">THE STORIES HOUSE DIFFERENCE</p><h2 id="studio-experience-title">Years of instinct,<br />held in every <em>frame.</em></h2><p>For us, the best photographs are not manufactured moments. They are a careful, joyful record of the day as it truly unfolds.</p></div>
          <div className="studio-experience-stats"><div><strong>300<span>+</span></strong><p>WEDDINGS DOCUMENTED</p></div><div><strong>20<span>+</span></strong><p>CITIES CELEBRATED</p></div><div><strong>10<span>+</span></strong><p>YEARS OF EXPERIENCE</p></div></div>
        </section>
        <section className="contact" id="contact"><p className="eyebrow">LET&apos;S MAKE SOME MAGIC</p><h2>Your story is<br /><em>worth remembering.</em></h2></section>
      </main>
    </>
  );
}
