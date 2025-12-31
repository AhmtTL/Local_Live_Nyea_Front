import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, Globe, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const ModelUN: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/programs"
              className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Programs
            </Link>

            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-green-600/80 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wider">
                WORKSHOP
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Model UN Leadership Program
            </h1>

            <p className="text-xl text-green-100 mb-8 max-w-3xl leading-relaxed">
              Develop diplomatic skills, public speaking abilities, and global awareness through participation in Model United Nations conferences and leadership training.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-green-300" />
                <span>Ongoing program</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-green-300" />
                <span>International conferences</span>
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
                Our Model UN Leadership Program provides students with comprehensive training in diplomacy, negotiation, public speaking, and international relations. Participants engage in simulated UN conferences, develop leadership skills, and gain a deeper understanding of global issues.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Program Components
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Intensive Model UN training workshops</span>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Participation in regional and international conferences</span>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Public speaking and debate training</span>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Research and position paper writing</span>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Leadership development activities</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Skills Developed
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Diplomatic negotiation and consensus-building</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Public speaking and presentation skills</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Critical thinking and research abilities</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Global awareness and cultural understanding</span>
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
                Join Model UN
              </h3>
              <p className="text-gray-600 mb-6">
                Learn more about our Model UN Leadership Program and how to get involved.
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

export default ModelUN;

