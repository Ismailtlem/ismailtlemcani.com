'use client';

import { useEffect, useRef, useState } from 'react';

const Terminal = () => {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    setHistory([
      {
        command: '',
        output: `ismail@paris:~$ ssh guest@ismailtlemcani.com
Welcome to Ismail's digital playground 🚀`,
      },
      {
        command: 'status',
        output: `╭─ System Status ────────────────────────────╮
│ Status: Online 🟢                          │
│ Location: Paris, France 🇫🇷                │
│ Uptime: 24/7                               │
╰────────────────────────────────────────────╯

╭─ Tech Stack ───────────────────────────────╮
│ Frontend                                   │
│  ├─ React 18                               │
│  ├─ Next.js 14                            │
│  ├─ TypeScript                            │
│  └─ Tailwind CSS                          │
│                                            │
│ Backend                                    │
│  ├─ Node.js                               │
│  ├─ Python                                │
│  └─ FastAPI                               │
│                                            │
│ Database                                   │
│  ├─ PostgreSQL                            │
│  └─ MongoDB                               │
│                                            │
│ Cloud & Tools                              │
│  ├─ AWS                                    │
│  ├─ Vercel                                │
│  ├─ Docker                                │
│  └─ Git                                    │
╰────────────────────────────────────────────╯

🎯 Current Focus: Building innovative web solutions
💡 Always learning and improving`,
      },
    ]);
  }, []);


  return (
    <div className="bg-gray-900 text-green-400 font-mono text-sm rounded border border-gray-700 max-w-2xl mx-auto my-8 w-full">

      <div 
        ref={terminalRef} 
        className="p-3 h-64 sm:h-64 overflow-y-auto scrollbar-thin"
      >
        {history.map((entry, index) => (
          <div key={index} className="mb-1">
            {entry.command && (
              <div className="flex">
                <span className="text-green-500 mr-1">guest@ismailtlemcani.com:~$</span>
                <span className="text-white ml-1">{entry.command}</span>
              </div>
            )}
            <pre className="whitespace-pre-wrap text-green-300 text-xs">{entry.output}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
