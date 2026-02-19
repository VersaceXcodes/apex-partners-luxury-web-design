import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2 } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'starter',
      title: 'Starter Website',
      subtitle: 'Basic',
      bestFor: 'New businesses, personal brands',
      includes: [
        '1–3 pages (Home, About, Contact)',
        'Mobile responsive design',
        'Basic SEO structure',
        'Contact form (front-end)',
        'Social links + Google map embed'
      ],
      outcome: 'A clean online presence that looks professional.'
    },
    {
      id: 'business',
      title: 'Business Website',
      subtitle: 'Standard',
      bestFor: 'Service businesses that need leads',
      includes: [
        '4–6 pages',
        'Strong homepage layout for conversions',
        'Service sections + FAQs',
        'Speed optimization',
        'On-page SEO foundations'
      ],
      outcome: 'A premium site designed to generate enquiries.'
    },
    {
      id: 'restaurant',
      title: 'Restaurant Website',
      subtitle: '',
      bestFor: 'Restaurants, cafés, takeaways',
      includes: [
        'Menu page layout (PDF or styled sections)',
        'Gallery + ambience visuals',
        'Map, hours, call-to-action buttons',
        '"Book / Order" buttons (link out to third-party)'
      ],
      outcome: 'A luxury feel that matches your venue.'
    },
    {
      id: 'barber-salon',
      title: 'Barber / Salon Website',
      subtitle: '',
      bestFor: 'Barbers, salons, grooming studios',
      includes: [
        'Services + pricing layout',
        'Gallery + testimonials',
        'Strong local presence design',
        '"Book now" button (link out to booking platform)'
      ],
      outcome: 'A sharp look that builds trust instantly.'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Website',
      subtitle: '',
      bestFor: 'Brands selling products online',
      includes: [
        'Storefront design',
        'Product + collection pages',
        'Conversion-focused UX',
        'Platform setup (Shopify/Woo/etc.)'
      ],
      outcome: 'Designed to sell—clean and premium.'
    },
    {
      id: 'full-platform',
      title: 'Full-Service Platform',
      subtitle: 'Custom + Admin Panel',
      bestFor: 'Businesses needing systems',
      includes: [
        'Custom features (dashboards, portals, admin tools)',
        'Database-backed functionality',
        'Scalable architecture',
        'User management systems'
      ],
      outcome: 'A platform built for growth.'
    }
  ];

  const addons = [
    'Maintenance & updates',
    'SEO',
    'Copywriting',
    'Branding / logos',
    'Hosting guidance'
  ];

  return (
    <>
      <Helmet>
        <title>Services | Apex Partners</title>
        <meta name="description" content="From starter websites to full-service platforms with admin panels. We offer premium web design and development services tailored to your business needs." />
        <meta property="og:title" content="Services | Apex Partners" />
        <meta property="og:description" content="Explore our range of premium web design and development services." />
      </Helmet>

      {/* Hero Section */}
      <section className="luxury-section pt-32 md:pt-40 bg-apex-black text-apex-white">
        <div className="luxury-container text-center">
          <h1 className="luxury-heading text-apex-white mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="luxury-body text-apex-grey max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            From simple websites to complex platforms, we deliver premium digital experiences tailored to your business goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="border border-apex-border p-8 md:p-12 animate-fade-in"
                style={{ borderRadius: '14px', animationDelay: `${index * 0.05}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <div className="mb-6">
                      <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-2">
                        {service.title}
                      </h2>
                      {service.subtitle && (
                        <span className="text-apex-grey text-sm">{service.subtitle}</span>
                      )}
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-apex-grey mb-2">
                        Best For
                      </h3>
                      <p className="text-lg">{service.bestFor}</p>
                    </div>

                    <div className="p-6 bg-apex-surface" style={{ borderRadius: '14px' }}>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-apex-grey mb-4">
                        Outcome
                      </h3>
                      <p className="text-lg font-medium">{service.outcome}</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-apex-grey mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 size={20} className="text-apex-black flex-shrink-0 mt-0.5" />
                          <span className="text-apex-grey">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="luxury-section bg-apex-surface">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="luxury-subheading mb-4">Optional Add-ons</h2>
              <p className="text-apex-grey">
                Enhance your project with these additional services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addons.map((addon, index) => (
                <div
                  key={addon}
                  className="p-6 bg-apex-surface border border-apex-border text-center animate-fade-in"
                  style={{ borderRadius: '14px', animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-medium">{addon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
