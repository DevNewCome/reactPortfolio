import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import htmlicon from '../../../public/htmlicon.png';
import jsicon from '../../../public/jsicon.png';
import reacticon from '../../../public/reacticon.png';
import firebaseicon from '../../../public/firebaseicon.png';
import lintree from '../../../public/linktree.png';
import Login from '../../../public/Login.png';
import pokedex from '../../../public/pokedex.png';
import cripto from '../../../public/cripto.png';
import shop from '../../../public/shop.png';
import filmes from '../../../public/filmes.png';
import previsao from '../../../public/tempo.png';
import { Link } from 'react-router-dom';

interface IProject {
    id: number;
    name: string;
    title: string;
    description: string;
    img?: string;
    git?: string;
    siteUrl?: string;
    techs: string[];
}

export function Projects() {
    const navigate = useNavigate();
    const [projects] = useState<IProject[]>([
        { 
            id: 1,
            name: 'login',
            title: 'Login',
            description: 'Projeto feito utilizando react, firebase e tailwind, onde usuário pode cadastrar tarefas, excluir, editar, e atualizar, cada usuário tem suas proprias tarefas, dados que veem direto do banco de dados firebase',
            img: Login,
            git: 'https://github.com/DevNewCome/projetologin',
            siteUrl: 'https://projeto-de-login.netlify.app/',
            techs: [reacticon, jsicon, htmlicon, firebaseicon]
        },
        { 
            id: 2,
            name: 'loading',
            title: 'Loading links',
            description: 'Projeto feito em react utilizando firebase e tailwind, onde o usuario pode cadastrar seus links de redes sociais e afins, podendo criar novos usuarios, e utilizando o firebase, poderá retornar os dados de cada usuário.',
            img: lintree,
            git: 'https://github.com/DevNewCome/linktree',
            siteUrl: 'https://putlinks.netlify.app/',
            techs: [reacticon, jsicon, htmlicon]
        },
        { 
            id: 3,
            name: 'pokedex',
            title: 'Pokedex',
            description: 'Projeto feito em react utilizando API pokedex, no projeto será possivel, filtrar, pesquisar, e ver os detalhes do pokemon desejado.',
            img: pokedex,
            git: 'https://github.com/DevNewCome/pokedexReact2',
            siteUrl: 'https://pokedexlist1.netlify.app/',
            techs: [reacticon, jsicon, htmlicon]
        },
        { 
            id: 4,
            name: 'currency',
            title: 'DevCurrency',
            description: 'projeto feito em react utilizando uma API que mostrar o valor atual das criptomoedas, e seus detalhes naquele dia/periodo, como sua valorização e desvalorização.',
            img: cripto,
            git: 'https://github.com/meuprojeto2',
            siteUrl: 'https://meusite.com/projeto2',
            techs: [reacticon, jsicon, htmlicon]
        },
        { 
            id: 5,
            name: 'shop',
            title: 'Shop e-Commerce',
            description: 'Projeto feito em react e tailwind, é um projeto template que simula uma página de E-commerce e algumas de suas funcionalidades como adicionar no carrinho e renderizar os produtos no carrinho',
            img: shop,
            git: 'https://github.com/meuprojeto2',
            siteUrl: 'https://meusite.com/projeto2',
            techs: [reacticon, jsicon, htmlicon]
        },
        { 
            id: 6,
            name: 'filme',
            title: 'Filme FLIX',
            description: 'Projeto feito em React que utiliza uma API de filmes que é possível pegar os dados dos filmes e séries que estão atualmente em cartaz, nesse projeto é possivel adicionar seus filmes/séries favoritas ao seus filmes favoritos, que fica salvo no cache do navegador',
            img: filmes,
            git: 'https://github.com/DevNewCome/primeFilmes',
            siteUrl: 'https://devnewflix.netlify.app/',
            techs: [reacticon, jsicon, htmlicon]
        },
        { 
            id: 7,
            name: 'weather',
            title: 'Weather',
            description: 'Projeto feito em react que utiliza uma API de previsão do tempo, onde mostra a temperatura atual, humildade, vento, nuvens, temp-Max e temp-Min',
            img: previsao,
            git: 'https://github.com/DevNewCome/previsaoReact',
            siteUrl: 'https://previsionreactweather.netlify.app/',
            techs: [reacticon, jsicon, htmlicon],
        },
    ]);


    const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

    const handleOpenModal = (project: IProject) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <main className='max-w-full w-7xl flex-col justify-center mt-10 mb-5'>
            <h1 className='text-center text-4xl'>Projetos</h1>
            <div className='max-w-full'>
                <div className='flex flex-wrap justify-center gap-7'>
                    {projects.map(item => (
                        <section
                            className='w-full rounded sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 text-center justify-center items-center flex-col mb-4 border-b-2 border-blue-500 transform transition-all hover:scale-105 m-2'
                            key={item.id}
                        >
                            <h1 className='font-bold text-2xl'>{item.title}</h1>
                            
                            {item.img && <img className='mx-auto h-72' src={item.img} alt={item.title} />}
                            <div className='flex flex-col justify-center gap-2'>
                                <button className='font-bold w-full max-w-56 mx-auto hover:bg-purple-400 bg-purple-500 mt-3 rounded'>
                                    <a href={item.git} target='_blank' rel='noopener noreferrer'>GitHub</a>
                                </button>
                                <button className='font-bold w-full rounded hover:bg-purple-400 max-w-56 mx-auto bg-purple-500'>
                                    <a href={item.siteUrl} target='_blank' rel='noopener noreferrer'>Page</a>
                                </button>
                                <button
                                    className='font-bold w-full rounded hover:bg-blue-400 max-w-56 mx-auto bg-blue-500 mb-3'
                                    onClick={() => handleOpenModal(item)}
                                >
                                    Description
                                </button>
                            </div>                        
                            <div className='flex justify-center'>
                                <p className='font-bold'>Tecnologias:</p>
                                <ul className='flex justify-center gap-1 p-1'>
                                    {item.techs.map((tech, index) => (
                                        <li key={index}>
                                            <img className='w-6' src={tech} alt={`Technology icon ${index + 1}`} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                    <div className='relative bg-slate-950 p-6 rounded-lg  max-w-3xl  mx-auto'>
                        <button
                            className='absolute top-2 right-3 bg-red-500 text-white px-2  rounded flex items-center justify-center  hover:bg-red-400'
                            onClick={handleCloseModal}
                        >
                            x
                        </button>
                        <h2 className='text-2xl font-bold mb-4 text-white text-center '>{selectedProject.title}</h2>
                        {selectedProject.img && <img className='my-4 mx-auto h-72 w-11/12 object-cover' src={selectedProject.img} alt={selectedProject.title} />}
                        <p className='text-white text-center font-bold '>{selectedProject.description}</p>
                    </div>
                </div>
            )}
        </main>
    );
}
