import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { portfolioProjects } from '../data/portfolio';

const HomePage: React.FC = () => {
  const services = [
    {
      title: 'Starter Websites',
      description: 'Clean, professional multi-page sites for instant credibility.',
      link: '/services'
    },
    {
      title: 'Business Websites',
      description: 'High-converting sites built to generate calls, bookings, and enquiries.',
      link: '/services'
    },
    {
      title: 'Restaurant Websites',
      description: 'Menus, galleries, maps, hours—built to look premium and load fast.',
      link: '/services'
    },
    {
      title: 'Barber / Salon Websites',
      description: 'Modern visuals, service lists, social proof—built for local searches.',
      link: '/services'
    },
    {
      title: 'E-Commerce',
      description: 'Product pages, collections, payments—designed for conversion.',
      link: '/services'
    },
    {
      title: 'Full-Service Platforms',
      description: 'Custom builds with dashboards, admin panels, and scalable features.',
      link: '/services'
    }
  ];

  const featuredProjects = portfolioProjects.slice(0, 3);

  const whyApex = [
    {
      title: 'Design-led',
      description: 'Luxury design that looks expensive and feels modern'
    },
    {
      title: 'Development-strong',
      description: 'Clean code / solid builds that load fast and work everywhere'
    },
    {
      title: 'Business-focused',
      description: 'Conversion-focused layout built to drive enquiries & sales'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Goals, audience, competitors'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Premium UI, structure, content flow'
    },
    {
      number: '03',
      title: 'Build',
      description: 'Responsive development + optimizations'
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Testing, handover, optional ongoing support'
    }
  ];

  const testimonials = [
    {
      quote: 'Apex Partners delivered exactly what we wanted—clean, premium, and fast.',
      name: 'Michael O\'Brien',
      role: 'Restaurant Owner'
    },
    {
      quote: 'We started getting more enquiries within the first week.',
      name: 'Sarah Walsh',
      role: 'Barber'
    },
    {
      quote: 'Professional communication and top-tier work.',
      name: 'David Chen',
      role: 'Founder'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Apex Partners | Luxury Web Design & Development Agency</title>
        <meta name="description" content="Premium websites for modern brands. We design and build luxury websites from clean multi-page sites to full-service platforms with admin panels." />
        <meta property="og:title" content="Apex Partners | Luxury Web Design & Development Agency" />
        <meta property="og:description" content="Premium websites for modern brands. We design and build luxury websites from clean multi-page sites to full-service platforms." />
        <meta property="og:image" content="/og-image.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="luxury-section bg-apex-black text-apex-white pt-32 md:pt-40">
        <div className="luxury-container">
          <div className="max-w-4xl">
            <h1 className="luxury-heading text-apex-white mb-6 animate-fade-in">
              Luxury websites built to convert.
            </h1>
            <p className="luxury-body text-apex-grey mb-10 max-w-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Apex Partners designs and develops websites—from clean multi-page builds to full-service platforms with admin panels—tailored for restaurants, barbers, and modern brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/contact"
                className="px-8 py-4 bg-apex-white text-apex-black text-center font-medium transition-all hover:bg-transparent hover:text-apex-white border border-apex-white"
                style={{ borderRadius: '14px' }}
              >
                Request a Quote
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-transparent text-apex-white text-center font-medium transition-all hover:bg-apex-white hover:text-apex-black border border-apex-white"
                style={{ borderRadius: '14px' }}
              >
                View Work
              </Link>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-apex-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {['Fast turnaround', 'Mobile-first', 'Premium design', 'Built for growth'].map((highlight) => (
                <div key={highlight} className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-apex-gold flex-shrink-0" />
                  <span className="text-sm text-apex-grey">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-b border-apex-border">
        <div className="luxury-container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <span className="text-sm text-apex-grey font-medium">Trusted by:</span>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-apex-grey">
              <span>Noir Bistro</span>
              <span>Crown Cut Studio</span>
              <span>Maison Café</span>
              <span>Aurelia Skincare</span>
              <span>District Dental</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="luxury-subheading mb-4">Our Services</h2>
            <p className="luxury-body text-apex-grey max-w-2xl mx-auto">
              From simple websites to complex platforms, we deliver premium digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-8 bg-apex-surface border border-apex-border transition-all hover:bg-apex-surface-2 hover:border-apex-border-hover animate-fade-in"
                style={{ borderRadius: '14px', animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-serif font-semibold mb-3 text-apex-white">{service.title}</h3>
                <p className="text-apex-grey mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-sm font-medium text-apex-white hover:text-apex-grey transition-colors"
                >
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="luxury-section bg-apex-surface text-apex-white">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="luxury-subheading text-apex-white mb-4">Featured Work</h2>
            <p className="luxury-body text-apex-grey max-w-2xl mx-auto">
              A selection of recent projects showcasing our commitment to quality and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-apex-surface-2 border border-apex-border transition-all hover:border-apex-border-hover animate-fade-in"
                style={{ borderRadius: '14px', animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-apex-border mb-6" style={{ borderRadius: '14px 14px 0 0' }}>
                  {/* Placeholder for project thumbnail */}
                </div>
                <div className="p-6">
                  <div className="text-xs text-apex-gold mb-2">{project.categoryLabel}</div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{project.name}</h3>
                  <p className="text-apex-grey text-sm mb-6">{project.shortDescription}</p>
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="inline-flex items-center text-sm font-medium text-apex-white hover:text-apex-grey transition-colors"
                  >
                    View project <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-block px-8 py-4 bg-apex-white text-apex-black font-medium transition-all hover:bg-transparent hover:text-apex-white border border-apex-white"
              style={{ borderRadius: '14px' }}
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Apex Partners */}
      <section className="luxury-section">
        <div className="luxury-container">
          <h2 className="luxury-subheading text-center mb-16">Why Apex Partners</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whyApex.map((item, index) => (
              <div key={item.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-2xl font-serif font-semibold mb-4">{item.title}</h3>
                <p className="text-apex-grey leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="luxury-section bg-apex-surface">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="luxury-subheading mb-4">Our Process</h2>
            <p className="luxury-body text-apex-grey max-w-2xl mx-auto">
              A streamlined approach to delivering premium results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-serif text-apex-gold mb-4">{step.number}</div>
                <h3 className="text-xl font-serif font-semibold mb-2">{step.title}</h3>
                <p className="text-apex-grey text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="luxury-section">
        <div className="luxury-container">
          <h2 className="luxury-subheading text-center mb-16">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-apex-surface border border-apex-border transition-all hover:bg-apex-surface-2 hover:border-apex-border-hover animate-fade-in"
                style={{ borderRadius: '14px', animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-apex-border">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-apex-grey">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="luxury-section bg-apex-surface-2 text-apex-white">
        <div className="luxury-container text-center">
          <h2 className="luxury-subheading text-apex-white mb-6">
            Ready to upgrade your online presence?
          </h2>
          <p className="luxury-body text-apex-grey max-w-2xl mx-auto mb-10">
            Tell us what you need—simple website or full platform. We'll recommend the best package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-apex-white text-apex-black font-medium transition-all hover:bg-transparent hover:text-apex-white border border-apex-white"
              style={{ borderRadius: '14px' }}
            >
              Request a Quote
            </Link>
            <a
              href="mailto:hello@apexpartners.com"
              className="px-8 py-4 bg-transparent text-apex-white font-medium transition-all hover:bg-apex-white hover:text-apex-black border border-apex-white"
              style={{ borderRadius: '14px' }}
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
