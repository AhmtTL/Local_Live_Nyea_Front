import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, Lightbulb, Globe } from "lucide-react";
import { motion } from "framer-motion";

const ExperientialLearning: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/programs"
              className="inline-flex items-center text-teal-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Programs
            </Link>

            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-teal-600/80 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wider">
                TRAINING
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Experiential Learning Program
            </h1>

            <p className="text-xl text-teal-100 mb-8 max-w-3xl leading-relaxed">
              Learn through hands-on experience, real-world projects, and immersive activities that connect classroom knowledge with practical application.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-teal-300" />
                <span>Flexible duration</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-teal-300" />
                <span>Real-world projects</span>
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
                Our Experiential Learning Program emphasizes learning by doing. Students engage in real-world projects, internships, field trips, and hands-on activities that make learning meaningful and memorable. This approach helps students develop practical skills, critical thinking, and a deeper understanding of their subjects.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Learning Methods
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Project-based learning with real-world applications</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Internships and work experience opportunities</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Field trips and site visits</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Collaborative group projects</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reflection and portfolio development</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Benefits
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Enhanced retention and understanding of concepts</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Development of practical, applicable skills</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Increased engagement and motivation</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Better preparation for future careers</span>
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
                Start Learning
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us to learn more about our Experiential Learning Program.
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

export default ExperientialLearning;

