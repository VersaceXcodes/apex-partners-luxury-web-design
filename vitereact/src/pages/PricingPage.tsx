import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2 } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Starter Website',
      price: '€1,500',
      features: ['1-3 pages', 'Mobile responsive', 'Basic SEO', 'Contact form']
    },
    {
      name: 'Standard Business Website',
      price: '€3,500',
      features: ['4-6 pages', 'Conversion-focused', 'SEO optimized', 'Speed optimization']
    },
    {
      name: 'Restaurant Website',
      price: '€2,800',
      features: ['Menu pages', 'Gallery', 'Map integration', 'Booking buttons']
    },
    {
      name: 'Barber / Salon Website',
      price: '€2,500',
      features: ['Services & pricing', 'Gallery', 'Testimonials', 'Booking integration']
    },
    {
      name: 'E-Commerce',
      price: '€5,000',
      features: ['Product pages', 'Shopping cart', 'Payment integration', 'Admin panel']
    },
    {
      name: 'Custom Platform / Admin Panel',
      price: 'Quote-based',
      features: ['Custom features', 'Dashboards', 'Database design', 'Scalable architecture']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing | Apex Partners</title>
        <meta name="description" content="Transparent pricing for premium web design and development. Starting from €1,500 for starter websites to custom platform solutions." />
        <meta property="og:title" content="Pricing | Apex Partners" />
      </Helmet>

      <section className="luxury-section pt-32 md:pt-40">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h1 className="luxury-heading mb-6">Pricing</h1>
            <p className="luxury-body text-apex-grey max-w-2xl mx-auto">
              Transparent pricing for premium results. All prices are starting points—final cost depends on your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className="p-8 border border-apex-border hover:border-apex-border-hover transition-all animate-fade-in"
                style={{ borderRadius: '14px', animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-xl font-serif font-semibold mb-2">{tier.name}</h3>
                <div className="text-3xl font-serif font-bold mb-6">
                  {tier.price === 'Quote-based' ? tier.price : (
                    <>
                      <span className="text-sm text-apex-grey font-normal">Starting from</span>
                      <div>{tier.price}</div>
                    </>
                  )}
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <CheckCircle2 size={18} className="text-apex-black flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-apex-grey">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="p-8 bg-apex-surface text-center" style={{ borderRadius: '14px' }}>
              <p className="text-apex-grey leading-relaxed">
                <strong>Note:</strong> Final pricing depends on pages, content, features, and timelines. All projects include mobile responsiveness, basic SEO, and professional support.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-apex-black text-apex-white font-medium transition-all hover:bg-transparent border border-apex-black"
              style={{ borderRadius: '14px' }}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
