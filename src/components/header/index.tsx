import { useState } from "react";
import { FiCircle, FiCheckCircle } from "react-icons/fi";

interface HeaderProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

export function Header({ toggleTheme, darkMode }: HeaderProps) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <header className="z-10">
      <nav className={`w-full fixed flex justify-between h-20 items-center bg-slate-900 border-inline border-b-2 ${darkMode ? 'border-purple-700' : 'border-gray-400'}`}>
        <div className="ml-16 text-white p-2 rounded-full bg-transparent hover:bg-purple-700 hover:text-black" onClick={handleToggle}>
         
        </div>
        <span className="text-white text-2xl font-bold">Portfólio</span>
        <button onClick={handleToggle} className="mr-16 text-white flex items-center">
          <span className="mr-2 font-bold">Mode</span>
          {isToggled ? <FiCheckCircle size={25} className="cursor-pointer" /> : <FiCircle size={25} className="cursor-pointer" />}
        </button>
      </nav>
    </header>
  );
}
