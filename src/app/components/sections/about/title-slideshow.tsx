"use client";

export default function TitleSlideShow() {
  const clients = [
    { name: "YOU MATTER HERE" },
    { name: "BELIEVE. BELONG. BECOME." },
    { name: "THE FUTURE IS FULL OF HOPE" },
    { name: "YOU MATTER HERE" },
    { name: "BELIEVE. BELONG. BECOME." },
  ];

  // Duplicate the list to create seamless loop
  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-6 bg-white">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex space-x-4 animate-scroll">
          {doubledClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="inline-block flex-shrink-0 text-blue-900 text-xl font-bold px-2"
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>

      {/* Styles for Animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          width: max-content;
          min-width: 200%;
          animation: scroll 50s linear infinite;
        }
      `}</style>
    </section>
  );
}