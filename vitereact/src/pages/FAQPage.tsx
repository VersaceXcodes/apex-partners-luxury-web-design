import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'How long does a website take?',
      answer: 'Typical timelines are 1-2 weeks for starter websites, 2-4 weeks for standard business websites, and custom timelines for larger platforms. The exact timeline depends on project scope, content readiness, and feedback cycles.'
    },
    {
      question: 'What do you need from me to start?',
      answer: 'We need your branding assets (logo, colors, fonts if available), content (text and images), access to any existing systems, and clarity on your goals and target audience. We provide a detailed checklist after our initial consultation.'
    },
    {
      question: 'Do you provide hosting and domains?',
      answer: 'We provide guidance on hosting and domain selection, helping you choose the best options for your needs. We can handle the setup and configuration, or work with your existing hosting provider.'
    },
    {
      question: 'Can you redesign my current site?',
      answer: 'Absolutely. We specialize in redesigns and can work with your existing content and structure, or start fresh. We ensure a smooth transition with proper redirects and SEO preservation.'
    },
    {
      question: 'Do you offer maintenance?',
      answer: 'Yes, we offer ongoing maintenance packages that include security updates, content changes, performance monitoring, and technical support. We can discuss maintenance options during your project.'
    },
    {
      question: 'Can you build booking / ordering systems?',
      answer: 'Yes. We can integrate with existing platforms (like booking.com, OpenTable, etc.) or build custom booking and ordering systems with payment processing, depending on your needs.'
    },
    {
      question: 'Do you do admin panels and dashboards?',
      answer: 'Yes, we build custom admin panels and dashboards for managing content, users, orders, bookings, and more. This is part of our Full-Service Platform offering.'
    },
    {
      question: 'How do payments work?',
      answer: 'We typically work with a 50% deposit to begin work and 50% upon completion before launch. For larger projects, we can arrange milestone-based payments. All pricing is agreed upon before we start.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQ | Apex Partners</title>
        <meta name="description" content="Frequently asked questions about our web design and development services, process, pricing, and support." />
        <meta property="og:title" content="FAQ | Apex Partners" />
      </Helmet>

      <section className="luxury-section pt-32 md:pt-40">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="luxury-heading mb-6">Frequently Asked Questions</h1>
              <p className="luxury-body text-apex-grey">
                Everything you need to know about working with Apex Partners.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-apex-border overflow-hidden transition-all animate-fade-in"
                  style={{ borderRadius: '14px', animationDelay: `${index * 0.05}s` }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-apex-surface transition-colors"
                  >
                    <span className="font-medium pr-8">{faq.question}</span>
                    <ChevronDown
                      className={`flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      size={20}
                    />
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 text-apex-grey leading-relaxed border-t border-apex-border pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center p-8 bg-apex-surface" style={{ borderRadius: '14px' }}>
              <h2 className="text-xl font-serif font-semibold mb-3">Still have questions?</h2>
              <p className="text-apex-grey mb-6">
                We're happy to discuss your specific needs and answer any questions.
              </p>
              <a
                href="mailto:hello@apexpartners.com"
                className="inline-block px-8 py-3 bg-apex-black text-apex-white font-medium transition-all hover:bg-transparent border border-apex-black"
                style={{ borderRadius: '14px' }}
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
