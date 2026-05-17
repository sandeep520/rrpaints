import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import ColorPalette from '../components/ColorPalette';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <>
      <SEO
        path="/"
        description="RR Paints offers premium eco-friendly paints for interior, exterior, texture finishes & waterproof coatings. Transform your home with vibrant, long-lasting colors. 10-year warranty. Free color consultation."
        keywords="RR Paints, premium paints India, interior wall painting, exterior painting, eco-friendly paints, low VOC paint, texture paint, waterproof coating, house painting services, wall paint colors, best paint brand India, home painting, decorative wall paint, colour consultation, non-toxic paint, kid-safe paint, paint shop India"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'RR Paints',
          url: 'https://www.rrpaints.com',
          description: 'Premium eco-friendly paints for interior, exterior, texture finishes and waterproof coatings in India.',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.rrpaints.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />
      <div className="w-full flex flex-col">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <ColorPalette />
        <Testimonials />
        <FAQ />
      </div>
    </>
  );
}
