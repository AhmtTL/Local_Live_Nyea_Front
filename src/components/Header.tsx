import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, User, ChevronDown, GraduationCap, BookOpen, Users, Phone, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { Button } from "./ui/button";
// import logo from '../assets/logo-white.svg';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isConsultingOpen, setIsConsultingOpen] = useState(false);
    const [isTrainingsOpen, setIsTrainingsOpen] = useState(false);
    const [isWorkshopsOpen, setIsWorkshopsOpen] = useState(false);
    const [isFeaturedOpen, setIsFeaturedOpen] = useState(false);
    // Mobile menu accordion states
    const [mobileConsultingOpen, setMobileConsultingOpen] = useState(false);
    const [mobileTrainingsOpen, setMobileTrainingsOpen] = useState(false);
    const [mobileWorkshopsOpen, setMobileWorkshopsOpen] = useState(false);
    const [mobileFeaturedOpen, setMobileFeaturedOpen] = useState(false);
    const { user, logout } = useAuth();
    const { getTotalItems } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    // const programs = [
    //   { name: 'Academic Consulting', path: '/programs/academic-consulting' },
    //   { name: 'Career Consulting', path: '/programs/career-consulting' },
    //   { name: 'Mentorship', path: '/programs/mentorship' },
    //   { name: 'Cambridge Training', path: '/programs/cambridge-training' },
    //   { name: 'Summer Schools', path: '/programs/summer-schools' },
    //   { name: 'Project Olympiads', path: '/programs/project-olympiads' },
    //   { name: 'Experiential Learning', path: '/programs/experiential-learning' },
    //   { name: 'Model UN', path: '/programs/model-un' },
    //   { name: 'Pre-College Programs', path: '/programs/pre-college' },
    // ];

    return (
        <motion.header className="relative bg-[#1f2444] shadow-lg sticky top-0 z-50" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-18 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <motion.div className="flex items-center" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            {/* Modern Logo */}
                            <img
                                src="/images/logo-icon_New.svg"
                                // src={logo}
                                alt="NY Empire Academy Logo"
                                className="h-12 w-auto mr-3 md:mr-4"
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6 relative">
                        {/* CONSULTING Dropdown */}
                        <div className="relative" onMouseEnter={() => setIsConsultingOpen(true)} onMouseLeave={() => setIsConsultingOpen(false)}>
                            <motion.button
                                className="flex items-center text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-all duration-300 font-semibold text-sm"
                                whileHover={{ scale: 1.05 }}
                            >
                                CONSULTING
                                <motion.div animate={{ rotate: isConsultingOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </motion.div>
                            </motion.button>

                            <AnimatePresence>
                                {isConsultingOpen && (
                                    <motion.div
                                        className="absolute left-0 top-full mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50"
                                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                    >
                                        <div className="p-4">
                                            <Link
                                                to="/programs/academic-consulting"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                                                onClick={() => setIsConsultingOpen(false)}
                                            >
                                                Academic Excellence Consulting
                                            </Link>
                                            <Link
                                                to="/programs/career-consulting"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                                                onClick={() => setIsConsultingOpen(false)}
                                            >
                                                Career Development Strategy
                                            </Link>
                                            <Link
                                                to="/programs/mentorship"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                                                onClick={() => setIsConsultingOpen(false)}
                                            >
                                                Premium Mentorship Program
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* TRAININGS Dropdown */}
                        <div className="relative" onMouseEnter={() => setIsTrainingsOpen(true)} onMouseLeave={() => setIsTrainingsOpen(false)}>
                            <motion.button
                                className="flex items-center text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-all duration-300 font-semibold text-sm"
                                whileHover={{ scale: 1.05 }}
                            >
                                TRAININGS
                                <motion.div animate={{ rotate: isTrainingsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </motion.div>
                            </motion.button>

                            <AnimatePresence>
                                {isTrainingsOpen && (
                                    <motion.div
                                        className="absolute left-0 top-full mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50"
                                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                    >
                                        <div className="p-4">
                                            <Link
                                                to="/programs/cambridge-training"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                                                onClick={() => setIsTrainingsOpen(false)}
                                            >
                                                Cambridge Research Excellence Program
                                            </Link>
                                            <Link
                                                to="/programs/pre-college"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                                                onClick={() => setIsTrainingsOpen(false)}
                                            >
                                                Pre-Collage Preparation Program
                                            </Link>
                                            <Link
                                                to="/teacher-development"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                                                onClick={() => setIsTrainingsOpen(false)}
                                            >
                                                Cambridge Teacher Development
                                            </Link>
                                            <Link
                                                to="/programs/experiential-learning"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                                                onClick={() => setIsTrainingsOpen(false)}
                                            >
                                                Experiential Learning Program
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* WORKSHOPS Dropdown */}
                        <div className="relative" onMouseEnter={() => setIsWorkshopsOpen(true)} onMouseLeave={() => setIsWorkshopsOpen(false)}>
                            <motion.button
                                className="flex items-center text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-all duration-300 font-semibold text-sm"
                                whileHover={{ scale: 1.05 }}
                            >
                                WORKSHOPS
                                <motion.div animate={{ rotate: isWorkshopsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </motion.div>
                            </motion.button>

                            <AnimatePresence>
                                {isWorkshopsOpen && (
                                    <motion.div
                                        className="absolute left-0 top-full mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50"
                                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                    >
                                        <div className="p-4">
                                            <Link
                                                to="/ivy-league-future-ceo"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                                                onClick={() => setIsWorkshopsOpen(false)}
                                            >
                                                Future CEO Training Camp
                                            </Link>
                                            <Link
                                                to="/elite-workshops/leadership-negotiation-communication"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                                                onClick={() => setIsWorkshopsOpen(false)}
                                            >
                                                Ivy League Negotiation Workshop
                                            </Link>
                                            <Link
                                                to="/programs/summer-academic"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                                                onClick={() => setIsWorkshopsOpen(false)}
                                            >
                                                Summer Academic Program
                                            </Link>
                                            <Link
                                                to="/programs/project-olympiads"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                                                onClick={() => setIsWorkshopsOpen(false)}
                                            >
                                                Academic Project Olympiads
                                            </Link>
                                            <Link
                                                to="/programs/model-un"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                                                onClick={() => setIsWorkshopsOpen(false)}
                                            >
                                                Model UN Leadership Program
                                            </Link>
                                            <Link
                                                to="/nasa-programs"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200"
                                                onClick={() => setIsWorkshopsOpen(false)}
                                            >
                                                NASA Space Exploration
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* FEATURED PROGRAMS Dropdown */}
                        <div className="relative" onMouseEnter={() => setIsFeaturedOpen(true)} onMouseLeave={() => setIsFeaturedOpen(false)}>
                            <motion.button
                                className="flex items-center text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-all duration-300 font-semibold text-sm"
                                whileHover={{ scale: 1.05 }}
                            >
                                FEATURED PROGRAMS
                                <motion.div animate={{ rotate: isFeaturedOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </motion.div>
                            </motion.button>

                            <AnimatePresence>
                                {isFeaturedOpen && (
                                    <motion.div
                                        className="absolute left-0 top-full mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50"
                                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                    >
                                        <div className="p-4">
                                            <Link
                                                to="/ivy-league-future-ceo"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200 font-semibold"
                                                onClick={() => setIsFeaturedOpen(false)}
                                            >
                                                Future CEO Training Camp
                                            </Link>
                                            <Link
                                                to="/elite-workshops/leadership-negotiation-communication"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200 font-semibold"
                                                onClick={() => setIsFeaturedOpen(false)}
                                            >
                                                Ivy League Negotiation Workshop
                                            </Link>
                                            <Link
                                                to="/teacher-development"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200 font-semibold"
                                                onClick={() => setIsFeaturedOpen(false)}
                                            >
                                                Teacher Development
                                            </Link>
                                            <Link
                                                to="/nasa-programs"
                                                className="block text-gray-700 hover:text-[#9f162e] text-sm py-2 px-3 rounded-lg hover:bg-gray-50/50 transition-all duration-200 font-semibold"
                                                onClick={() => setIsFeaturedOpen(false)}
                                            >
                                                NASA Space Exploration
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* ABOUT US Link */}
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Link to="/about" className="text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-all duration-300 font-semibold text-sm">
                                ABOUT US
                            </Link>
                        </motion.div>

                        {/* CONTACT Link */}
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Link to="/contact" className="text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-all duration-300 font-semibold text-sm flex items-center">
                                CONTACT
                            </Link>
                        </motion.div>
                    </nav>

                    {/* Right side buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* User Menu */}
                        {user ? (
                            <div className="flex items-center space-x-3">
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                    <Link to="/dashboard" className="text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-all duration-300">
                                        <User className="h-6 w-6" />
                                    </Link>
                                </motion.div>
                                <Button onClick={handleLogout} variant="ghost" size="sm" className="text-[#FFFFFFB2] hover:text-[#FFFFFF]">
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <Button variant="ghost" size="sm" className="text-[#FFFFFFB2] hover:text-[#1f2444]">
                                    <Link to="/signin">Sign In</Link>
                                </Button>
                                <Button variant="transparent" size="sm" className="shadow-md">
                                    <Link to="/signup">Sign Up</Link>
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-colors p-2"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="h-6 w-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="h-6 w-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="lg:hidden py-6 border-t border-[#FFFFFFB2]"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col space-y-2">
                                {/* CONSULTING Accordion */}
                                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                                    <button
                                        onClick={() => setMobileConsultingOpen(!mobileConsultingOpen)}
                                        className="w-full flex items-center justify-between text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-colors font-semibold py-2"
                                    >
                                        <span className="flex items-center">
                                            <GraduationCap className="h-4 w-4 mr-3" />
                                            CONSULTING
                                        </span>
                                        <motion.div animate={{ rotate: mobileConsultingOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                            <ChevronDown className="h-4 w-4" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {mobileConsultingOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pl-7 space-y-2 mt-2">
                                                    <Link
                                                        to="/programs/academic-consulting"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileConsultingOpen(false);
                                                        }}
                                                    >
                                                        Academic Excellence Consulting
                                                    </Link>
                                                    <Link
                                                        to="/programs/career-consulting"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileConsultingOpen(false);
                                                        }}
                                                    >
                                                        Career Development Strategy
                                                    </Link>
                                                    <Link
                                                        to="/programs/mentorship"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileConsultingOpen(false);
                                                        }}
                                                    >
                                                        Premium Mentorship Program
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* TRAININGS Accordion */}
                                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.15 }}>
                                    <button
                                        onClick={() => setMobileTrainingsOpen(!mobileTrainingsOpen)}
                                        className="w-full flex items-center justify-between text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-colors font-semibold py-2"
                                    >
                                        <span className="flex items-center">
                                            <BookOpen className="h-4 w-4 mr-3" />
                                            TRAININGS
                                        </span>
                                        <motion.div animate={{ rotate: mobileTrainingsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                            <ChevronDown className="h-4 w-4" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {mobileTrainingsOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pl-7 space-y-2 mt-2">
                                                    <Link
                                                        to="/programs/cambridge-training"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileTrainingsOpen(false);
                                                        }}
                                                    >
                                                        Cambridge Research Excellence Program
                                                    </Link>
                                                    <Link
                                                        to="/programs/pre-college"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileTrainingsOpen(false);
                                                        }}
                                                    >
                                                        Pre-Collage Preparation Program
                                                    </Link>
                                                    <Link
                                                        to="/teacher-development"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileTrainingsOpen(false);
                                                        }}
                                                    >
                                                        Cambridge Teacher Development
                                                    </Link>
                                                    <Link
                                                        to="/programs/experiential-learning"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileTrainingsOpen(false);
                                                        }}
                                                    >
                                                        Experiential Learning Program
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* WORKSHOPS Accordion */}
                                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                                    <button
                                        onClick={() => setMobileWorkshopsOpen(!mobileWorkshopsOpen)}
                                        className="w-full flex items-center justify-between text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-colors font-semibold py-2"
                                    >
                                        <span className="flex items-center">
                                            <GraduationCap className="h-4 w-4 mr-3" />
                                            WORKSHOPS
                                        </span>
                                        <motion.div animate={{ rotate: mobileWorkshopsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                            <ChevronDown className="h-4 w-4" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {mobileWorkshopsOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pl-7 space-y-2 mt-2">
                                                    <Link
                                                        to="/ivy-league-future-ceo"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileWorkshopsOpen(false);
                                                        }}
                                                    >
                                                        Future CEO Training Camp
                                                    </Link>
                                                    <Link
                                                        to="/elite-workshops/leadership-negotiation-communication"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileWorkshopsOpen(false);
                                                        }}
                                                    >
                                                        Ivy League Negotiation Workshop
                                                    </Link>
                                                    <Link
                                                        to="/programs/summer-academic"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileWorkshopsOpen(false);
                                                        }}
                                                    >
                                                        Summer Academic Program
                                                    </Link>
                                                    <Link
                                                        to="/programs/project-olympiads"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileWorkshopsOpen(false);
                                                        }}
                                                    >
                                                        Academic Project Olympiads
                                                    </Link>
                                                    <Link
                                                        to="/programs/model-un"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileWorkshopsOpen(false);
                                                        }}
                                                    >
                                                        Model UN Leadership Program
                                                    </Link>
                                                    <Link
                                                        to="/nasa-programs"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileWorkshopsOpen(false);
                                                        }}
                                                    >
                                                        NASA Space Exploration
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* FEATURED PROGRAMS Accordion */}
                                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.25 }}>
                                    <button
                                        onClick={() => setMobileFeaturedOpen(!mobileFeaturedOpen)}
                                        className="w-full flex items-center justify-between text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-colors font-semibold py-2"
                                    >
                                        <span className="flex items-center">
                                            <Star className="h-4 w-4 mr-3" />
                                            FEATURED PROGRAMS
                                        </span>
                                        <motion.div animate={{ rotate: mobileFeaturedOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                            <ChevronDown className="h-4 w-4" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {mobileFeaturedOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pl-7 space-y-2 mt-2">
                                                    <Link
                                                        to="/ivy-league-future-ceo"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5 font-semibold"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileFeaturedOpen(false);
                                                        }}
                                                    >
                                                        Future CEO Training Camp
                                                    </Link>
                                                    <Link
                                                        to="/elite-workshops/leadership-negotiation-communication"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5 font-semibold"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileFeaturedOpen(false);
                                                        }}
                                                    >
                                                        Ivy League Negotiation Workshop
                                                    </Link>
                                                    <Link
                                                        to="/teacher-development"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5 font-semibold"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileFeaturedOpen(false);
                                                        }}
                                                    >
                                                        Teacher Development
                                                    </Link>
                                                    <Link
                                                        to="/nasa-programs"
                                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] text-sm py-1.5 font-semibold"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileFeaturedOpen(false);
                                                        }}
                                                    >
                                                        NASA Space Exploration
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* ABOUT US Link */}
                                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                                    <Link
                                        to="/about"
                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-colors font-semibold py-2 flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Users className="h-4 w-4 mr-3" />
                                        ABOUT US
                                    </Link>
                                </motion.div>

                                {/* CONTACT Link */}
                                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35 }}>
                                    <Link
                                        to="/contact"
                                        className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-colors font-semibold py-2 flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Phone className="h-4 w-4 mr-3" />
                                        CONTACT
                                    </Link>
                                </motion.div>

                                {user ? (
                                    <>
                                        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.45 }}>
                                            <Link
                                                to="/dashboard"
                                                className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-colors font-semibold py-2 flex items-center"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <User className="h-4 w-4 mr-3" />
                                                Dashboard
                                            </Link>
                                        </motion.div>
                                        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                                            <button
                                                onClick={() => {
                                                    handleLogout();
                                                    setIsMenuOpen(false);
                                                }}
                                                className="block text-left text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-colors font-semibold py-2 w-full"
                                            >
                                                Logout
                                            </button>
                                        </motion.div>
                                    </>
                                ) : (
                                    <>
                                        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.45 }}>
                                            <Link
                                                to="/signin"
                                                className="block text-[#FFFFFFB2] hover:text-[#FFFFFF] transition-colors font-semibold py-2"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Sign In
                                            </Link>
                                        </motion.div>
                                        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                                            <Link
                                                to="/signup"
                                                className="inline-block bg-transparent border border-white text-white hover:bg-white hover:text-[#1f2444] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 mt-2"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Sign Up
                                            </Link>
                                        </motion.div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;
