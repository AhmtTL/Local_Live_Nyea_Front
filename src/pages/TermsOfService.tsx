import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Scale, CreditCard, Users, Lock, Globe, Mail, Phone, MapPin } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
                initial={{ scale: 0, y: -50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative"
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#bf1f3c] via-[#1e3665] to-[#bf1f3c] rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
                
                {/* Decorative balance indicators */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -left-3 top-1/2 w-8 h-1 bg-[#bf1f3c] rounded-full opacity-70"
                ></motion.div>
                <motion.div
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -right-3 top-1/2 w-8 h-1 bg-[#1e3665] rounded-full opacity-70"
                ></motion.div>
                
                {/* Icon container with justice theme */}
                <div className="relative p-6 bg-gradient-to-br from-[#1e3665] via-[#2d3d66] to-[#bf1f3c] rounded-2xl shadow-2xl border-2 border-white/30 hover:border-white/50 transition-all group">
                  <Scale className="w-16 h-16 text-white group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                  
                  {/* Inner shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#bf1f3c] rounded-tl-lg"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#1e3665] rounded-br-lg"></div>
              </motion.div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By accessing our website, you agree to these terms.
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
          {/* General Terms */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-[#9f162e] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">General Terms</h2>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 leading-relaxed">
                By accessing or using the website and services of <strong>New York Empire Academy</strong>, you agree to be bound by these Terms of Service. These terms apply to all visitors, users, students, and others who access or use our website or services.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-red-900 font-semibold">
                If you do not agree with any part of these terms, you must not use our website or services.
              </p>
            </div>
          </section>

          {/* License */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Lock className="w-6 h-6 text-[#9f162e] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">License</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              New York Empire Academy grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the website strictly in accordance with these Terms of Service.
            </p>
          </section>

          {/* Definitions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Definitions</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#9f162e]">
                <p className="text-gray-700">
                  <strong className="text-gray-900">Company:</strong> Refers to New York Empire Academy, Empire State Building, 20 W 34th St, New York, NY 10001
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#9f162e]">
                <p className="text-gray-700">
                  <strong className="text-gray-900">Service:</strong> Educational programs, digital content, applications, and services offered through the website
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#9f162e]">
                <p className="text-gray-700">
                  <strong className="text-gray-900">Website:</strong> The official website of New York Empire Academy
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#9f162e]">
                <p className="text-gray-700">
                  <strong className="text-gray-900">You:</strong> Any individual or entity accessing or using the Service
                </p>
              </div>
            </div>
          </section>

          {/* Restrictions */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-6 h-6 text-[#9f162e] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Restrictions</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">You agree not to:</p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <span className="text-red-600 font-bold text-xl">×</span>
                <p className="text-gray-700">Copy, modify, distribute, sell, or lease any part of the website or its content</p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <span className="text-red-600 font-bold text-xl">×</span>
                <p className="text-gray-700">Reverse engineer or attempt to extract the source code</p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <span className="text-red-600 font-bold text-xl">×</span>
                <p className="text-gray-700">Use the website for unlawful or unauthorized purposes</p>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <span className="text-red-600 font-bold text-xl">×</span>
                <p className="text-gray-700">Remove or alter any copyright, trademark, or proprietary notices</p>
              </div>
            </div>
          </section>

          {/* Payments */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <CreditCard className="w-6 h-6 text-[#9f162e] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Payments, Refunds and Cancellations</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              By making a purchase, you agree to the pricing, payment terms, and refund conditions communicated at the time of purchase. If you are not satisfied with a service, you may contact us to discuss available options subject to our refund policy.
            </p>
          </section>

          {/* User Suggestions */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-[#9f162e] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">User Suggestions</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Any feedback, ideas, or suggestions you submit become the exclusive property of New York Empire Academy and may be used without restriction or compensation.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Globe className="w-6 h-6 text-[#9f162e] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Third-Party Services</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The website may include links to third-party services. We are not responsible for the content, accuracy, or practices of third-party websites or services.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
            <div className="bg-gradient-to-r from-[#9f162e]/10 to-[#9f162e]/5 border-l-4 border-[#9f162e] p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed mb-3">
                All content, materials, designs, text, graphics, videos, logos, and software are the intellectual property of New York Empire Academy and are protected by applicable copyright and trademark laws.
              </p>
              <p className="text-gray-900 font-semibold">
                Unauthorized use is strictly prohibited.
              </p>
            </div>
          </section>

          {/* Disclaimer of Warranties */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclaimer of Warranties</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                The Service is provided "as is" and "as available", without warranties of any kind. We do not guarantee uninterrupted or error-free operation.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, New York Empire Academy shall not be liable for any indirect, incidental, consequential, or special damages arising from the use of or inability to use the Service.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate access to the Service at any time, without notice, if these Terms are violated.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and interpreted in accordance with the laws of the United States of America.
            </p>
          </section>

          {/* Educational Disclosure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Educational Disclosure</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed mb-3">
                All information and content provided by New York Empire Academy is intended for educational and informational purposes only. Nothing on the Website should be construed as professional, legal, medical, or other specialized advice, or as a guarantee of outcomes or results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                New York Empire Academy does not warrant the accuracy, completeness, or usefulness of any educational content, including content supplied by third parties. No advice or information provided by the Company or its representatives shall create any warranty.
              </p>
            </div>
          </section>

          {/* Errors and Omissions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Errors and Omissions Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              New York Empire Academy is not responsible for any errors, omissions, or inaccuracies in the content, code, or materials provided on the Website.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Under no circumstances shall New York Empire Academy be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of, or inability to use, the Service or its content, whether based on contract, negligence, or any other legal theory.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to add, remove, or modify Website content at any time without prior notice.
            </p>
          </section>

          {/* General Disclaimer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">General Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Service and all related content are provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, either express or implied.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              New York Empire Academy may include content supplied by third parties and acts solely as a distributor of such content. We do not exercise editorial control over third-party materials and make no representations regarding their accuracy, reliability, or currency.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Without limiting the foregoing, we disclaim all warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted or error-free operation of the Service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              No oral or written information or advice provided by New York Empire Academy or its affiliates, employees, or representatives shall create any warranty.
            </p>
          </section>

          {/* Links to Other Websites */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Links to Other Websites</h2>
            <p className="text-gray-600 leading-relaxed">
              We may include links to external websites or third-party services. We are not responsible for the content or practices of any third-party sites or services.
            </p>
          </section>

          {/* Copyright Disclaimer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Copyright Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              All intellectual property rights related to the Website and its content are owned by or licensed to New York Empire Academy. No material may be copied, reproduced, distributed, or otherwise used without prior written permission, except where permitted by mandatory applicable law.
            </p>
          </section>

          {/* Your Consent */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Consent</h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                By using our Website, registering for an account, or purchasing our services, you acknowledge that you have read, understood, and agree to this Disclaimer and Terms of Service.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may update these Terms from time to time to reflect changes to our services or policies. Any updates will be posted on this page.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Continued use of the Service after changes become effective constitutes acceptance of the revised Terms. If you do not agree, you should discontinue use of the Service.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions regarding these Terms of Service, please contact New York Empire Academy:
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

export default TermsOfService;

