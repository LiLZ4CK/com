"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const positions = [
  {
    id: 1,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 0,
    children: [2, 3, 4, 5, 6],
  },
  {
    id: 2,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 1,
    children: [7],
  },
  {
    id: 3,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 1,
    children: [8],
  },
  {
    id: 4,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 1,
    children: [9],
  },
  {
    id: 5,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 1,
    children: [10],
  },
  {
    id: 6,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 1,
    children: [11],
  },
  {
    id: 7,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 2,
  },
  {
    id: 8,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 2,
  },
  {
    id: 9,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 2,
  },
  {
    id: 10,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 2,
    children: [12, 13, 14],
  },
  {
    id: 11,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 2,
  },
  {
    id: 12,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 3,
  },
  {
    id: 13,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 3,
  },
  {
    id: 14,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 3,
  },
];

export default function organi() {
  const [lines, setLines] = useState<Array<{ from: DOMRect; to: DOMRect }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLines = () => {
      if (!containerRef.current) return;

      const elements = containerRef.current.getElementsByClassName('org-box');
      const newLines: Array<{ from: DOMRect; to: DOMRect }> = [];

      positions.forEach(position => {
        if (position.children) {
          const parentElement = document.getElementById(`box-${position.id}`);
          position.children.forEach(childId => {
            const childElement = document.getElementById(`box-${childId}`);
            if (parentElement && childElement) {
              const parentRect = parentElement.getBoundingClientRect();
              const childRect = childElement.getBoundingClientRect();
              const containerRect = containerRef.current!.getBoundingClientRect();

              // Adjust coordinates relative to container
              const from = new DOMRect(
                parentRect.x - containerRect.x,
                parentRect.y - containerRect.y,
                parentRect.width,
                parentRect.height
              );
              const to = new DOMRect(
                childRect.x - containerRect.x,
                childRect.y - containerRect.y,
                childRect.width,
                childRect.height
              );
              newLines.push({ from, to });
            }
          });
        }
      });

      setLines(newLines);
    };

    updateLines();
    window.addEventListener('resize', updateLines);
    return () => window.removeEventListener('resize', updateLines);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Organisation Section */}
        <section className="text-center space-y-6">
          <h1 className=" mt-[7%] mb-[5%] text-[35px]"style={{fontFamily: "Romelio"}}>
            ORGANISATION
          </h1>
          <p className="max-w-7xl mx-auto text-[20px] leading-[50px] tracking-[2px] leading-relaxed" style={{fontFamily: "Raleway"}}>
            La force du Groupe Arena Property Development repose sur l'agilité de son organisation et l'expertise&nbsp;  
            pluridisciplinaire de ses collaborateurs. Sous la direction de notre CEO, chaque direction s'efforce à&nbsp;  
            atteindre l'excellence tout en garantissant un leadership efficace. Cette configuration permet au Groupe&nbsp; 
             d'adresser de manière adéquate les attentes de ses clients et partenaires.
          </p>
        </section>

        {/* Organigramme Section */}
        <section className="text-center  space-y-6">
          <h1 className=" mt-[9%] mb-[5%] text-[35px]"style={{fontFamily: "Romelio"}}>
            ORGANIGRAMME
          </h1>
          
          <div className="relative" ref={containerRef}>
            {/* Organigram Container */}
            <div className="flex flex-col items-center space-y-12">
              {/* Level 0 */}
              <Card id="box-1" className="org-box bg-gray-200 px-6 py-3 w-64 h-20 text-center relative z-10">
                <p className="text-[18px]" style={{fontFamily: "Raleway"}}>PRÉSIDENT-DIRECTEUR GÉNÉRAL</p>
              </Card>

              {/* Level 1 */}
              <div className="flex justify-between w-full gap-4">
                {positions
                  .filter((pos) => pos.level === 1)
                  .map((position) => (
                    <Card
                      key={position.id}
                      id={`box-${position.id}`}
                      className="org-box bg-[#1B3A4B] text-white px-4 py-3 w-64 h-20 text-center relative z-10"
                    >
                      <p className="text-[16px] "style={{fontFamily: "Raleway"}}>{position.title}</p>
                    </Card>
                  ))}
              </div>

              {/* Level 2 */}
              <div className="flex justify-between w-full gap-4">
                {positions
                  .filter((pos) => pos.level === 2)
                  .map((position) => (
                    <Card
                      key={position.id}
                      id={`box-${position.id}`}
                      className="org-box border border-[#1B3A4B] px-4 py-3 w-64 h-20 text-center relative z-10"
                    >
                      <p className="text-[16px]" style={{fontFamily: "Raleway"}}>{position.title}</p>
                    </Card>
                  ))}
              </div>

              {/* Level 3 */}
              <div className="flex justify-center gap-4">
                {positions
                  .filter((pos) => pos.level === 3)
                  .map((position) => (
                    <Card
                      key={position.id}
                      id={`box-${position.id}`}
                      className="org-box border border-[#1B3A4B] px-4 py-3 w-64 h-20 text-center relative z-10"
                    >
                      <p className="text-[16px]" style={{fontFamily: "Raleway"}}>{position.title}</p>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Connecting Lines */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
              {lines.map((line, index) => {
                const fromX = line.from.x + line.from.width / 2;
                const fromY = line.from.y + line.from.height;
                const toX = line.to.x + line.to.width / 2;
                const toY = line.to.y;

                return (
                  <path
                    key={index}
                    d={`M ${fromX} ${fromY} L ${fromX} ${(fromY + toY) / 2} L ${toX} ${(fromY + toY) / 2} L ${toX} ${toY}`}
                    stroke="#1B3A4B"
                    strokeWidth="1"
                    fill="none"
                  />
                );
              })}
            </svg>
          </div>
          
        </section>
        <section className="flex justify-center items-center">
        <h2 className="text-xl mt-16 xl:text-2xl 2xl:text-4xl font-medium text-[#212046] mb-4">
            GOUVERNANCE
        </h2>
        </section>
      </div>
    </main>
  );
}