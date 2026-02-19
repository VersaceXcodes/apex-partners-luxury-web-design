import React, { useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    industry: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Quote Request from ${formData.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Business Name: ${formData.businessName}\n` +
      `Industry: ${formData.industry}\n` +
      `Budget Range: ${formData.budget}\n` +
      `Timeline: ${formData.timeline}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:hello@apexpartners.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Apex Partners</title>
        <meta name="description" content="Get in touch with Apex Partners for a quote on your website project. We respond within 24 hours." />
        <meta property="og:title" content="Contact Us | Apex Partners" />
      </Helmet>

      <section className="luxury-section pt-32 md:pt-40">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Form */}
            <div>
              <h1 className="luxury-heading mb-4">Request a quote.</h1>
              <p className="luxury-body text-apex-grey mb-10">
                Tell us what you need. Simple site or full platform—we'll guide you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-apex-border focus:border-apex-white outline-none transition-colors bg-apex-surface text-apex-white"
                    style={{ borderRadius: '14px' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-apex-border focus:border-apex-white outline-none transition-colors bg-apex-surface text-apex-white"
                    style={{ borderRadius: '14px' }}
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-apex-border focus:border-apex-white outline-none transition-colors bg-apex-surface text-apex-white"
                    style={{ borderRadius: '14px' }}
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-apex-border focus:border-apex-white outline-none transition-colors bg-apex-surface text-apex-white"
                    style={{ borderRadius: '14px' }}
                  >
                    <option value="">Select an industry</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="barber">Barber</option>
                    <option value="salon">Salon</option>
                    <option value="local-service">Local Service</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-apex-border focus:border-apex-white outline-none transition-colors bg-apex-surface text-apex-white"
                    style={{ borderRadius: '14px' }}
                  >
                    <option value="">Select a budget range</option>
                    <option value="1000-2500">€1,000 - €2,500</option>
                    <option value="2500-5000">€2,500 - €5,000</option>
                    <option value="5000-10000">€5,000 - €10,000</option>
                    <option value="10000+">€10,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                    Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-apex-border focus:border-apex-white outline-none transition-colors bg-apex-surface text-apex-white"
                    style={{ borderRadius: '14px' }}
                  >
                    <option value="">Select a timeline</option>
                    <option value="urgent">ASAP (1-2 weeks)</option>
                    <option value="normal">Normal (2-4 weeks)</option>
                    <option value="flexible">Flexible (1-2 months)</option>
                    <option value="planning">Just planning</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-apex-border focus:border-apex-white outline-none transition-colors resize-none bg-apex-surface text-apex-white"
                    style={{ borderRadius: '14px' }}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-apex-white text-apex-black font-medium transition-all hover:bg-transparent hover:text-apex-white border border-apex-white"
                  style={{ borderRadius: '14px' }}
                >
                  Send Enquiry
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div className="lg:pl-12">
              <div className="sticky top-32">
                <h2 className="text-2xl font-serif font-semibold mb-8">Get in Touch</h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-apex-white flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <a href="mailto:hello@apexpartners.com" className="text-apex-grey hover:text-apex-white transition-colors">
                        hello@apexpartners.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-apex-white flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Location</div>
                      <div className="text-apex-grey">Dublin, Ireland</div>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-apex-border hover:border-apex-border-hover transition-all"
                      style={{ borderRadius: '14px' }}
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-apex-border hover:border-apex-border-hover transition-all"
                      style={{ borderRadius: '14px' }}
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-apex-surface" style={{ borderRadius: '14px' }}>
                  <h3 className="font-medium mb-2">Response Time</h3>
                  <p className="text-sm text-apex-grey">
                    We typically respond to all enquiries within 24 hours on business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
