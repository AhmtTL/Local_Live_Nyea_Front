import React from "react";
import { motion } from "framer-motion";
import { Cookie, Shield, Settings, BarChart3, Share2, AlertCircle, Mail, Phone, MapPin } from "lucide-react";

const CookiePolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#1f2444] via-[#2d3d66] to-[#1f2444] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
                        <div className="flex justify-center mb-6">
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                                className="relative"
                            >
                                {/* Outer glow effect */}
                                <div className="absolute -inset-4 bg-gradient-to-tr from-[#1e3665] via-[#bf1f3c] to-[#1e3665] rounded-full blur-2xl opacity-50 animate-pulse"></div>

                                {/* Decorative cookie crumbs */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -top-3 right-4 w-3 h-3 bg-[#bf1f3c] rounded-full opacity-70"
                                ></motion.div>
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                                    className="absolute top-0 -left-3 w-2 h-2 bg-[#1e3665] rounded-full opacity-60"
                                ></motion.div>
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 2.2, repeat: Infinity, delay: 0.6 }}
                                    className="absolute -bottom-2 right-2 w-2 h-2 bg-[#bf1f3c] rounded-full opacity-50"
                                ></motion.div>

                                {/* Icon container with cookie theme */}
                                <div className="relative p-6 bg-gradient-to-br from-[#1e3665] via-[#2d3d66] to-[#bf1f3c] rounded-full shadow-2xl border-2 border-white/30 hover:border-white/50 transition-all group">
                                    <Cookie className="w-16 h-16 text-white group-hover:rotate-12 transition-transform" strokeWidth={2.5} />

                                    {/* Inner shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </motion.div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">Learn how we use cookies and similar technologies to enhance your experience on our website.</p>
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
                        <p className="text-gray-600 leading-relaxed">
                            This Cookie Policy explains how New York Empire Academy and its affiliates use cookies and similar technologies to recognize you when you visit our
                            website, including any related domains or subdomains. It explains what these technologies are, why we use them, and the choices you have to control
                            them.
                        </p>
                    </section>

                    {/* Definitions */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Definitions and Key Terms</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            To help explain things as clearly as possible in this Cookie Policy, every time any of these terms are referenced, they are strictly defined as follows:
                        </p>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#9f162e]">
                                <p className="text-gray-700">
                                    <strong className="text-gray-900">Cookie:</strong> A small amount of data generated by a website and saved by your web browser. It is used to
                                    identify your browser, provide analytics, and remember information about you such as your language preference or login information.
                                </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#9f162e]">
                                <p className="text-gray-700">
                                    <strong className="text-gray-900">Company:</strong> When this policy mentions "Company," "we," "us," or "our," it refers to New York Empire
                                    Academy, which is responsible for your information under this Cookie Policy.
                                </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#9f162e]">
                                <p className="text-gray-700">
                                    <strong className="text-gray-900">Device:</strong> Any internet-connected device such as a phone, tablet, computer, or any other device that can
                                    be used to visit our website and use our services.
                                </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#9f162e]">
                                <p className="text-gray-700">
                                    <strong className="text-gray-900">Personal Data:</strong> Any information that directly or indirectly, or in connection with other information,
                                    allows for the identification of a natural person.
                                </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#9f162e]">
                                <p className="text-gray-700">
                                    <strong className="text-gray-900">Service:</strong> Refers to the services provided by New York Empire Academy through this website and related
                                    platforms.
                                </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#9f162e]">
                                <p className="text-gray-700">
                                    <strong className="text-gray-900">Third-party Service:</strong> Refers to advertisers, analytics providers, marketing partners, social media
                                    platforms, and others who provide content or services that may appear on or be integrated into our website.
                                </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#9f162e]">
                                <p className="text-gray-700">
                                    <strong className="text-gray-900">Website:</strong> The official website of New York Empire Academy, accessible via www.newyorkempireacademy.com
                                    (or your active domain).
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* What is a Cookie */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is a Cookie?</h2>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                            <p className="text-gray-700 leading-relaxed mb-3">
                                A cookie is a small text file that is stored on your computer or other internet-connected device to identify your browser, provide analytics, and
                                remember information such as your preferences or login details.
                            </p>
                            <p className="text-blue-900 font-semibold">Cookies are safe. They cannot be used to run programs or deliver viruses to your device.</p>
                        </div>
                    </section>

                    {/* Why We Use Cookies */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Do We Use Cookies?</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">We use first-party and third-party cookies for the following purposes:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                <Shield className="w-5 h-5 text-[#9f162e] mt-1 flex-shrink-0" />
                                <p className="text-gray-700">To ensure the proper functioning of our website</p>
                            </div>
                            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                <Settings className="w-5 h-5 text-[#9f162e] mt-1 flex-shrink-0" />
                                <p className="text-gray-700">To improve user experience and website performance</p>
                            </div>
                            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                <Cookie className="w-5 h-5 text-[#9f162e] mt-1 flex-shrink-0" />
                                <p className="text-gray-700">To remember user preferences and settings</p>
                            </div>
                            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                <BarChart3 className="w-5 h-5 text-[#9f162e] mt-1 flex-shrink-0" />
                                <p className="text-gray-700">To analyze website usage and performance</p>
                            </div>
                            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                <Share2 className="w-5 h-5 text-[#9f162e] mt-1 flex-shrink-0" />
                                <p className="text-gray-700">To personalize content and marketing communications</p>
                            </div>
                            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                <AlertCircle className="w-5 h-5 text-[#9f162e] mt-1 flex-shrink-0" />
                                <p className="text-gray-700">To tailor advertising to users' interests where permitted by law</p>
                            </div>
                        </div>
                    </section>

                    {/* Types of Cookies */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Cookies may be <strong>session cookies</strong> or <strong>persistent cookies</strong>:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#9f162e] transition-colors">
                                <h3 className="font-bold text-gray-900 mb-2">Session Cookies</h3>
                                <p className="text-gray-600">Expire automatically when you close your browser.</p>
                            </div>
                            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#9f162e] transition-colors">
                                <h3 className="font-bold text-gray-900 mb-2">Persistent Cookies</h3>
                                <p className="text-gray-600">Remain on your device until they expire or are deleted.</p>
                            </div>
                        </div>

                        {/* Cookie Categories */}
                        <div className="space-y-6">
                            {/* Strictly Necessary */}
                            <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50">
                                <div className="flex items-center mb-3">
                                    <Shield className="w-6 h-6 text-red-600 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-900">Strictly Necessary Cookies</h3>
                                </div>
                                <p className="text-gray-700">
                                    These cookies are essential for the website to function properly and cannot be disabled in our systems. They enable core functionality such as
                                    security, accessibility, and network management. Without these cookies, the website may not work correctly.
                                </p>
                            </div>

                            {/* Performance */}
                            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
                                <div className="flex items-center mb-3">
                                    <Settings className="w-6 h-6 text-blue-600 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-900">Performance and Functionality Cookies</h3>
                                </div>
                                <p className="text-gray-700">
                                    These cookies enhance the performance and functionality of our website but are not essential. Without them, some features such as videos or
                                    saved login details may not function properly.
                                </p>
                            </div>

                            {/* Analytics */}
                            <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                                <div className="flex items-center mb-3">
                                    <BarChart3 className="w-6 h-6 text-green-600 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-900">Analytics and Customization Cookies</h3>
                                </div>
                                <p className="text-gray-700 mb-3">
                                    These cookies collect information to help us understand how visitors use our website and how effective our marketing campaigns are. We may use
                                    tools such as <strong>Google Analytics</strong>, which collect limited data directly from end-user browsers.
                                </p>
                                <p className="text-sm text-gray-600 italic">You can opt out of Google Analytics tracking by visiting Google's opt-out page.</p>
                            </div>

                            {/* Marketing */}
                            <div className="border-2 border-purple-200 rounded-lg p-6 bg-purple-50">
                                <div className="flex items-center mb-3">
                                    <Share2 className="w-6 h-6 text-purple-600 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-900">Marketing Cookies</h3>
                                </div>
                                <p className="text-gray-700">
                                    Marketing cookies are used to deliver relevant advertising and track the effectiveness of marketing campaigns. These cookies may be set through
                                    our website by advertising partners.
                                </p>
                            </div>

                            {/* Social Media */}
                            <div className="border-2 border-orange-200 rounded-lg p-6 bg-orange-50">
                                <div className="flex items-center mb-3">
                                    <Share2 className="w-6 h-6 text-orange-600 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-900">Social Media Cookies</h3>
                                </div>
                                <p className="text-gray-700">
                                    These cookies are set by social media platforms when you interact with content on our website, such as sharing or liking content. They may also
                                    be used to track conversions and build targeted advertising audiences.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Third-Party Cookies */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                            <p className="text-gray-700 leading-relaxed">
                                Some cookies on our website are placed by third parties. These third parties may collect data about your online activities over time and across
                                different websites. We do not control these cookies.
                            </p>
                        </div>
                    </section>

                    {/* Managing Cookies */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Can You Manage Cookies?</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but doing so may affect the
                            functionality and performance of our website.
                        </p>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
                            <p className="text-amber-900 font-semibold">⚠️ You may lose saved preferences such as login details if cookies are disabled.</p>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">For more information, please refer to your browser's help documentation:</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-[#9f162e] rounded-full"></span>
                                <span>Google Chrome</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-[#9f162e] rounded-full"></span>
                                <span>Mozilla Firefox</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-[#9f162e] rounded-full"></span>
                                <span>Safari (Desktop and Mobile)</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-[#9f162e] rounded-full"></span>
                                <span>Microsoft Edge</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-[#9f162e] rounded-full"></span>
                                <span>Opera</span>
                            </li>
                        </ul>
                    </section>

                    {/* Blocking Cookies */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Blocking and Disabling Cookies</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You can block cookies and similar technologies in your browser settings. However, blocking essential cookies may prevent parts of our website from
                            functioning properly.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Disabling cookies does not automatically delete existing cookies. You must remove them manually through your browser settings.
                        </p>
                    </section>

                    {/* Your Consent */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Consent</h2>
                        <div className="bg-gradient-to-r from-[#9f162e]/10 to-[#9f162e]/5 border-l-4 border-[#9f162e] p-6 rounded-r-lg">
                            <p className="text-gray-700 leading-relaxed">
                                By using our website, registering an account, or accessing our services, you consent to the use of cookies as described in this Cookie Policy.
                            </p>
                        </div>
                    </section>

                    {/* Changes to Policy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Cookie Policy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may update this Cookie Policy from time to time to reflect changes in our services or legal requirements. When required, we will notify you of
                            significant changes. Continued use of our website means you accept the updated Cookie Policy.
                        </p>
                    </section>

                    {/* Contact Section */}
                    <section className="mt-12 pt-8 border-t border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">Don't hesitate to contact us if you have any questions regarding our Cookie Policy:</p>
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
                                    <p className="text-gray-900 font-semibold">
                                        Empire State Building
                                        <br />
                                        20 W 34th St, New York, NY 10001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Last Updated */}
                    <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                        <p className="text-sm text-gray-500">Last Updated: December 2024</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CookiePolicy;
