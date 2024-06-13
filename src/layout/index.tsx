import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { useState } from "react";

export function Layout(){
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('bg-slate-950', 'text-white');
    } else {
      document.body.classList.remove('bg-slate-950', 'text-white');
    }
  };

  return(
    <div className="h-screen flex flex-col transition-colors duration-200"> {/* Adicione a classe de transição aqui */}
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <div className={`flex-grow ${darkMode ? 'dark' : ''}`}> {/* Use flex-grow para o conteúdo ocupar o restante da altura */}
        <Outlet/>
      </div>
    </div>
  );
}
