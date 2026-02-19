import React from 'react';
import { Helmet } from 'react-helmet-async';

const ProcessPage: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Kickoff & Discovery',
      description: 'We start by understanding your business goals, target audience, and competitors. This foundation ensures we build the right solution for your needs.',
      timeline: 'Week 1'
    },
    {
      number: '02',
      title: 'Wireframe & Structure',
      description: 'We map out the site structure, content flow, and user journeys. This blueprint keeps the project organized and ensures nothing is missed.',
      timeline: 'Week 1-2'
    },
    {
      number: '03',
      title: 'High-end Design',
      description: 'Our designers create premium UI that matches your brand and drives conversions. You will see mockups before we start development.',
      timeline: 'Week 2-3'
    },
    {
      number: '04',
      title: 'Development & Testing',
      description: 'Clean code, responsive design, speed optimization. We build it right and test thoroughly across devices and browsers.',
      timeline: 'Week 3-4'
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'We handle deployment, provide training, and offer optional ongoing support to keep your site running perfectly.',
      timeline: 'Week 4+'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Process | Apex Partners</title>
        <meta name="description" content="Our streamlined 5-step process for delivering premium websites: Discovery, Wireframe, Design, Development, and Launch." />
        <meta property="og:title" content="Our Process | Apex Partners" />
      </Helmet>

      <section className="luxury-section pt-32 md:pt-40">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h1 className="luxury-heading mb-6">Our Process</h1>
            <p className="luxury-body text-apex-grey max-w-2xl mx-auto">
              A proven, streamlined approach to delivering premium results on time and within budget.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative pl-16 md:pl-24 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-0 top-0">
                  <div className="text-5xl md:text-6xl font-serif text-apex-gold opacity-30">
                    {step.number}
                  </div>
                </div>
                
                <div className="border-l-2 border-apex-border pl-8 pb-12">
                  <div className="mb-2">
                    <span className="text-xs text-apex-grey font-medium uppercase tracking-wider">
                      {step.timeline}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                    {step.title}
                  </h2>
                  <p className="text-apex-grey leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-apex-surface text-center" style={{ borderRadius: '14px' }}>
            <h3 className="text-xl font-serif font-semibold mb-3">Typical Timelines</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-apex-grey">
              <span>Starter: 1–2 weeks</span>
              <span className="hidden md:block">•</span>
              <span>Standard: 2–4 weeks</span>
              <span className="hidden md:block">•</span>
              <span>Custom: Scope-based</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessPage;
