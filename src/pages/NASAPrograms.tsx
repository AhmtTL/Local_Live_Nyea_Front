import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, ArrowRight, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import Stats from "../components/nasa/Stats";
import ProgramFeatures from "../components/nasa/ProgramFeatures";
import ProgramActivities from "../components/nasa/ProgramActivities";
import Details from "../components/nasa/Details";
import CTA from "../components/nasa/CTA";
import FAQ from "../components/nasa/FAQ";
import Training from "../components/nasa/Training";
import { Program } from "../types/program";
import apiClient from "../services/api";

const NASAPrograms: React.FC = () => {
    const { clearAndEnroll } = useCart();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [program8Days, setProgram8Days] = useState<Program | null>(null);
    const [program12Days, setProgram12Days] = useState<Program | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch both NASA programs
                const [response8Days, response12Days] = await Promise.all([apiClient.getProgram("nasa-space-training-8days"), apiClient.getProgram("nasa-space-training")]);

                if (response8Days.success) {
                    const programData = response8Days.data.program || response8Days.data;
                    setProgram8Days(programData);
                }

                if (response12Days.success) {
                    const programData = response12Days.data.program || response12Days.data;
                    setProgram12Days(programData);
                }

                if (!response8Days.success && !response12Days.success) {
                    setError("Programs not found");
                }
            } catch (err: any) {
                console.error("Error fetching programs:", err);
                setError("Failed to load program details");
            } finally {
                setLoading(false);
            }
        };

        fetchPrograms();
    }, []);

    // Handle scroll to training section when coming from programs page
    useEffect(() => {
        if (!loading && searchParams.get("scrollTo") === "training") {
            // Wait for page to fully render before scrolling
            const timer = setTimeout(() => {
                const trainingSection = document.getElementById("training-section");
                if (trainingSection) {
                    trainingSection.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [loading, searchParams]);

    const handleScrollToTraining = () => {
        const trainingSection = document.getElementById("training-section");
        if (trainingSection) {
            trainingSection.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading program details....</p>
                </div>
            </div>
        );
    }

    if (error || (!program8Days && !program12Days)) {
        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Programs Not Found</h1>
                        <p className="text-gray-600 mb-8">{error || "The programs you are looking for do not exist."}</p>
                        <Link to="/programs" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            Back to Programs
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <div className="relative py-12 md:py-16 lg:py-20 flex items-center justify-center overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0">
                    <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                        <source src="/videos/nasa.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30"></div>
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div> */}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
                    <motion.div
                        className="w-auto inline-flex items-center px-8 py-2 bg-[#F9731633] backdrop-blur-md rounded-full text-[#FB923C] text-sm font-medium mb-8 shadow-2xl border border-[#FB923C4D]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Rocket className="w-5 h-5 mr-3 text-[#FB923C]" />
                        <span className="text-[#FB923C] text-xs md:text-sm lg:text-md"> NASA PARTNERSHIP PROGRAM</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight"
                    >
                        SPACE
                        <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">EXPLORATION</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xs md:text-sm lg:text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                    >
                        Join NASA's "Seek Signs of Life" mission and explore the cosmos through cutting-edge space science education and real-world research experience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <button
                            onClick={handleScrollToTraining}
                            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-black text-sm md:text-md hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-2xl flex items-center"
                        >
                            <Rocket className="mr-3 h-6 w-6" />
                            ENROLL NOW
                        </button>
                        <Link
                            to="/contact"
                            className="border border-white text-white px-8 py-4 rounded-xl font-bold text-sm md:text-md hover:bg-white hover:text-black transition-all duration-300 flex items-center"
                        >
                            CONTACT US
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Stats Section */}
            <div id="program-details">
                <Stats />
            </div>

            {/* Program Features */}
            <ProgramFeatures />

            {/* Program Details */}
            <Details program8Days={program8Days} program12Days={program12Days} />

            {/* Program Activities Section */}
            <ProgramActivities />

            {/* Training Section */}
            <Training program8Days={program8Days} program12Days={program12Days} />

            {/* FAQ */}
            <FAQ />

            {/* CTA Section */}
            <CTA nasaProgram={program12Days || program8Days} />
        </div>
    );
};

export default NASAPrograms;
