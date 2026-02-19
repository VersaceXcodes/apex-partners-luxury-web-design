import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getProjectBySlug } from '../data/portfolio';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="luxury-section pt-32 text-center">
        <div className="luxury-container">
          <h1 className="luxury-heading mb-6">Project Not Found</h1>
          <Link to="/portfolio" className="text-apex-white hover:text-apex-grey">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.name} Case Study | Apex Partners</title>
        <meta name="description" content={project.overview} />
        <meta property="og:title" content={`${project.name} Case Study | Apex Partners`} />
      </Helmet>

      <section className="luxury-section pt-32 md:pt-40">
        <div className="luxury-container">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-apex-grey hover:text-apex-black transition-colors mb-12"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>

          {/* Project Header */}
          <div className="mb-16">
            <div className="text-xs text-apex-gold mb-3 uppercase tracking-wider">
              {project.categoryLabel}
            </div>
            <h1 className="luxury-heading mb-6">{project.name}</h1>
            <p className="luxury-body text-apex-grey max-w-3xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Hero Image */}
          <div className="aspect-video bg-apex-border mb-16" style={{ borderRadius: '14px' }}>
            {/* Placeholder for hero image */}
          </div>

          {/* Overview */}
          <div className="max-w-4xl mb-16">
            <h2 className="text-2xl font-serif font-semibold mb-4">Overview</h2>
            <p className="luxury-body text-apex-grey leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Goals & Deliverables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Goals */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Goals</h2>
              <ul className="space-y-4">
                {project.goals.map((goal, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-apex-black flex-shrink-0 mt-1" />
                    <span className="text-apex-grey">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Delivered */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">What We Delivered</h2>
              <ul className="space-y-4">
                {project.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-apex-black flex-shrink-0 mt-1" />
                    <span className="text-apex-grey">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Result */}
          <div className="mb-16 p-8 bg-apex-black text-apex-white" style={{ borderRadius: '14px' }}>
            <h2 className="text-2xl font-serif font-semibold mb-4">Result</h2>
            <p className="luxury-body text-apex-grey leading-relaxed">
              {project.result}
            </p>
          </div>

          {/* Screenshots */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="aspect-video bg-apex-border"
                  style={{ borderRadius: '14px' }}
                >
                  {/* Placeholder for screenshot */}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Ready for Similar Results?
            </h3>
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

export default CaseStudyPage;
