import email from '../../../public/emailicon.png'
import linkedin from '../../../public/contactlinkedinicon.png'
import git from '../../../public/contactgiticon.png'


export function Contacts(){

    return(
        <>
            <div className='w-full flex flex-col  justify-center mt-32 mb-32 items-center text-center'>
            <div className='mx-auto mb-16 border-b-2 border-purple-600'>

                    <h1 className=' text-3xl font-bold'>Contatos</h1>
                </div>
                <div className='flex justify-around p-5  flex-wrap w-full max-w-screen-md'>
                    <div className=' cursor-pointer hover:scale-110 transition-all transform'>
                        <img 
                        style={{ filter: 'invert(60%) sepia(100%) saturate(10000%) hue-rotate(200deg)' }}
                        className={`mx-auto w-10 h-10  rounded text-gray-300`} 
                        src={email} 
                        alt="-Email" />
                        <span>E-mail</span>
                        <p className='font-bold text-xl hover:text-purple-600'>jefferson.senac1@yahoo.com</p>
                    </div>
                    <div className='cursor-pointer  hover:scale-110 transition-all transform '>
                        <img
                        
                        className='mx-auto w-10 h-10   rounded' 
                        src={git} 
                        alt="Github" />
                        <span>Github</span>
                        <p><a className='font-bold text-xl hover:text-purple-600' 
                        href="https://github.com/DevNewCome" 
                        target='_blank'>@devNewCome</a></p>
                    </div>
                    <div className='cursor-pointer hover:scale-110 transition-all transform '>
                        <img 
                         style={{ filter: 'invert(60%) sepia(100%) saturate(10000%) hue-rotate(200deg)' }}
                        className='mx-auto w-10 h-10  rounded' 
                        src={linkedin} 
                        alt="linkedin" />
                        <span>Linkedin</span><br />
                        <a 
                        className=' font-bold text-xl hover:text-purple-600'
                        href="https://www.linkedin.com/in/jefferson-lira-a99584193/" target='_blank'>@JeffersonLira</a>
                    </div>
                </div>
            </div>
        </>
    )
}