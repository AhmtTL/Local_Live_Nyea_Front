import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, Trophy, Target } from "lucide-react";
import { motion } from "framer-motion";

const ProjectOlympiads: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/programs"
              className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Programs
            </Link>

            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-purple-600/80 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wider">
                WORKSHOP
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Academic Project Olympiads
            </h1>

            <p className="text-xl text-purple-100 mb-8 max-w-3xl leading-relaxed">
              Compete in prestigious academic competitions and showcase your research, innovation, and problem-solving skills on a global stage.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-purple-300" />
                <span>Year-round competitions</span>
              </div>
              <div className="flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-purple-300" />
                <span>International recognition</span>
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
                Academic Project Olympiads provide students with the opportunity to participate in competitive academic events, develop research projects, and compete against peers from around the world. Our program prepares students for various international competitions and olympiads.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Competition Areas
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Mathematics and Science Olympiads</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Research project competitions</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Innovation and entrepreneurship challenges</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">International academic competitions</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Team-based problem solving events</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Benefits
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Enhanced problem-solving and critical thinking skills</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">International recognition and awards</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">College application enhancement</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Networking with top students worldwide</span>
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
                Join the Competition
              </h3>
              <p className="text-gray-600 mb-6">
                Learn more about our Academic Project Olympiads program and how to participate.
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

export default ProjectOlympiads;

