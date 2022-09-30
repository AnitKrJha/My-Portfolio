import '../sass/components/left-handle.styles.scss'
import {FiGithub,FiLinkedin,FiCodepen,} from 'react-icons/fi'
const LeftHandle = ()=>{
    return <div className="left-handle fixed bottom-0 left-[40px] hidden md:block">
        <ul className="left-handle-icons flex flex-col gap-5 items-center">
            <li className="left-handle-icon text-content-100 hover:scale-110 hover:-translate-y-1 hover:text-accent  hover:cursor-pointer transition"><FiGithub fontSize={'20px'}/></li>
            <li className="left-handle-icon text-content-100 hover:scale-110 hover:-translate-y-1 hover:text-accent hover:cursor-pointer transition"><FiLinkedin fontSize={'20px'}/></li>
            <li className="left-handle-icon text-content-100 hover:scale-110 hover:-translate-y-1 hover:text-accent hover:cursor-pointer transition"><FiCodepen fontSize={'20px'}/></li>
            <div className='line bg-content-100'></div>
        </ul>
    </div>
}

export default LeftHandle;