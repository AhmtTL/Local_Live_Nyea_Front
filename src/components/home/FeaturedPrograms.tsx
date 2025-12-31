import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturedPrograms: React.FC = () => {
    const featuredPrograms = [
        {
            id: "ivy-league-future-ceo",
            title: "Future CEO Training Program",
            description: "Elite 2-week intensive leadership program at Ivy League institutions. Real-world CEO simulations with Ivy League professors.",
            image: "/images/future-1.jpeg",
            price: 14999,
            duration: "2 weeks",
            category: "Executive Training",
            featured: true,
            gradient: "from-blue-500 to-purple-600",
        },
        {
            id: "nasa-space-training",
            title: "NASA Space Training 2026",
            description: "Kennedy Space Center experience with astronaut training and Mars exploration simulation.",
            image: "/images/nasa-training.webp",
            price: 4555,
            pricePrefix: "from",
            duration: "8-12 DAYS",
            category: "NASA Partnership",
            featured: true,
            gradient: "from-orange-500 to-red-600",
        },
        {
            id: "cambridge-training",
            title: "Elite Workshop Series",
            // description: 'World-class, CPDUK-accredited workshops led by professors from top universities. Tailored for schools, universities, and executives.',
            description: "World-class workshops led by professors from top universities. Tailored for schools, universities, and executives.",
            image: "/images/test-prep.webp",
            price: "Custom",
            duration: "2 days+",
            category: "Professor-Led",
            featured: true,
            gradient: "from-green-500 to-blue-600",
        },
    ];

    return (
        <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#1f2444] via-[#2d3d66] to-[#9f162e]">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 via-transparent to-red-500/20"></div>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L93.3 25v50L50 100L6.7 75V25z' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E")`,
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-12 md:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full text-blue-400 text-xs md:text-sm font-medium mb-4 md:mb-8 border border-blue-400/30">
                        <Rocket className="w-4 h-4 mr-2" />
                        FEATURED PROGRAMS
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 md:mb-8 leading-tight">ACADEMIC EXCELLENCE PROGRAMS</h2>
                    <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-full md:max-w-4xl mx-auto leading-relaxed">
                        World-class education meets institutional excellence. These transformative programs are designed by leading universities and space agencies for educational
                        innovation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
                    {featuredPrograms.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group h-full flex"
                        >
                            <div className="relative group w-full flex flex-col">
                                {/* Glow effect */}
                                <div
                                    className={`absolute -inset-1 bg-gradient-to-r ${program.gradient} rounded-2xl md:rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}
                                ></div>

                                <Card className="relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl h-full flex flex-col">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={program.image}
                                            alt={program.title}
                                            className={`w-full h-56 md:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700 ${
                                                program.id === "ivy-league-future-ceo" ? "object-[center_20%]" : ""
                                            }`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                                            <span className="bg-black/60 backdrop-blur-md text-yellow-400 text-xs px-3 md:px-4 py-1 md:py-2 rounded-full font-bold uppercase tracking-wider border border-yellow-400/30">
                                                {program.category}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6">
                                            <span className="bg-black/60 backdrop-blur-md text-white text-xs px-3 md:px-4 py-1 md:py-2 rounded-full font-bold uppercase tracking-wider border border-white/30">
                                                {program.duration}
                                            </span>
                                        </div>

                                        {/* Premium badge */}
                                        {/* <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">PREMIUM</span>
                      </div>
                    </div> */}
                                    </div>

                                    <CardHeader className="pb-3 md:pb-4 relative p-4 md:p-6 flex-shrink-0">
                                        <CardTitle className="text-lg md:text-xl font-extrabold text-white group-hover:text-yellow-400 transition-colors mb-2 md:mb-3">
                                            {program.title}
                                        </CardTitle>
                                        <CardDescription className="text-gray-300 text-sm md:text-md leading-relaxed line-clamp-2">{program.description}</CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-0 p-4 md:p-6 flex-1 flex flex-col justify-end">
                                        <div className="flex items-end justify-between gap-4">
                                            <div className="space-y-1 flex-shrink-0">
                                                {typeof program.price === "number" ? (
                                                    <>
                                                        {(program as any).pricePrefix && (
                                                            <div className="text-xs uppercase tracking-wider mb-0.5 font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                                                {(program as any).pricePrefix}
                                                            </div>
                                                        )}
                                                        <span className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                                            ${program.price.toLocaleString()}
                                                        </span>
                                                        <div className="text-gray-400 text-xs uppercase tracking-wider">INVESTMENT</div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                                            {program.price}
                                                        </span>
                                                        <div className="text-gray-400 text-xs uppercase tracking-wider">
                                                            {typeof program.price === "string" && program.price.toLowerCase().startsWith("from") ? "INVESTMENT" : "QUOTE"}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            <Button variant="learn_more" className="group/btn font-bold border-0 shadow-lg text-sm md:text-base px-4 py-2 md:py-3 flex-shrink-0">
                                                <Link
                                                    to={
                                                        program.id === "ivy-league-future-ceo"
                                                            ? "/ivy-league-future-ceo"
                                                            : program.id === "nasa-space-training"
                                                            ? "/nasa-programs"
                                                            : program.id === "cambridge-training"
                                                            ? "/elite-workshops"
                                                            : `/programs/${program.id}`
                                                    }
                                                    className="flex items-center"
                                                >
                                                    <span className="hidden md:inline">LEARN MORE</span>
                                                    <span className="md:hidden">LEARN</span>
                                                    <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-12 md:mt-16 lg:mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Button variant="view_all" size="lg" className="font-black text-sm md:text-lg px-8 md:px-12 py-4 md:py-6 border-0 shadow-2xl uppercase tracking-wider">
                        <Link to="/programs" className="flex items-center">
                            <span className="hidden md:inline">VIEW ALL PROGRAMS</span>
                            <span className="md:hidden">ALL PROGRAMS</span>
                            <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-6 md:w-6" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedPrograms;
