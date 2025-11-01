

// File: components/Layer1.tsx

import Image from 'next/image';

const Layer1 = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="h-full flex items-center justify-center px-6 md:px-10 py-0"> {/* Removed py-10 to prevent overflow clipping */}
        <div className="max-w-6xl mx-auto text-center text-white w-full h-full flex flex-col justify-center"> {/* Added flex-col and h-full to better distribute space */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight flex-shrink-0"> {/* Added flex-shrink-0 to prevent compression */}
            Core Values
          </h2>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed flex-shrink-0"> {/* Reduced mb-12 to mb-8 for tighter spacing */}
            Join thousands of companies and candidates who have found their perfect match through authentic connections and meaningful conversations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 flex-shrink-0"> {/* Reduced gap-8 to gap-6 and mt-16 to mb-12 for compactness */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 flex-1"> {/* Reduced p-8 to p-6; added flex-1 for even distribution */}
              <Image 
                src="/vercel.svg" 
                alt="Fast Matching Icon" 
                className="w-16 h-16 mb-3 mx-auto object-contain" 
                width={64}
                height={64}
              />
              <h3 className="text-xl font-bold mb-3 text-white"> {/* Reduced text-2xl to text-xl; added text-white for visibility; reduced mb-4 to mb-3 */}
                Fast Matching
              </h3>
              <p className="text-white text-sm"> {/* Added text-sm for slight reduction */}
                Get connected with relevant opportunities in days, not weeks.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 flex-1">
              <Image 
                src="/vercel.svg" 
                alt="Quality First Icon" 
                className="w-16 h-16 mb-3 mx-auto object-contain" 
                width={64}
                height={64}
              />
              <h3 className="text-xl font-bold mb-3 text-white">
                Quality First
              </h3>
              <p className="text-white text-sm">
                We prioritize meaningful connections over quantity.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 flex-1">
              <Image 
                src="/vercel.svg" 
                alt="Ongoing Support Icon" 
                className="w-16 h-16 mb-3 mx-auto object-contain" 
                width={64}
                height={64}
              />
              <h3 className="text-xl font-bold mb-3 text-white">
                Ongoing Support
              </h3>
              <p className="text-white text-sm">
                Continuous guidance throughout your journey with us.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-shrink-0"> {/* Reduced gap-6 to gap-4; removed mt-16 entirely, as centering handles spacing */}
            <button className="bg-purple-500 hover:bg-white text-white font-bold py-3 px-6 rounded-full text-base transition-all duration-300 shadow-2xl"> {/* Reduced py-4 to py-3; text-lg to text-base for slight height reduction */}
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-6 rounded-full text-base transition-all duration-300 backdrop-blur-sm">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layer1;