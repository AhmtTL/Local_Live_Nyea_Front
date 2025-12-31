import { motion } from "framer-motion"
import { Clock, DollarSign, Users, Rocket } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../context/CartContext"

interface DetailsProps {
  program8Days: any;
  program12Days: any;
}

const Details: React.FC<DetailsProps> = ({ program8Days, program12Days }) => {
    const { clearAndEnroll } = useCart();
    const navigate = useNavigate();

    const handleEnrollNow = (program: any) => {
      clearAndEnroll(program, 1);
      navigate('/cart?autoOpen=true');
    };

  const programs = [
    { data: program8Days, duration: "8 Days" },
    { data: program12Days, duration: "12 Days" }
  ].filter(p => p.data); // Filter out null programs

  return (
    <div className="relative py-12 lg:py-20 bg-cover bg-center" style={{
        backgroundImage: "url('/images/seek-signs.webp')"
      }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=""
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 lg:mb-8 text-center">
              SEEK SIGNS OF
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                LIFE MISSION
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-sm md:text-md lg:text-lg text-gray-300 mb-12 leading-relaxed text-center">
              Join NASA's groundbreaking mission to search for signs of life beyond Earth.
              This program combines cutting-edge astrobiology research with hands-on space
              technology development.
            </p>

            {/* Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:border-orange-500/50 transition-all duration-300"
                >
                  {/* Program Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white text-sm font-bold mb-1">Duration</div>
                        <div className="text-gray-300 text-base font-medium">{program.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <DollarSign className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white text-sm font-bold mb-1">Investment</div>
                        <div className="text-gray-300 text-base font-medium">{program.data.formatted_price}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white text-sm font-bold mb-1">Class Size</div>
                        <div className="text-gray-300 text-base font-medium">Max 20 Students</div>
                      </div>
                    </div>
                  </div>

                  {/* Enroll Now Button */}
                  <button
                    onClick={() => handleEnrollNow(program.data)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg flex items-center justify-center"
                  >
                    <Rocket className="mr-2 h-5 w-5" />
                    ENROLL NOW
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
  )
}

export default Details