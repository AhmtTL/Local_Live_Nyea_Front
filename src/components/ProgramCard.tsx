import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";
import { useCart } from "../context/CartContext";
import { replaceHarvardWithIvyLeague } from "../utils/utils";

export interface ProgramCardProps {
    program: {
        id: number;
        title: string;
        slug?: string;
        description: string;
        price: string | number;
        formatted_price?: string;
        duration: string;
        category: string;
        image: string;
        features: string[];
        available_tickets?: number;
        sold_tickets?: number;
        remaining_tickets?: number;
        is_sold_out?: boolean;
    };
    onAddToCart?: (program: any) => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, onAddToCart }) => {
    const navigate = useNavigate();
    const { clearAndEnroll } = useCart();

    /**
     * Get display duration for NASA programs
     * NASA has 2 program options (8-day and 12-day), so we show "8-12 DAYS"
     * For other programs, return the original duration from database
     */
    const getDisplayDuration = () => {
        const programSlug = program.slug;
        const programTitle = program.title?.toLowerCase();
        const isNASAProgram = programSlug === "nasa-space-training-8days" || programSlug === "nasa-space-training" || programTitle?.includes("nasa space training");

        return isNASAProgram ? "8-12 DAYS" : program.duration;
    };

    const handleEnrollNow = () => {
        const programSlug = program.slug;
        const programTitle = program.title?.toLowerCase();

        // Check if this is Ivy League Negotiation Workshop
        const isNegotiationWorkshop =
            programSlug === "ivy-league-negotiation-workshop" ||
            programSlug === "harvard-negotiation-workshop" ||
            programTitle?.includes("ivy league negotiation") ||
            programTitle?.includes("harvard negotiation");

        // If it's Ivy League Negotiation Workshop, redirect to elite-workshops page to choose program format
        if (isNegotiationWorkshop) {
            navigate("/elite-workshops/leadership-negotiation-communication#choose-format");
            return;
        }

        // Check if this is NASA Space Training program
        const isNASAProgram = programSlug === "nasa-space-training-8days" || programSlug === "nasa-space-training" || programTitle?.includes("nasa space training");

        // If it's NASA program, redirect to NASA programs page and scroll to training section
        if (isNASAProgram) {
            navigate("/nasa-programs?scrollTo=training");
            return;
        }

        // For other programs, clear cart and add this program
        // Convert price to number if it's a string
        const programData = {
            ...program,
            price: typeof program.price === "string" ? parseFloat(program.price) : program.price,
        };
        clearAndEnroll(programData as any, 1);
        // Navigate to cart/checkout page with auto-open modal flag
        navigate("/cart?autoOpen=true");
    };

    return (
        <div className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-md rounded-3xl border border-white/10 hover:border-blue-400/30 transition-all duration-500 overflow-hidden">
                {/* Premium Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">PREMIUM</span>
                    </div>
                </div>
                {/* Mission Duration & Availability */}
                <div className="absolute top-4 right-4 z-20 space-y-2">
                    <div className="bg-black/60 backdrop-blur-md rounded-full px-3 py-1 border border-white/20">
                        <div className="flex items-center text-white text-xs font-bold">
                            <Clock className="h-3 w-3 mr-1" />
                            {getDisplayDuration()}
                        </div>
                    </div>
                    {/* Scarcity Indicator */}
                    {program.available_tickets && program.remaining_tickets !== undefined && (
                        <div
                            className={`bg-black/60 backdrop-blur-md rounded-full px-3 py-1 border ${
                                program.remaining_tickets <= 5 ? "border-red-400/50" : program.remaining_tickets <= 15 ? "border-orange-400/50" : "border-green-400/50"
                            }`}
                        >
                            <div
                                className={`flex items-center text-xs font-bold ${
                                    program.remaining_tickets <= 5 ? "text-red-400" : program.remaining_tickets <= 15 ? "text-orange-400" : "text-green-400"
                                }`}
                            >
                                🎟️ {program.remaining_tickets} left
                            </div>
                        </div>
                    )}
                </div>
                <div className="relative">
                    <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        style={{ aspectRatio: "4/3" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                        <span className="bg-blue-400/20 backdrop-blur-md text-blue-400 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-blue-400/30">
                            {program.category}
                        </span>
                    </div>
                </div>
                <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {replaceHarvardWithIvyLeague(program.title)}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">{replaceHarvardWithIvyLeague(program.description)}</p>
                    <div className="mb-6">
                        <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-sm">PROGRAM FEATURES:</h4>
                        <ul className="space-y-2">
                            {program.features.slice(0, 3).map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                    <span className="text-blue-400 mr-3">▸</span>
                                    {replaceHarvardWithIvyLeague(feature)}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between space-y-1 mb-4">
                            <div className="text-gray-400 text-xs uppercase tracking-wider">PRICE</div>
                            <div className="flex items-center gap-2">
                                {/* Show "FROM" prefix for NASA Space Training with price $4,555 */}
                                {(program.slug === "nasa-space-training-8days" || program.title?.toLowerCase().includes("nasa space training")) &&
                                    (typeof program.price === "number" ? program.price === 4555 || Math.abs(program.price - 4555) < 0.01 : parseFloat(program.price) === 4555) && (
                                        <span className="text-sm md:text-base font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent uppercase tracking-wider">
                                            FROM
                                        </span>
                                    )}
                                <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    {program.formatted_price
                                        ? program.formatted_price
                                        : `$${typeof program.price === "string" ? parseFloat(program.price).toLocaleString() : program.price}`}
                                </span>
                            </div>
                        </div>
                        {/* Ticket Availability Bar */}
                        {program.available_tickets && program.remaining_tickets !== undefined && (
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Availability</span>
                                    <span
                                        className={`text-xs font-bold ${
                                            program.remaining_tickets <= 5 ? "text-red-400" : program.remaining_tickets <= 15 ? "text-orange-400" : "text-green-400"
                                        }`}
                                    >
                                        {program.remaining_tickets} / {program.available_tickets} spots
                                    </span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full transition-all duration-500 ${
                                            (program.sold_tickets || 0) / program.available_tickets > 0.8
                                                ? "bg-red-500"
                                                : (program.sold_tickets || 0) / program.available_tickets > 0.6
                                                ? "bg-orange-500"
                                                : "bg-green-500"
                                        }`}
                                        style={{
                                            width: `${Math.min(((program.sold_tickets || 0) / program.available_tickets) * 100, 100)}%`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        )}

                        <div className="flex items-center justify-between gap-2 sm:gap-3">
                            {!program.is_sold_out ? (
                                <button
                                    onClick={handleEnrollNow}
                                    className="bg-gradient-to-r from-[#9f162e] to-[#1f2444] text-white px-3 py-2 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider hover:from-[#1f2444] hover:to-[#9f162e] transition-all duration-300 shadow-lg flex-1 sm:flex-none"
                                >
                                    ENROLL NOW
                                </button>
                            ) : (
                                <button
                                    disabled
                                    className="bg-red-800/50 text-red-400 px-3 py-2 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider border border-red-600/50 flex-1 sm:flex-none cursor-not-allowed"
                                >
                                    SOLD OUT
                                </button>
                            )}
                            <Link
                                to={
                                    program.slug === "nasa-space-training" || program.title?.toLowerCase().includes("nasa space")
                                        ? "/nasa-programs"
                                        : program.slug === "harvard-negotiation-workshop"
                                        ? "/programs/ivy-league-negotiation-workshop"
                                        : program.slug
                                        ? `/programs/${program.slug}`
                                        : `/programs/${program.id}`
                                }
                                className="bg-gradient-to-r from-[#1f2444] via-[#2d3d66] to-[#9f162e] text-white px-3 py-2 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex-1 sm:flex-none text-center"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
