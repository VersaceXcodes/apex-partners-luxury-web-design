import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Clarity',
      description: 'Simple structure, clear message'
    },
    {
      title: 'Quality',
      description: 'Premium design and clean development'
    },
    {
      title: 'Speed',
      description: 'Fast performance, fast communication'
    },
    {
      title: 'Partnership',
      description: 'Long-term mindset, honest advice'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Apex Partners</title>
        <meta name="description" content="Apex Partners is a boutique web design & development agency building luxury websites from brochure sites to full-service platforms with admin dashboards." />
        <meta property="og:title" content="About Us | Apex Partners" />
        <meta property="og:description" content="Learn about our approach to building premium websites for modern brands." />
      </Helmet>

      {/* Hero Section */}
      <section className="luxury-section pt-32 md:pt-40">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="luxury-heading mb-6 animate-fade-in">
              Built for brands that want to look premium.
            </h1>
            <p className="luxury-body text-apex-grey mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Apex Partners is a boutique web design & development agency. We build everything from simple brochure websites to full-service platforms with admin dashboards—crafted with a luxury look and business-first thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="luxury-section bg-apex-surface">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="luxury-subheading mb-4">What We Believe</h2>
            <p className="text-apex-grey max-w-2xl mx-auto">
              Our core values guide every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-8 bg-apex-surface-2 border border-apex-border text-center animate-fade-in"
                style={{ borderRadius: '14px', animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-serif font-semibold mb-3 text-apex-white">{value.title}</h3>
                <p className="text-apex-grey leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="luxury-subheading mb-6">Who We Work With</h2>
            <p className="luxury-body text-apex-grey leading-relaxed mb-8">
              We work with restaurants, barbers, salons, local services, and modern brands that want a premium online presence. Our clients value quality, understand the importance of strong digital positioning, and are ready to invest in their online success.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-8 border-t border-apex-border">
              {['Restaurants', 'Barbers', 'Salons', 'Local Services', 'Brands'].map((type) => (
                <div key={type} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-apex-surface flex items-center justify-center" style={{ borderRadius: '14px' }}>
                    <div className="w-8 h-8 bg-apex-white" style={{ borderRadius: '4px' }} />
                  </div>
                  <span className="text-sm font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="luxury-section bg-apex-surface-2 text-apex-white">
        <div className="luxury-container text-center">
          <h2 className="luxury-subheading text-apex-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="luxury-body text-apex-grey max-w-2xl mx-auto mb-10">
            Let's discuss your project and see how we can help elevate your online presence.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-apex-white text-apex-black font-medium transition-all hover:bg-transparent hover:text-apex-white border border-apex-white"
            style={{ borderRadius: '14px' }}
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
