import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const PreCollege: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/programs"
              className="inline-flex items-center text-orange-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Programs
            </Link>

            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-orange-600/80 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wider">
                TRAINING
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Pre-Collage Preparation Program
            </h1>

            <p className="text-xl text-orange-100 mb-8 max-w-3xl leading-relaxed">
              Comprehensive preparation program designed to help students transition smoothly from high school to college, developing essential academic and life skills.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-300" />
                <span>6-12 months</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-orange-300" />
                <span>Personalized guidance</span>
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
                Our Pre-Collage Preparation Program is designed to equip students with the knowledge, skills, and confidence needed to succeed in college. The program covers academic preparation, college application guidance, and essential life skills for college success.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Program Components
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">College application strategy and essay writing</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">SAT/ACT preparation and test-taking strategies</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Academic skill development (research, writing, critical thinking)</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">College readiness workshops</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Financial aid and scholarship guidance</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Benefits
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Increased college acceptance rates</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Better prepared for college-level coursework</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Enhanced time management and study skills</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Confidence in college transition</span>
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
                Contact us to learn more about our Pre-Collage Preparation Program.
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

export default PreCollege;

