import Link from 'next/link';

const names = {
  'aditi-rohan': 'Aditi & Rohan',
  'ishita-veer': 'Ishita & Veer',
  'meera-arjun': 'Meera & Arjun',
  'anaya-karan': 'Anaya & Karan',
  'riya-kabir': 'Riya & Kabir'
};

export default async function StoryPage({ params }) {
  const { story } = await params;
  const name = names[story] ?? 'A Stories House Celebration';
  return <main className="story-page"><p className="eyebrow">STORIES HOUSE · CLIENT JOURNEY</p><h1>{name}</h1><p>This is where the complete story of this celebration will live—every meaningful moment, detail, and photograph in one beautiful journey.</p><Link className="button" href="/">BACK TO HOME</Link></main>;
}
