import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1f2444] via-[#2d3d66] to-[#1f2444] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative"
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#bf1f3c] to-[#1e3665] rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
                
                {/* Decorative circles */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#bf1f3c] rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#1e3665] rounded-full animate-ping opacity-60"></div>
                
                {/* Icon container */}
                <div className="relative p-6 bg-gradient-to-br from-[#bf1f3c] via-[#9f162e] to-[#1e3665] rounded-2xl shadow-2xl border-2 border-white/30 hover:border-white/50 transition-all group">
                  <Shield className="w-16 h-16 text-white group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                  
                  {/* Inner shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-600 leading-relaxed mb-4">
              New York Empire Academy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, stored, and disclosed when you access or use our website and related services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This Privacy Policy applies to our website and its associated subdomains (collectively, the "Service"). By accessing or using the Service, you confirm that you have read, understood, and agree to the practices described in this Privacy Policy, as well as our Terms & Conditions.
            </p>
          </section>

          {/* Definitions */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-[#9f162e] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Definitions and Key Terms</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              To ensure clarity, the following terms are defined for purposes of this Privacy Policy:
            </p>
            <div className="space-y-4">
              <div className="pl-6 border-l-4 border-[#9f162e]/20">
                <p className="text-gray-700"><strong className="text-gray-900">Cookie:</strong> A small data file stored on your device by your web browser to help identify your browser, provide analytics, and remember preferences such as language or login information.</p>
              </div>
              <div className="pl-6 border-l-4 border-[#9f162e]/20">
                <p className="text-gray-700"><strong className="text-gray-900">Company:</strong> Refers to New York Empire Academy, located at Empire State Building, 20 W 34th St, New York, NY 10001, United States.</p>
              </div>
              <div className="pl-6 border-l-4 border-[#9f162e]/20">
                <p className="text-gray-700"><strong className="text-gray-900">Country:</strong> United States of America.</p>
              </div>
              <div className="pl-6 border-l-4 border-[#9f162e]/20">
                <p className="text-gray-700"><strong className="text-gray-900">Customer:</strong> Any individual or organization that registers to use the New York Empire Academy Service.</p>
              </div>
              <div className="pl-6 border-l-4 border-[#9f162e]/20">
                <p className="text-gray-700"><strong className="text-gray-900">Device:</strong> Any internet-connected device such as a computer, tablet, or smartphone used to access the Service.</p>
              </div>
              <div className="pl-6 border-l-4 border-[#9f162e]/20">
                <p className="text-gray-700"><strong className="text-gray-900">IP Address:</strong> A numerical label assigned to each device connected to the Internet, which may indicate general geographic location.</p>
              </div>
              <div className="pl-6 border-l-4 border-[#9f162e]/20">
                <p className="text-gray-700"><strong className="text-gray-900">Personal Data:</strong> Any information that identifies or can reasonably be used to identify an individual, directly or indirectly.</p>
              </div>
              <div className="pl-6 border-l-4 border-[#9f162e]/20">
                <p className="text-gray-700"><strong className="text-gray-900">Service:</strong> The educational programs, courses, digital content, and related services provided by New York Empire Academy.</p>
              </div>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Eye className="w-6 h-6 text-[#9f162e] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may collect personal information when you:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
              <li>Visit our website</li>
              <li>Register for an account</li>
              <li>Enroll in a course or program</li>
              <li>Subscribe to newsletters or communications</li>
              <li>Contact us or fill out forms</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">This information may include:</p>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <span className="text-gray-600">Name and username</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <span className="text-gray-600">Email address</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <span className="text-gray-600">Phone number</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <span className="text-gray-600">Mailing or billing address</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <span className="text-gray-600">Job title or professional background</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <span className="text-gray-600">Payment information</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <span className="text-gray-600">Account credentials</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <span className="text-gray-600">Age or date of birth</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We may also collect limited technical information automatically, such as IP address, browser type, device information, and usage data, to improve performance and security.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Lock className="w-6 h-6 text-[#9f162e] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the collected information to:
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <p className="text-gray-700">Provide, operate, and maintain our educational services</p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <p className="text-gray-700">Personalize user experience</p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <p className="text-gray-700">Improve our website, content, and offerings</p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <p className="text-gray-700">Process payments and transactions</p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <p className="text-gray-700">Communicate updates, announcements, and educational materials</p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <p className="text-gray-700">Provide customer support</p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <p className="text-gray-700">Comply with legal and regulatory obligations</p>
              </div>
            </div>
          </section>

          {/* Information from Third Parties */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information from Third Parties</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may receive information from third parties such as:
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <p className="text-gray-700">Payment processors</p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <p className="text-gray-700">Analytics providers</p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <p className="text-gray-700">Fraud prevention services</p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-[#9f162e] rounded-full mt-2"></div>
                <p className="text-gray-700">Social media platforms, when you interact with our pages or voluntarily share information</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              Such information is used only in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Sharing of Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sharing of Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may share your information:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-[#9f162e] font-bold">•</span>
                <span>With trusted service providers who assist us in operating the Service</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#9f162e] font-bold">•</span>
                <span>With affiliates or partners involved in delivering educational programs</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#9f162e] font-bold">•</span>
                <span>In connection with a business transfer such as a merger or acquisition</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#9f162e] font-bold">•</span>
                <span>When required by law, regulation, or legal process</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#9f162e] font-bold">•</span>
                <span>To protect the rights, safety, or property of New York Empire Academy, our users, or others</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
              <p className="text-blue-900 font-semibold">We do not sell your personal information.</p>
            </div>
          </section>

          {/* Email Communications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Communications</h2>
            <p className="text-gray-600 leading-relaxed">
              By providing your email address, you consent to receive communications related to your account, courses, or updates. You may unsubscribe from non-essential communications at any time using the link provided in our emails.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When data is no longer needed, it is securely deleted or anonymized.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement reasonable administrative, technical, and physical safeguards to protect your personal data. Payment information is processed using secure encryption technologies by authorized third-party providers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
            <p className="text-gray-600 leading-relaxed">
              As a United States-based organization, your information may be processed or stored in the United States or other countries. By using our Service, you consent to the transfer of your information across borders, subject to applicable data protection laws.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Depending on your location, you may have rights to:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-[#9f162e] transition-colors">
                <p className="text-gray-700">Access the personal data we hold about you</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:border-[#9f162e] transition-colors">
                <p className="text-gray-700">Request correction or deletion of your personal data</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:border-[#9f162e] transition-colors">
                <p className="text-gray-700">Restrict or object to certain processing activities</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:border-[#9f162e] transition-colors">
                <p className="text-gray-700">Withdraw consent where processing is based on consent</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              Requests can be made by contacting us through the details provided below.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are not directed to children under the age of 13. We do not knowingly collect personal data from children. If we become aware that such data has been collected without parental consent, we will take steps to delete it.
            </p>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies, local storage, sessions, and similar technologies to enhance functionality, analyze usage, and improve user experience. You can control cookie preferences through your browser settings, though disabling cookies may affect site functionality.
            </p>
          </section>

          {/* GDPR */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">GDPR and International Privacy Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              If you are located in the European Economic Area (EEA), you are entitled to rights under the General Data Protection Regulation (GDPR), including access, correction, portability, and deletion of your personal data. We process personal data in accordance with GDPR principles and applicable safeguards.
            </p>
          </section>

          {/* California Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">California Privacy Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              California residents may have additional rights under applicable law, including the right to request access to or deletion of personal information. We do not sell personal information.
            </p>
          </section>

          {/* Links to Other Websites */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Links to Other Websites</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Service may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites. Please review their policies separately.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Updates will be posted on this page, and continued use of the Service constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact New York Empire Academy:
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#9f162e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#9f162e]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:hello@nyempireacademy.com" className="text-gray-900 hover:text-[#9f162e] transition-colors font-semibold">
                    hello@nyempireacademy.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#9f162e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#9f162e]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-900 font-semibold">+1 (347) 891-3911</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#9f162e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-[#9f162e]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-gray-900 font-semibold">Empire State Building<br />20 W 34th St, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Last Updated: December 2024
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

