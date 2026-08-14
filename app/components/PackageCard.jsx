'use client';

import { useState } from 'react';
import Link from 'next/link';
import './PackageCard.css';

export default function PackageCard({ name, description, price, image, slug }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    setTilt({ x: ((event.clientY - rect.top) / rect.height - 0.5) * -11, y: ((event.clientX - rect.left) / rect.width - 0.5) * 11 });
  }

  return (
    <article className="package-card-scene" onPointerMove={handleMove} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className="package-card" style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
        <div className="package-card-image"><img src={image} alt="" /></div>
        <div className="package-card-content"><p className="package-card-index">PHOTOGRAPHY PACKAGE</p><h3>{name}</h3><p className="package-card-description">{description}</p><Link className="package-card-view" href={`/packages/${slug}`}>VIEW PACKAGE <span>↗</span></Link><div className="package-card-footer"><p><small>STARTING AT</small><strong>{price}</strong></p><Link href={`/contact?package=${encodeURIComponent(name)}`} aria-label={`Enquire about ${name}`}>ENQUIRE <span>↗</span></Link></div></div>
      </div>
    </article>
  );
}
