import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Award, Calendar } from "lucide-react";
import { FutureCEOConfig } from "../../data/futureCEOConfigs";
import { Link } from "react-router-dom";

interface CTAProps {
  config: FutureCEOConfig;
}

const CTA: React.FC<CTAProps> = ({ config }) => {
  return (
    // CTA removed per request (text block excluded)
    <></>
  );
};

export default CTA;
