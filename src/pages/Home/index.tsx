import { useState } from "react";
import fotodev from '../../../public/dev.png'
import { Habilities } from "../../components/habilities";
import { Projects } from "../../components/projects";
import { Contacts } from "../../components/contacts";
import curriculo from "../../../public/curriculo.pdf";

export function Home(){


    return(
        <div className='w-full mx-auto justify-center max-w-screen-2xl'>
           <div className="w-full mt-36 border-solid flex-wrap flex justify-center sm:justify-between">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-bold text-6xl">Olá, eu sou o</h1>
                    <h1 className="font-bold text-6xl text-purple-600 mt-3">Jefferson Lira</h1>
                    <span className="font-bold text-2xl mt-5 text-gray-500">desenvolvedor front-end</span>
                    <div className="flex gap-5 mt-7 justify-center">
                        <button className="w-36 h-8   bg-purple-600 transition-transform duration-300 p-4 rounded-full font-bold cursor-pointer flex items-center justify-center border-2 border-purple-400 hover:scale-95 hover:bg-purple-500 hover:text-gray-900">
                          <a href={curriculo} target="_blank">Download CV</a>
                        </button>

                        <button className="w-36 h-8 bg-purple-600 transition-transform duration-300 p-4 rounded-full font-bold cursor-pointer flex items-center justify-center border-2 border-purple-400 hover:scale-95 hover:bg-purple-500 hover:text-gray-900">
                            <a href="https://www.linkedin.com/in/jefferson-lira-a99584193/">LinkedIn</a>
                        </button>
                    </div>
                </div>
                <div className="cursor-pointer">
                    <img 
                        className="rounded-full w-96 h-96 transition-transform duration-300 hover:scale-110"
                        src={fotodev} 
                        alt=""
                    />
                 </div>
            </div>
            <div className="w-full max-w-screen-lg flex justify-center mx-auto px-5 md:px-0 flex-col">
                <h1 className="text-3xl text-center font-bold mb-9">Sobre mim</h1>
                <p className="text-gray-500 text-lg font-bold leading-9 text-center">
                    Desenvolvedor Front-end com experiência em React.js,  Redux, JavaScript, TypeScript, Styled Components, 
                    Material UI e consumo de APIs REST. Apaixonado pelo desenvolvimento de componentes
                    reutilizáveis. Também possui experiência em projetos gerenciados por Metodologias Ágeis.
                    Formado em Analise e desenvolvimento de Sistemas e mantenho o aprendizado de forma continuá sempre tentando me desafiar com algo maior.
                </p>
            </div>
            <Habilities/>
            <Projects/>
            <Contacts/>
        </div>
    )
}
