import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Apex Partners</title>
        <meta name="description" content="Apex Partners privacy policy covering data collection, usage, and cookie practices." />
      </Helmet>

      <section className="luxury-section pt-32 md:pt-40">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="luxury-heading mb-8">Privacy Policy</h1>
            
            <div className="space-y-8 text-apex-grey leading-relaxed">
              <div>
                <p className="mb-4">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
                <p>
                  Apex Partners ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-apex-black mb-4">Information We Collect</h2>
                <p className="mb-4">
                  We may collect information about you in a variety of ways. The information we may collect includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Data:</strong> Name, email address, business name, and any other information you provide through contact forms or email communications.</li>
                  <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-apex-black mb-4">Use of Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your enquiries and provide customer support</li>
                  <li>Send you information about our services</li>
                  <li>Improve our website and services</li>
                  <li>Analyze website usage and optimize user experience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-apex-black mb-4">Disclosure of Your Information</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-apex-black mb-4">Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                  We may use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                <p>
                  We may use analytics services like Google Analytics to understand how visitors interact with our website. These services may collect information such as your IP address, browser type, and pages visited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-apex-black mb-4">Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-apex-black mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-apex-black mb-4">Your Rights</h2>
                <p className="mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access your personal data</li>
                  <li>The right to request correction of inaccurate data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to object to or restrict processing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-apex-black mb-4">Children's Privacy</h2>
                <p>
                  Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-apex-black mb-4">Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-apex-black mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong> <a href="mailto:hello@apexpartners.com" className="text-apex-white hover:text-apex-grey">hello@apexpartners.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
