import { useEffect, useState } from "react";
import  cssicon  from '../../../public/cssicon.png'
import  html  from '../../../public/htmlicon.png'
import  javascript  from '../../../public/jsicon.png'
import  react  from '../../../public/reacticon.png'
import  tailwind  from '../../../public/tailwindicon.png'
import  firebase  from '../../../public/firebaseicon.png'

export function Habilities() {
    const [tech, setTech] = useState<{ id: any, name: string; img: string }[]>([]);
    let temaAtual = document.body.classList.contains('bg-slate-950')
    let newBg
        if(temaAtual){
          newBg = document.body.classList.add('bg-gray-200')
        }else{
           newBg = document.body.classList.remove('bg-gray-200')
        }

    let techList = [
        { id: 1, name: 'HTML5', img: html },
        { id: 2, name: 'CSS3', img: cssicon },
        { id: 3, name: 'JavaScript', img: javascript },
        { id: 4, name: 'React', img: react },
        { id: 5, name: 'Tailwind', img: tailwind },
        { id: 6, name: 'FireBase', img: firebase },
    ];

    useEffect(() => {
        setTech(techList);
    }, []);

    return (
        <>
        <section className="flex flex-wrap gap-7 justify-center">
            {tech.map((item) => (
                    <div 
                    className={`max-w-full w-24 items-center text-center font-bold mt-5 mb-5 p-2 border-purple-600 border-b-2  bg-gray-800 rounded-md cursor-pointer transition-all transform hover:scale-110`}
                    key={item.id}>
                        <p className="mb-2 text-gray-300">{item.name}</p>
                        <img 
                        className=" mx-auto max-w-full w-14"
                        src={item.img} 
                        alt="" />
                    </div>
                ))}
        </section> 
        </>
    );
}
