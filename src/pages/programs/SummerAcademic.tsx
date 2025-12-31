import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const SummerAcademic: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/programs"
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Programs
            </Link>

            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-600/80 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wider">
                WORKSHOP
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Summer Academic Program
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
              An intensive summer program designed to enhance academic skills, explore new subjects, and prepare for future academic challenges.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-300" />
                <span>4-8 weeks</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-300" />
                <span>Small class sizes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Program Overview
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our Summer Academic Program offers students the opportunity to dive deep into academic subjects, develop critical thinking skills, and gain hands-on experience in various fields. The program combines rigorous academic coursework with engaging activities and real-world applications.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Program Features
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Intensive academic coursework in multiple subjects</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Expert instructors from top universities</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Hands-on projects and research opportunities</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">College preparation workshops</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Certificate of completion</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 sticky top-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get Started
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us to learn more about our Summer Academic Program and enrollment options.
              </p>
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-[#9f162e] to-[#1f2444] text-white font-bold py-4 px-6 rounded-xl hover:from-[#1f2444] hover:to-[#9f162e] transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerAcademic;

