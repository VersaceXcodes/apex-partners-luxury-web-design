import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { portfolioProjects } from '../data/portfolio';

type FilterCategory = 'all' | 'restaurant' | 'barber' | 'business' | 'ecommerce' | 'platform';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filters: { label: string; value: FilterCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Restaurants', value: 'restaurant' },
    { label: 'Barbers/Salons', value: 'barber' },
    { label: 'Business', value: 'business' },
    { label: 'E-Commerce', value: 'ecommerce' },
    { label: 'Platforms', value: 'platform' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Portfolio | Apex Partners</title>
        <meta name="description" content="View our portfolio of premium website projects for restaurants, barbers, salons, businesses, and e-commerce brands." />
        <meta property="og:title" content="Portfolio | Apex Partners" />
      </Helmet>

      <section className="luxury-section pt-32 md:pt-40">
        <div className="luxury-container">
          <div className="text-center mb-12">
            <h1 className="luxury-heading mb-6">Our Work</h1>
            <p className="luxury-body text-apex-grey max-w-2xl mx-auto">
              A curated selection of projects showcasing our commitment to premium design and measurable results.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeFilter === filter.value
                    ? 'bg-apex-black text-apex-white'
                    : 'bg-apex-surface text-apex-white border border-apex-border hover:border-apex-border-hover'
                }`}
                style={{ borderRadius: '14px' }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.slug}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="border border-apex-border group-hover:border-apex-border-hover transition-all" style={{ borderRadius: '14px' }}>
                  <div className="aspect-video bg-apex-border mb-4" style={{ borderRadius: '8px 8px 0 0' }}>
                    {/* Placeholder for project thumbnail */}
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-apex-gold mb-2 uppercase tracking-wider">
                      {project.categoryLabel}
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-apex-grey transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-apex-grey">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-apex-grey">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
